import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'https://localhost:7152/api/Room';  // Change to your actual API URL

  constructor(private http: HttpClient) {}
// Fetch rooms by PG ID
getRoomsByPgId(pgId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/pg/${pgId}`);
}

// Add a new room
addRoom(room: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, room);
}

// Edit room details
editRoom(roomId: number, room: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${roomId}`, room);
}

// Delete a room
deleteRoom(roomId: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/${roomId}`);
}
}