import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member, MemberDetails} from '../../class/member/member';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: MemberDetails[];

  constructor(private memberService: MemberService) {
  }


  ngOnInit() {
    this.memberService.getMembersDetails().subscribe(
      (data) => {
        this.members = data;
      }
    );
  }

  addMember() {
  }

}
