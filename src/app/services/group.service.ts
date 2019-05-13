import {Injectable} from '@angular/core';
import {Group} from '../class/group/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  group: Group;
  groups: Group[] = [
    {
      id: 1,
      name: 'Developpers',
      isActive: true,
      areas: [{id: 1, name: 'M1', isActive: true, doors: [{id: 1}]}]
    },
    {
      id: 2,
      name: 'RH',
      isActive: true,
      areas: [{id: 2, name: 'M2', isActive: true, doors: [{id: 2}]}
      ]
    }
  ];

  constructor() {
  }

  private CheckGroupObject(group: Group): boolean {
    if (!group.name || group.areas.length === 0) {
      alert('Un champ est manquant');
      return false;
    }
    return true;
  }

  getGroups() {
    return this.groups;
  }

  getGroup(id: number): Group {
    return this.groups.find(group => group.id === id);
  }

  addGroup(group: Group): boolean {
    if (this.CheckGroupObject(group)) {
      if (!group.id && this.groups.length > 0) {
        group.id = this.groups[this.groups.length - 1].id + 1;
      } else {
        group.id = 1;
      }
      this.groups.push(group);
      return true;
    }
    return false;
  }

  updateGroup(group: Group): void {
    if (this.CheckGroupObject(group)) {
      const index = this.groups.findIndex(oldGroup => oldGroup.id === group.id);
      this.groups[index] = group;
    }
  }

  removeGroup(group: Group): void {
    const index = this.groups.indexOf(group);
    this.groups.splice(index, 1);
  }
}
