import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private baseUrl = 'https://localhost:7152/api/PgOwner'; 
  constructor(private http:HttpClient) { }
  // Upload media
  uploadMedia(pgId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/UploadMedia/${pgId}`, formData);
  }

  // Get all media for a PG
  GetMedia(pgId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetMedia/${pgId}`);
  }

  // Edit media
  editMedia(mediaId: number, media: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/EditMedia/${mediaId}`, media);
  }
  // Delete media
  deleteMedia(mediaId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteMedia/${mediaId}`);
  }
}
