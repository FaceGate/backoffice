export interface Door {
  id: number;
}

export class Area {
  id: number;
  name: string;
  isActive: boolean;
  doors: Door[];
}
