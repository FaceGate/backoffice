import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Group } from 'src/app/class/group/group';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { GroupService } from 'src/app/services/group.service';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete, MatSnackBar } from '@angular/material';
import { Member, Pictures, MemberDetails } from 'src/app/class/member/member';
import { MemberService } from 'src/app/services/member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { CloudinaryService } from 'src/app/services/cloudinary.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

  member: MemberDetails;
  groupCtrl = new FormControl;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredGroups: Observable<Group[]>;
  allGroups: Group[] = [];
  formValidity: boolean;
  showLoader = false;

  @ViewChild('groupInput') groupInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  public id: number;
  private sub: any;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private memberService: MemberService,
    private groupService: GroupService,
    private cloudinaryService: CloudinaryService,
    private snackBar: MatSnackBar
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });

    this.filteredGroups = this.groupCtrl.valueChanges.pipe(
      startWith(null),
      map((name: string | null) => name ? this._filter(name) : this.allGroups.slice()));
  }

  ngOnInit() {
    if (this.id) {
      this.memberService.getMember(this.id).subscribe(
        (data) => {
          this.member = data;
        }
      );
    } else {
      console.error("User id not found in url")
    }
    this.groupService.getGroups().subscribe(
      (res) => {
        this.allGroups = res;
      }
    );
  }

  //auto-complete functions//
  addGroup(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.groupCtrl.setValue(null);
    }
  }

  selectGroup(event: MatAutocompleteSelectedEvent): void {
    if (!this.member.group_ids || this.member.group_ids.indexOf(event.option.value.id) === -1) {
      this.member.group_ids.push(event.option.value.id);
    }
    this.groupInput.nativeElement.value = '';
    this.groupCtrl.setValue(null);
  }

  removeGroup(id: number): void {
    const index = this.member.group_ids.indexOf(id);

    if (index >= 0) {
      this.member.group_ids.splice(index, 1);
    }
  }
  /*
  getGroupNameById(id: number): Observable<any> {
    return this.groupService.getGroupsById(id);
  }
  */
  ////////////////////////////

  checkFormValidity(): boolean {
    return !this.memberService.checkMemberDetailsFields(this.member);
  }

  /*
  enrolMember(): void {
    this.memberService.addMember(this.member).subscribe(
      () => {
        this.openSnackBar(`New joiner: ${this.member.first_name} ${this.member.last_name} 🎉`);
        this.router.navigate(["/members"]);
      },
      (error) => {
        this.openSnackBar(error);
      }
    );
  }
  */

  updateMember(): void {
    this.memberService.updateMember(this.member);
    this.router.navigate(["/members"]);
  }

  newPicture(file: FileList): void {
    if (file && file.length > 0) {
      this.showLoader = true;
      //upload to cloudinary
      this.cloudinaryService.uploadPhoto(file[0])
        .subscribe(res => {
          this.verifyPicture(res.public_id, res.secure_url);
        })
    } else {
      console.error('No image found !');
    }
  }

  verifyPicture(public_id: string, image_url: string) {
    this.memberService.verifyUpdatedPicture(this.member.profile_pictures, image_url)
      .subscribe(
        (res) => {
          let isValid = true;
          res.forEach(element => {
            if (!element.valid) {
              isValid = false;
              this.memberService.raiseError(element.error);
              return;
            }
          });
          if (isValid) {
            //const display_url = this.cloudinaryService.faceCrop(public_id);
            this.member.profile_pictures = this.memberService.updatePictures(this.member.profile_pictures, image_url);
            this.openSnackBar("New picture validated 👏🏼");
          }
          this.showLoader = false;
        },
        (err) => {
          this.openSnackBar("Error during exchange with the server ⚰️");
          this.showLoader = false;
        }
      )
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 4200,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ['custom-snack-bar']
    });
  }

  removePicture(picture: Pictures) {
    this.member.profile_pictures.splice(this.member.profile_pictures.indexOf(picture), 1);
  }

  private _filter(value: string): Group[] {
    return this.allGroups.filter(group => group.name.toLowerCase().indexOf(value) === 0);
  }

}
