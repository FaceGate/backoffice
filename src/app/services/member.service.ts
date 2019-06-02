import { Injectable } from '@angular/core';
import { Member, Pictures } from '../class/member/member';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ERRORS_MESSAGE } from "../constants/errors";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public member: Member;
  public members: Member[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    //mock data
    let fakeMember = new Member(
      1,
      "Mark",
      "Zuckerberg",
      new Date(),
      [
        {
          id: 1,
          url: "https://res.cloudinary.com/facegate/image/upload/v1559442621/mark2_jqncfd.jpg",
          display_url: "http://res.cloudinary.com/facegate/image/upload/c_fill,g_face,h_250,w_250/mark2_jlylnz"
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

    this.members.push(fakeMember);
  }

  public checkMemberFields(member: Member): boolean {
    if (member.profilePictures.length === 0 || !member.firstName || !member.lastName || member.groups.length === 0 || !member.expirationDate) {
      return false;
    }
    return true;
  }

  public getMembers(): Member[] {
    return this.members;
  }

  public getMember(id: number): Member {
    //return object deep copy
    return Object.create(this.members.find(member => member.id === id));
  }

  public getMembersFromGroup(id: number): Member[] {
    return this.getMembers().filter(
      element => {
        var found: boolean = false;
        element.groups.forEach(group => {
          if (group.id === id)
            found = true;
        })
        return found;
      }
    );
  }

  public addMember(member: Member): boolean {
    if (this.checkMemberFields(member)) {
      if (!member.id && this.members.length > 0) {
        member.id = this.members[this.members.length - 1].id + 1;
      } else {
        member.id = 1;
      }
      this.members.push(member);
      this.snackBar.open(`New joiner: ${member.firstName} ${member.lastName} 🎉`, null, {
        duration: 4200,
        verticalPosition: "bottom",
        horizontalPosition: "right"
      });
      return true;
    } else {
      this.snackBar.open("Missing Field !", null, {
        duration: 4200,
        verticalPosition: "bottom",
        horizontalPosition: "right"
      });
      return false;
    }
  }

  public updateMember(member: Member): void {
    if (this.checkMemberFields(member)) {
      const index = this.members.findIndex(oldMember => oldMember.id === member.id);
      this.members[index] = member;
    }
  }

  public removeMember(member: Member): void {
    const index = this.members.indexOf(member);
    this.members.splice(index, 1);
  }

  public addPicture(pictures: Pictures[], image_url: string, display_url?: string): Pictures[] {
    pictures.push({
      id: pictures.length,
      url: image_url,
      display_url: display_url || null
    });
    return pictures;
  }

  //TODO: use when database
  public removePicure(pictures: Pictures[], picture: Pictures): Pictures[] {
    return pictures;
  }

  public verifyPicture(pictures: Pictures[], image_url: string): Observable<any> {
    let tmpImageUrls: string[] = pictures.map( pic => pic.url );
    tmpImageUrls.push(image_url);
    return this.http.post(`/api/verify`, { "image_urls" : tmpImageUrls })
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError('Error');
        })
      );
  }

  public raiseError(error: string): void {
    this.snackBar.open(ERRORS_MESSAGE[error], null, {
      duration: 4200,
      verticalPosition: "bottom",
      horizontalPosition: "right"
    });
  }
}
