import {Area} from '../area/area';

export class Group {
  id: number;
  name: string;
  isActive: boolean;
  areas: Area[];

  constructor() {
    this.isActive = true;
    this.areas = [];
  }
}
