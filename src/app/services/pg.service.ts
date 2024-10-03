import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PgService {

  private baseUrl = ''; // Replace with your API  URL

  constructor(private http: HttpClient) {}

  // Method to search PGs by district and city
  searchPgs(district?: string, city?: string): Observable<any> {
    let params = new HttpParams();

    // Add query parameters if provided
    if (district) {
      params = params.append('district', district);
    }

    if (city) {
      params = params.append('city', city);
    }

    return this.http.get(`${this.baseUrl}/search`, { params });
  }
}
