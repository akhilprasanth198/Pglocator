import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PgService {
  
  private apiUrl = 'https://localhost:7152/api/Pg/search'; // Change the URL as needed

  constructor(private http: HttpClient) { }

  searchPgs(district?: string, city?: string): Observable<any[]> {
    let params = new HttpParams();

    if (district) {
      params = params.set('district', district);
    }

    if (city) {
      params = params.set('city', city);
    }

    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
