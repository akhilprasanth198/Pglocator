import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../Models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = 'https://localhost:7152/api/Reviews';
  constructor(private http: HttpClient) {} // Add a review
 
  // Fetch reviews for a specific PG
  getReviewsByPg(pgId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/pgid/${pgId}`);
  }

  // Add a new review (UserReview method)
  addReview(review: Review, userId: number, pgId: number): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/rev?uid=${userId}&pgid=${pgId}`, review);
  }

   // Delete a review by ID
  deleteReview(reviewId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${reviewId}`);
  }

  // Respond to a review
  respondToReview(reviewId: number, response: string): Observable<Review> {
    return this.http.put<Review>(`${this.apiUrl}/respond/${reviewId}`, response);
  }


// Report a review to the admin
reportReviewToAdmin(reviewId: number): Observable<void> {
  return this.http.put<void>(`${this.apiUrl}/report/${reviewId}`, {});
}

// Get reported reviews for admin
getReportedReviews(): Observable<Review[]> {
  return this.http.get<Review[]>(`${this.apiUrl}/reported-reviews`);
}
}