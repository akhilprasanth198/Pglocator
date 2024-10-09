import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PG } from '../Models/pglist';
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
    return this.http.put(`${this.baseUrl}/Pg/update/${pgId}`, pg);
  }

  // Delete PG by ID
  deletePG(pgId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Pg/${pgId}`);
  }

}
