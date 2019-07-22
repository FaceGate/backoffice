import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member} from '../../class/member/member';
import { Observable } from 'rxjs';

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
    this.memberService.getMembers().subscribe(
      (data) => {
        this.members = data;
      }
    );
  }

  addMember() {
  }

}
