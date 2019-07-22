import {Component, OnInit, Input} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member, MemberDetails} from '../../class/member/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() member: MemberDetails;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
  }

  updateMember(member: MemberDetails) {
    this.memberService.updateMember(member);
  }

  removeMember(member: MemberDetails) {
    this.memberService.removeMember(member);
  }
  /*
  getGroupNameById(id: number) {
    return this.groupService.getGroupsById(id);
    //return this.groupService.getGroup(id).name;
  }
  */
}
