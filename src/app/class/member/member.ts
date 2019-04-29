import { Group } from '../group/group';

export interface Pictures {
    id: number;
    url: string;
}

export default class Member {
    id: number;
    firstName: string;
    lastName: string;
    expirationDate: string;
    profilePictures: Pictures[];
    isActive: boolean;
    groups: Group[];
}
