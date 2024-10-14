import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../Models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  submitReview(review: Review) {
    throw new Error('Method not implemented.');
  }
  getReviews(): never[] {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://localhost:7152/api/Review';
  constructor(private http: HttpClient) {} // Add a review
 addReview(review: Review): Observable<Review> {
  return this.http.post<Review>(`${this.apiUrl}`, review);
}

// Get reviews for a specific PG
getReviewsByPg(pid: number): Observable<Review[]> {
  return this.http.get<Review[]>(`${this.apiUrl}/pg/${pid}`);
}

// Edit a review
editReview(id: number, review: Review): Observable<void> {
  return this.http.put<void>(`${this.apiUrl}/${id}`, review);
}

// Delete a review
deleteReview(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}