import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Member} from '../../class/member/member';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatDatepicker} from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import {Group} from '../../class/group/group';
import {MemberService} from '../../services/member.service';
import {GroupService} from '../../services/group.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit, OnDestroy {
  member: Member;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  groupCtrl = new FormControl;
  filteredGroups: Observable<Group[]>;
  allGroups: Group[];

  @ViewChild('groupInput') groupInput: ElementRef<HTMLInputElement>;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private id: number;
  private sub: any;

  constructor(public route: ActivatedRoute, private memberService: MemberService, private groupService: GroupService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });

    this.filteredGroups = this.groupCtrl.valueChanges.pipe(
      startWith(null),
      map((name: string | null) => name ? this._filter(name) : this.allGroups.slice()));
  }

  ngOnInit() {
    this.member = this.memberService.getMember(this.id);
    // this.member.expirationDate = new Date(this.member.expirationDate); // DO NOT DELETE
    this.allGroups = this.groupService.getGroups();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

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
    if (this.member.groups.indexOf(event.option.value) === -1) {
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

  updateMember(): void {
    this.memberService.updateMember(this.member);
  }

  private _filter(value: string): Group[] {
    return this.allGroups.filter(group => group.name.toLowerCase().indexOf(value) === 0);
  }
}
