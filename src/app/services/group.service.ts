import {Injectable} from '@angular/core';
import {Group} from '../class/group/group';
import { MatSnackBar } from '@angular/material';

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

  constructor(private snackBar: MatSnackBar) {
  }

  public CheckGroupFields(group: Group): boolean {
    if (!group.name || group.areas.length === 0) {
      return false;
    }
    return true;
  }

  getGroups() {
    return this.groups;
  }

  getGroup(id: number): Group {
    //return object deep copy
    return Object.create(this.groups.find(group => group.id === id));
  }

  addGroup(group: Group): boolean {
    if (this.CheckGroupFields(group)) {
      if (!group.id && this.groups.length > 0) {
        group.id = this.groups[this.groups.length - 1].id + 1;
      } else {
        group.id = 1;
      }
      this.groups.push(group);
      this.openSnackBar(`${group.name} created 🎉`);
      return true;
    } else {
      this.openSnackBar("Missing Field !");
      return false;
    }
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 4200,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ['custom-snack-bar']
    });
  }

  updateGroup(group: Group): void {
    if (this.CheckGroupFields(group)) {
      const index = this.groups.findIndex(oldGroup => oldGroup.id === group.id);
      this.groups[index] = group;
    }
  }

  removeGroup(group: Group): void {
    const index = this.groups.indexOf(group);
    this.groups.splice(index, 1);
  }
}
