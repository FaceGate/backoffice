import { Group } from '../group/group';

export interface Pictures {
  id: number;
  url: string;
}

export class Member {
  id: number;
  firstName: string;
  lastName: string;
  expirationDate: Date;
  profilePictures: Pictures[];
  isActive: boolean;
  groups: Group[];

  constructor(
    id?: number,
    firstName?: string,
    lastName?: string,
    expirationDate?: Date,
    profilePictures?: Pictures[],
    isActive?: boolean,
    groups?: Group[]
  ) {
    //TODO REMOVE WHEN BACK-END IMPLEMENTED
    this.id = id || null;
    this.firstName = firstName || null;
    this.lastName = lastName || null;
    this.expirationDate = expirationDate || null;
    this.profilePictures = profilePictures || [];
    this.isActive = isActive || true;
    this.groups = groups || [];
  }

  public addPicture(url: string): void {
    this.profilePictures.push({
      id: this.profilePictures.length,
      url: url
    });
  }

  public addPictures(files: FileList): void {
    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        var reader = new FileReader();
        var file = files[i];
        if (file.type.includes("image")) {
          reader.readAsDataURL(file);
          reader.onload = (event: any) => {
            this.addPicture(this.upload(event.target["result"]));
          }
        }
      }
    }
  }

  public removePicure(picture: Pictures): void {
    this.profilePictures.splice(this.profilePictures.indexOf(picture), 1);
  }

  private upload(file: string): string {
    //TODO call check picture and return url or error type
    return file;
  }
}
