import {Group} from '../group/group';

export interface Pictures {
  id: number;
  url: string;
  display_url: string;
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
    groups?: Group[]) {
    //TODO REMOVE WHEN BACK-END IMPLEMENTED
    this.id = id || null;
    this.firstName = firstName || null;
    this.lastName = lastName || null;
    this.expirationDate = expirationDate || null;
    this.profilePictures = profilePictures || [];
    this.isActive = isActive || true;
    this.groups = groups || [];
  }
}
