import { Injectable } from '@angular/core';
import { Group } from '../class/group/group';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

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
      areas: [{ id: 1, name: 'M1', isActive: true, doors: [{ id: 1 }] }]
    },
    {
      id: 2,
      name: 'RH',
      isActive: true,
      areas: [{ id: 2, name: 'M2', isActive: true, doors: [{ id: 2 }] }
      ]
    }
  ];

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
  }

  public CheckGroupFields(group: Group): boolean {
    if (!group.name || group.areas.length === 0) {
      return false;
    }
    return true;
  }

  getGroups(): Observable<any> {
    return this.http.get(`/api/groups`)
      .pipe(
        catchError(error => {
          console.error(error);
          return Observable.throw(error);
        })
      );
  }

  getGroupsById(group_id: number): Observable<any> {
    return this.http.get(`/api/groups/${group_id}`)
      .pipe(
        catchError(error => {
          console.error(error);
          return Observable.throw(error);
        })
      );
  }

  addGroup(group: Group): Observable<any> {
    let area_ids: number[] = [];
    group.areas.forEach(area => {
      area_ids.push(area.id);
    });
    return this.http.post(`/api/groups`, { "name": group.name, "area_ids": area_ids })
      .pipe(
        catchError(error => {
          return Observable.throw(error);
        })
      );
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
