import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PG } from '../Models/pglist';
import { Room } from '../Models/room';
@Injectable({
  providedIn: 'root'
})
export class PgownerService {
  private baseUrl = 'https://localhost:7152/api'; // Base API URL

  constructor(private http: HttpClient) {}

  // Register a new PG
  registerPG(pgData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Pg/register`, pgData);
  }

  // Get approved PGs for a specific owner
  getApprovedPGs(ownerId: number): Observable<PG[]> {
    return this.http.get<PG[]>(`${this.baseUrl}/Pg/owner/${ownerId}/approved`);
  }

  // Get PG details by ID
  getPgById(pgId: number): Observable<PG> {
    return this.http.get<PG>(`${this.baseUrl}/Pg/${pgId}`);
  }

  // Update PG details by ID
  updatePG(pgId: number, pg: PG): Observable<any> {
    return this.http.put(`${this.baseUrl}/Pg/edit/${pgId}`, pg);
  }

  // Delete PG by ID
  deletePG(pgId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Pg/${pgId}`);

}
//   approveRequest(Pgid: number): Observable<any> {
//     return this.http.post<any>(`https://localhost:7152/api/Admin/ApproveRejectPg?pgId=${Pgid}&action=approve`, {});
// }
approveRequest(pgId: number): Observable<any> {
  return this.http.post<any>(`https://localhost:7152/api/Admin/ApproveRejectPg?pgId=${pgId}&action=approve`, {});
}

rejectRequest(pgId: number): Observable<any> {
  return this.http.post<any>(`https://localhost:7152/api/Admin/ApproveRejectPg?pgId=${pgId}&action=reject`, {});
}
//Method to get room details for a specific PG by PG ID
getRoomDetails(pgId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/Rooms?pgid=${pgId}`);
}
    // Get room details by ID
    getRoomDetailsById(roomId: number): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/Rooms/${roomId}`);
    }
  
  // Method to delete a room by room ID
  deleteRoom(roomId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/Rooms/${roomId}`);
  }
  // Update room details
  updateRoom(id: number, roomData: Room): Observable<any> {
    return this.http.put(`${this.baseUrl}/Rooms/${id}`, roomData); 
}


// Fetch uploaded PG images
getPgImages(pgId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/Media/ByPgId${pgId}`);
}
}