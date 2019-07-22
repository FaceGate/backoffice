import { Injectable } from '@angular/core';
import { Area } from '../class/area/area';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  areas: Area[] = [];

  constructor(private http: HttpClient) {
  }

  getAreas(): Observable<any> {
    return this.http.get(`/api/areas`)
      .pipe(
        catchError(error => {
          console.error(error);
          return Observable.throw(error);
        })
      );
  }

  getArea(id: number): Observable<any> {
    return this.http.get(`/api/areas/${id}`)
      .pipe(
        catchError(error => {
          console.error(error);
          return Observable.throw(error);
        })
      );
  }

  updateArea(area: Area): void {
    const index = this.areas.findIndex(oldArea => oldArea.id === area.id);
    this.areas[index] = area;
  }
}
