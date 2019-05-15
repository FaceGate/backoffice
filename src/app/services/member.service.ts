import { Injectable } from '@angular/core';
import { Member } from '../class/member/member';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public member: Member;
  members: Member[] = [];

  constructor(private snackBar: MatSnackBar) {
    //mock data
    let fakeMember = new Member(
      1,
      "Mark",
      "Zuckerberg",
      new Date(),
      [
        {
          id: 1,
          url: "https://pic.clubic.com/v1/images/1691560/raw"
        }
      ],
      true,
      [
        {
          id: 1,
          name: "Developpers",
          isActive: true,
          areas: [{
            id: 1,
            name: "M1",
            isActive: true,
            doors: [{
              id: 1
            }]
          }]
        }
      ]);

    this.members.push(fakeMember)
  }

  private checkMemberObject(member: Member): boolean {
    if (!member.firstName || !member.lastName || member.groups.length === 0) {
      this.snackBar.open("Missing Field !", null, {
        duration: 3000,
        verticalPosition: "bottom",
        horizontalPosition: "right"
      });
      return false;
    }
    return true;
  }

  public getMembers(): Member[] {
    return this.members;
  }

  public getMember(id: number): Member {
    return this.members.find(member => member.id === id);
  }

  public getMembersFromGroup(id: number): Member[] {
    return this.members.filter(member => member.groups.filter(group => group.id === id));
  }

  public addMember(member: Member): boolean {
    if (this.checkMemberObject(member)) {
      // const errorKey = 'TOO_MANY_FACES';
      // alert(ERRORS[errorKey]);
      if (!member.id && this.members.length > 0) {
        member.id = this.members[this.members.length - 1].id + 1;
      } else {
        member.id = 1;
      }
      this.members.push(member);
      this.snackBar.open(`New joiner: ${member.firstName} ${member.lastName} 🎉`, null, {
        duration: 3000,
        verticalPosition: "bottom",
        horizontalPosition: "right"
      });
      return true;
    }
    return false;
  }

  public updateMember(member: Member): void {
    if (this.checkMemberObject(member)) {
      const index = this.members.findIndex(oldMember => oldMember.id === member.id);
      this.members[index] = member;
    }
  }

  public removeMember(member: Member): void {
    const index = this.members.indexOf(member);
    this.members.splice(index, 1);
  }
}
