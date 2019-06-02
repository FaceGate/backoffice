import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  constructor(
    private cloudinary: Cloudinary,
    private http: HttpClient
  ) {

  }

  public uploadPhoto(imageFile: File): Observable<any> {
    let formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', this.cloudinary.config().upload_preset);
    return this.http.post(`https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`, formData)
      .pipe(
        catchError(error => {
          console.error(error);
          return throwError('Error');
        })
      );
  }

  public faceCrop(public_id: string): string {
    return this.cloudinary.url(public_id, {
      transformation: [
        { width: 250, height: 250, gravity: "face", crop: "fill" }
      ]
    })
  }
}
