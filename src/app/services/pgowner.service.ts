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
// Register PG
registerPG(pg: PG): Observable<any> {
  return this.http.post(`${this.apiUrl}/register`, pg);
}

// Fetch PGs by Owner ID
getPgsByOwner(ownerId: number): Observable<PG[]> {
  return this.http.get<PG[]>(`${this.apiUrl}/owner/${ownerId}/approved`);
}

// Fetch PG Details
getPGDetails(pgId: number): Observable<PG> {
  return this.http.get<PG>(`${this.apiUrl}/approved/${pgId}`);
}

// Update PG
updatePG(pgId: number, pg: PG): Observable<any> {
  return this.http.put(`${this.apiUrl}/update/${pgId}`, pg);
}

// Delete PG
deletePG(pgId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/delete/${pgId}`);
}
}