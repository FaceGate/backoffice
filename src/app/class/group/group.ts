import {Area} from '../area/area';

export interface SimpleUser {
  id: number;
  first_name: string;
  last_name: string;
}

export class Group {
  id: number;
  name: string;
  areas: Area[];
  users?: SimpleUser[];
  isActive?: boolean;

  constructor() {
    this.isActive = true;
    this.areas = [];
  }
}