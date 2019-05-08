import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member} from '../../class/member/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MemberService) {
  }


  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  addMember() {
  }

}
