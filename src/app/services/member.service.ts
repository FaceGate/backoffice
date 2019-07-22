import { Injectable } from '@angular/core';
import { Member, Pictures, MemberDetails } from '../class/member/member';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { ERRORS_MESSAGE } from "../constants/errors";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public member: Member;
  public members: Member[] = [];

  public memberDetail: MemberDetails;
  public memberDetails: MemberDetails[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  public checkMemberDetailsFields(member: MemberDetails): boolean {
    if (member.profile_pictures.length === 0 || !member.first_name || !member.last_name || !member.groups || !member.expiration_date) {
      return false;
    }
    return true;
  }

  public checkMemberFields(member: Member): boolean {
    if (member.profile_pictures.length === 0 || !member.first_name || !member.last_name || member.group_ids.length === 0 || !member.expiration_date) {
      return false;
    }
    return true;
  }

  public getMembers(): Observable<any> {
    return this.http.get(`/api/users`)
      .pipe(
        catchError(error => {
          console.error(error);
          return Observable.throw(error);
        })
      );
  }

  public getMembersDetails(): Observable<any> {
    return this.http.get(`/api/users`)
      .pipe(
        catchError(error => {
          console.error(error);
          return Observable.throw(error);
        })
      );
  }

  public getMember(id: number): Observable<any> {
    return this.http.get(`/api/users/${id}`)
      .pipe(
        catchError(error => {
          console.error(error);
          return Observable.throw(error);
        })
      );
  }

  public getMembersFromGroup(group_id: number): Observable<any> {
    return this.getMembers().pipe(
      filter(member => member.group_ids.indexOf(group_id) > -1),
      map(member => member),
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }

  public addMember(member: Member): Observable<any> {
    if (this.checkMemberFields(member)) {
      return this.http.post(`/api/users`, member)
        .pipe(
          catchError(error => {
            console.error(error);
            return Observable.throw(error);
          })
        );
    } else {
      return Observable.throw("Missing Field !");
    }
  }

  public updateMember(member: MemberDetails): void {
    if (this.checkMemberDetailsFields(member)) {
      const index = this.memberDetails.indexOf(member);
      //.findIndex(oldMember => oldMember.id === member.id);
      this.memberDetails[index] = member;
    }
  }

  public removeMember(member: MemberDetails): void {
    const index = this.memberDetails.indexOf(member);
    this.members.splice(index, 1);
  }

  public addPicture(pictures: string[], image_url: string): string[] {
    pictures.push(image_url);
    return pictures;
  }

  public updatePictures(pictures: Pictures[], image_url: string): Pictures[] {
    pictures.push({
      id: pictures.length,
      link: image_url
    });
    return pictures;
  }

  //TODO: use when database
  public removePicure(pictures: Pictures[], picture: Pictures): Pictures[] {
    return pictures;
  }

  public verifyPicture(pictures: string[], image_url: string): Observable<any> {
    //let tmpImageUrls: string[] = pictures.map(pic => pic.url);
    //tmpImageUrls.push(image_url);
    return this.http.post(`/api/verify`, { "image_urls": pictures })
      .pipe(
        catchError(error => {
          let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg);
          return Observable.throw(error);
        })
      );
  }

  public verifyUpdatedPicture(pictures: Pictures[], image_url: string): Observable<any> {
    let tmpImageUrls: string[] = pictures.map(pic => pic.link);
    tmpImageUrls.push(image_url);
    return this.http.post(`/api/verify`, { "image_urls": tmpImageUrls })
      .pipe(
        catchError(error => {
          let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg);
          return Observable.throw(error);
        })
      );
  }

  public raiseError(error: string): void {
    this.openSnackBar(ERRORS_MESSAGE[error]);
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 4200,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ['custom-snack-bar']
    });
  }
}
