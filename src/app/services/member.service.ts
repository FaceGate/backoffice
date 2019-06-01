import {Injectable} from '@angular/core';
import {Member, Pictures} from '../class/member/member';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public member: Member;
  members: Member[] = [];
  uploadErrors = {
    "NO_FACE": "Aucun visage n'a été detecté sur cette photo",
    "TOO_MANY_FACES": "Plusieurs visages ont été détectés sur cette photo",
    "NOT_SAME_PERSON": "Nous pensons que cette photo ne correspond pas à la personne précédente",
    "DUPLICATE_IMAGE": "Cette photo est identique a une photo précédemment envoyée"
  };

  fakeUploadResponse = {
    "image_url": "http://www.fredzone.org/wp-content/uploads/2019/05/prise-en-main-oneplus-7-pro-5.jpg",
    "valid": true,
    "error": "NO_FACE"
  }


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
    } else {
      this.snackBar.open("Missing Field !", null, {
        duration: 3000,
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

  public addPictures(pictures: Pictures[], files: FileList): Pictures[] {
    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        var reader = new FileReader();
        var file = files[i];
        if (file.type.includes("image")) {
          reader.readAsDataURL(file);
          if (this.verifyPicture(event.target["result"])) {
            reader.onload = (event: any) => {
              pictures.push({
                id: pictures.length,
                url: event.target["result"]
              });
            };
          }
        }
      }
    }

    return pictures;
  }

  public removePicure(pictures: Pictures[], picture: Pictures): Pictures[] {
    return pictures.splice(pictures.indexOf(picture), 1);
  }

  public verifyPicture(image_url: string): string | null {
    // TODO upload picture
    if (!this.fakeUploadResponse.valid) {
      this.snackBar.open(`${this.uploadErrors[this.fakeUploadResponse.error]} ❌`, null, {
        duration: 3000,
        verticalPosition: "bottom",
        horizontalPosition: "right"
      });

      return null;
    }

    return this.fakeUploadResponse.image_url;
  }
}
