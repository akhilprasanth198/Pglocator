import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PG } from '../Models/pglist';
@Injectable({
  providedIn: 'root'
})
export class PgownerService {
  private apiUrl = 'https://localhost:7152/api/PgOwner'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}
// Register a PG
  registerPG(pg: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, pg);
  }

  // Get Approved PGs by PG Owner
  getApprovedPGs(pgOwnerId: number): Observable<any> {
    // Using query parameter 'pgOwnerId' as per provided URL structure
    return this.http.get(`${this.apiUrl}/approved/${pgOwnerId}?pgOwnerId=${pgOwnerId}`);
  }

  // Get all PGs by PG Owner
  getPgsByOwner(ownerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pgs-by-owner/${ownerId}`);
  }

  // Update PG
  updatePG(pgId: number, pg: any): Observable<any> {
    // Update the PG with ID 4, per your example URL
    return this.http.put(`${this.apiUrl}/update/${pgId}`, pg);
  }

  // Delete PG
  deletePG(pgId: number): Observable<any> {
    // Delete PG with ID 1, per your example URL
    return this.http.delete(`${this.apiUrl}/delete/${pgId}`);
  }

  
}