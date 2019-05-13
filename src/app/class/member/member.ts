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

  constructor() {
    //TODO REMOVE WHEN BACK-END IMPLEMENTED
    this.profilePictures = [
      {
        id: 1,
        url: 'https://res.cloudinary.com/esgi/image/upload/v1556626967/Facegate/images_ovmr5l.jpg'
      }
    ];
    this.groups = [];
    this.isActive = true;
  }
}
