import {Group} from '../group/group';

export interface Pictures {
  id: number;
  link: string;
  display_url?: string;
}

export interface SimpleGroup {
  id: number,
  name: string
}

export class Member {
  id: number;
  first_name: string;
  last_name: string;
  expiration_date: Date;
  profile_pictures: string[];
  is_activated: boolean;
  group_ids: number[];


  constructor(
    id?: number,
    first_name?: string,
    last_name?: string,
    expiration_date?: Date,
    profile_pictures?: string[],
    is_activated?: boolean,
    group_ids?: number[]) {
    //TODO REMOVE WHEN BACK-END IMPLEMENTED
    this.id = id || null;
    this.first_name = first_name || null;
    this.last_name = last_name || null;
    this.expiration_date = expiration_date || null;
    this.profile_pictures = profile_pictures || [];
    this.is_activated = is_activated || true;
    this.group_ids = group_ids || [];
  }
}

export class MemberDetails {
  id: number;
  first_name: string;
  last_name: string;
  expiration_date: Date;
  profile_pictures: Pictures[];
  is_activated: boolean;
  groups: SimpleGroup[];


  constructor(
    id?: number,
    first_name?: string,
    last_name?: string,
    expiration_date?: Date,
    profile_pictures?: Pictures[],
    is_activated?: boolean,
    groups?: SimpleGroup[]) {
    //TODO REMOVE WHEN BACK-END IMPLEMENTED
    this.id = id || null;
    this.first_name = first_name || null;
    this.last_name = last_name || null;
    this.expiration_date = expiration_date || null;
    this.profile_pictures = profile_pictures || [];
    this.is_activated = is_activated || true;
    this.groups = groups || [];
  }
}