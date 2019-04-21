export interface door {
    id: number;
}

export class Area {
    id: number;
    name: string;
    is_active: boolean;
    doors: door[];
}