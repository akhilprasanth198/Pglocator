import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PG } from '../Models/pglist';
@Injectable({
  providedIn: 'root'
})
export class PgownerService {
  private apiUrl = 'https://localhost:7152/api/Pg'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Get all PGs by owner
  getPGsByOwner(ownerId: number): Observable<PG[]> {
      return this.http.get<PG[]>(`${this.apiUrl}/owner/${ownerId}`);
  }

  // Get a single PG by ID
  getPG(id: number): Observable<PG> {
      return this.http.get<PG>(`${this.apiUrl}/${id}`);
  }

  // Add a new PG
  addPG(pg: PG): Observable<PG> {
      return this.http.post<PG>(this.apiUrl, pg);
  }

  // Update an existing PG
  updatePG(pg: PG): Observable<PG> {
      return this.http.put<PG>(`${this.apiUrl}/${pg.id}`, pg);
  }

  // Delete a PG
  deletePG(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}