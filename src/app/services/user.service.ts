import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7152/api/User';
  constructor(private http: HttpClient) { }

  // User login method
  onLoginSubmit(userobject: any): Observable<any> {
    // The userobject contains the email and password entered by the user
    return this.http.post<any>(`${this.apiUrl}/login`, userobject);
  }

  // Method for registering new users (optional, if needed)
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/Registration`, user);
  }

  // Fetch user details (optional, for later use if needed)
  getUserDetails(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
}
