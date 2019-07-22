import {Component, OnInit, Input} from '@angular/core';
import {Group} from '../../class/group/group';
import {GroupService} from '../../services/group.service';
import {MemberService} from '../../services/member.service';
import {Member, MemberDetails} from '../../class/member/member';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {
  members: MemberDetails[];
  @Input() group: Group;

  constructor(private groupService: GroupService, private memberService: MemberService) {
  }

  ngOnInit() {
    this.memberService.getMembers().subscribe(
      (res) => {
        this.members = res.filter(member => member.groups.find(group => group.id === this.group.id));
      }
    );
  }

  addGroup(group: Group) {
    this.groupService.addGroup(group);
  }

  // mock function
  updateGroup(group: Group) {
    this.groupService.updateGroup(group);
  }

  removeGroup(group: Group) {
    this.groupService.removeGroup(group);
  }
}
