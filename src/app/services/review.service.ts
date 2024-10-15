import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../Models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = 'https://localhost:7152/api/Reviews/pg';
  constructor(private http: HttpClient) {} // Add a review
 
  // Get reviews by PG ID
  getReviewsByPgId(pgId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/${pgId}`);
  }

  // Add a new review
  addReview(pgId: number, review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/${pgId}`, review);
  }

  // Edit an existing review
  editReview(pgId: number, review: Review): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${pgId}/review/${review.id}`, review);
  }

  // Delete a review by ID
  deleteReview(pgId: number, reviewId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${pgId}/review/${reviewId}`);
  }
}