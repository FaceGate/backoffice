import {Injectable} from '@angular/core';
import {Area} from '../class/area/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  areas: Area[] = [
    {id: 1, name: 'M1', isActive: true, doors: [{id: 1}]},
    {id: 2, name: 'M2', isActive: true, doors: [{id: 2}]},
    {id: 3, name: 'M3', isActive: true, doors: [{id: 3}]}
  ];

  constructor() {
  }

  getAreas() {
    return this.areas;
  }

  getArea(id: number): Area {
    return this.areas.find(area => area.id === id);
  }

  updateArea(area: Area): void {
    const index = this.areas.findIndex(oldArea => oldArea.id === area.id);
    this.areas[index] = area;
  }
}
