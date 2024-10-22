import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from '../Models/media';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = 'https://localhost:7152/api/Media';  // Adjust this URL to match your backend

  constructor(private http: HttpClient) { }

  // Upload media
  uploadMedia(pgId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/upload/${pgId}`, formData);
  }

  // Get media by PG ID
  getMediaByPgId(pgId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${pgId}`);
  }

  // Delete media
  deleteMedia(mediaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${mediaId}`);
  }
}