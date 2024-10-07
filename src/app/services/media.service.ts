import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = 'https://localhost:7152/api/Media';

  constructor(private http: HttpClient) {}

  // Upload media
  uploadMedia(file: File, pgId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('pgId', pgId.toString());

    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

  // Get media by PG
  getMediaByPg(pgId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${pgId}`);
  }

  // Delete media
  deleteMedia(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getPgId(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/getPgId`);  // Adjust this endpoint according to your backend
  }
}