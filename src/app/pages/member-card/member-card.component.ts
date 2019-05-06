import {Component, OnInit, Input} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member} from '../../class/member/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() member: Member;

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
  }

  updateMember(member: Member) {
    this.memberService.updateMember(member);
  }

  removeMember(member: Member) {
    this.memberService.removeMember(member);
  }

  addMember(member: Member) {
    this.memberService.addMember(member);
  }
}
