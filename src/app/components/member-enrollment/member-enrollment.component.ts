import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Group } from 'src/app/class/group/group';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { GroupService } from 'src/app/services/group.service';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';
import { Member, Pictures } from 'src/app/class/member/member';
import { MemberService } from 'src/app/services/member.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-member-enrollment',
  templateUrl: './member-enrollment.component.html',
  styleUrls: ['./member-enrollment.component.scss']
})
export class MemberEnrollmentComponent implements OnInit {

  member: Member;
  groupCtrl = new FormControl;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredGroups: Observable<Group[]>;
  allGroups: Group[];
  formValidity: boolean;


  @ViewChild('groupInput') groupInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private id: number;
  private sub: any;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private memberService: MemberService,
    private groupService: GroupService
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });

    this.filteredGroups = this.groupCtrl.valueChanges.pipe(
      startWith(null),
      map((name: string | null) => name ? this._filter(name) : this.allGroups.slice()));
  }

  ngOnInit() {
    this.member = this.id ? this.memberService.getMember(this.id) : new Member;
    this.allGroups = this.groupService.getGroups();
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
    if (!this.member.groups || this.member.groups.indexOf(event.option.value) === -1) {
      this.member.groups.push(event.option.value);
    }
    this.groupInput.nativeElement.value = '';
    this.groupCtrl.setValue(null);
  }

  removeGroup(group: Group): void {
    const index = this.member.groups.indexOf(group);

    if (index >= 0) {
      this.member.groups.splice(index, 1);
    }
  }
  ////////////////////////////

  checkFormValidity(): boolean {
    return !this.memberService.checkMemberFields(this.member);
  }

  enrolMember(): void {
    if (this.memberService.addMember(this.member)) {
      console.log("enrollment successfull !");
      this.router.navigate(["/members"]);
    } else {
      //TODO NOTIFY FORM ERROR
      console.log("enrollment failed !")
    }
  }

  updateMember(): void {
    this.memberService.updateMember(this.member);
    this.router.navigate(["/members"]);
  }

  uploadPictures(files: FileList) {
    //this.member.addPictures(files);
    this.member.profilePictures = this.memberService.addPictures(this.member.profilePictures, files);
  }

  removePicture(picture: Pictures) {
    //this.member.removePicure(picture);
    this.member.profilePictures = this.memberService.removePicure(this.member.profilePictures, picture);
  }

  private _filter(value: string): Group[] {
    return this.allGroups.filter(group => group.name.toLowerCase().indexOf(value) === 0);
  }

}
