import {Group} from '../group/group';

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
}
