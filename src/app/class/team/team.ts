import { Area } from '../area/area';

export class Team {
    id: number;
    name: string;
    is_active: boolean;
    areas: Area[];
}