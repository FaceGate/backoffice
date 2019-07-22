import {Component, OnInit, Input} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member, MemberDetails} from '../../class/member/member';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() member: MemberDetails;

  constructor(private memberService: MemberService, private groupService: GroupService) {
  }

  ngOnInit() {
  }

  updateMember(member: MemberDetails) {
    this.memberService.updateMember(member);
  }

  removeMember(member: Member) {
    this.memberService.removeMember(member);
  }

  addMember(member: Member) {
    this.memberService.addMember(member);
  }

  getGroupNameById(id: number): string {
    return this.groupService.getGroup(id).name;
  }
}
