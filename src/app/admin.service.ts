import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class adminService {
  private apiUrl = 'user api'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  fetchPendingRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getuser`); // Replace with your actual API endpoint
  }

  approveRequest(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/putuserapi/${id}/approve`, { role: 'Owner' }); // Replace with your actual API endpoint
  }

  rejectRequest(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/putuserapi/${id}/reject`, { status: 'Rejected' }); // Replace with your actual API endpoint
  }
}
