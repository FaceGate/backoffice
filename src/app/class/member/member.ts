import { Team } from '../team/team';

export interface Pictures {
    id: number;
    url: string;
}

export default class Member {
    id: number;
    first_name: string;
    last_name: string;
    expration_date: string;
    profile_pictures: Pictures[];
    is_active: boolean;
    teams: Team[];
}
