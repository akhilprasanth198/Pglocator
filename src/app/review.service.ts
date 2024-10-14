import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'your-backend-api-url/reviews'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Method to submit a review, which returns an Observable
  submitReview(review: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, review); // Ensure it returns the Observable
  }
}
