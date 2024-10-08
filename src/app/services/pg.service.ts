import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PgService {
  
  private apiUrl = 'https://localhost:7152/api/Pg/search'; // Change the URL as needed
  private apiurlowner='https://localhost:7152/api/Admin/approvedOwners';
 

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
 
  fetchApprovedRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiurlowner}`); // Call to your API
  }

  // Fetch pending requests
  fetchPendingRequests(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7152/api/Admin/searchaction`); // Adjust the endpoint as necessary
  }
  approveRequest(userId: number): Observable<any> {
    return this.http.post<any>(`https://localhost:7152/api/Admin/ApproveRejectPgOwner?userId=${userId}&action=approve`, {});
}

rejectRequest(userId: number): Observable<any> {
    return this.http.post<any>(`https://localhost:7152/api/Admin/ApproveRejectPgOwner?userId=${userId}&action=reject`, {});
  
}
  // Fetch pending requests
   fetchbanneduser(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7152/api/Admin/searchactiveuser`);
  }
  fetchactiveuser(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7152/api/Admin/searchbanneduser`); 
  }

  banrequest(userId: number): Observable<any> {
    return this.http.post<any>(`https://localhost:7152/api/Admin/useraction?userId=${userId}&action=ban`, {});
}
unban(userId: number): Observable<any> {
  return this.http.post<any>(`https://localhost:7152/api/Admin/useraction?userId=${userId}&action=unban`, {});
}
fetchPendingpgss(): Observable<any[]> {
  return this.http.get<any[]>('https://localhost:7152/api/Admin/viewpendingpgd');
}

fetchapprovedpgss(): Observable<any[]> {
  return this.http.get<any[]>('https://localhost:7152/api/Admin/viewapprovedpgd');
}

  getPgs(district: string, city: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?district=${district}&city=${city}`);
  }

  
}
