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

  // Method to upload media file as byte array
  uploadMedia(pgId: number, file: File): Observable<Media> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<Media>(`${this.apiUrl}/UploadMedia?pgId=${pgId}`, formData);
  }

  // Method to fetch media by PG ID
  getMediaByPgId(pgId: number): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.apiUrl}/ByPgId/${pgId}`).pipe(
      tap((media) => {
        console.log('Fetched Media:', media);
      })
    );
  }  

  // Method to delete media by media ID
  deleteMedia(mid: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${mid}`);
  }
}
