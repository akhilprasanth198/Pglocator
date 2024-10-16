import { Component, inject, OnInit } from '@angular/core';
import { Review } from '../Models/review';  // Adjust the path to your model
import { FormsModule,  } from '@angular/forms';
import { ReviewService } from '../services/review.service';  // Ensure correct path to ReviewService
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-review',
  imports: [FormsModule,NgIf,NgFor,CommonModule],
  standalone: true,
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = [];
  newReview: Review = {
    rid: 0,
    pid: 0,  // Set dynamically from the route
    uid: 0,  // Set using AuthService (logged-in user)
    rating: 1,
    reviewtext: '',
    reviewdate: new Date()
  };
  pgId: number | null = null;  // Store PG ID from the route
  userId: number | null = null;  // Store logged-in user ID

  reviewService = inject(ReviewService);
  route = inject(ActivatedRoute);
  authService = inject(AuthService);

  ngOnInit(): void {
    // Fetch the PG ID from the route parameters
    this.route.paramMap.subscribe(params => {
      const pgIdParam = params.get('pgid');
      if (pgIdParam) {
        this.pgId = +pgIdParam;
        this.loadReviews();
      }
    });

    // Fetch the logged-in user ID using AuthService
    this.userId = this.authService.getUserId();
  }

  loadReviews(): void {
    if (this.pgId !== null) {
      this.reviewService.getReviewsByPg(this.pgId).subscribe(reviews => {
        this.reviews = reviews;
      });
    }
  }

  addReview(): void {
    // Ensure rating and reviewtext are valid before submitting
    if (!this.newReview.rating || !this.newReview.reviewtext.trim()) {
      alert('Please provide a valid rating and review.');
      return;
    }
  
    if (this.pgId !== null && this.userId !== null) {
      this.reviewService.addReview(this.newReview, this.userId, this.pgId).subscribe({
        next: () => {
          this.loadReviews();
          this.resetForm();
        },
        error: (err) => {
          console.error('Error adding review:', err);
          alert('There was an error adding your review. Please try again.');
        }
      });
    } else {
      alert('You must be logged in to add a review.');
    }
  }
  

  deleteReview(id: number): void {
    this.reviewService.deleteReview(id).subscribe(() => {
      this.loadReviews();
    });
  }

  onRatingChange(rating: number): void {
    this.newReview.rating = rating;
  }

  resetForm(): void {
    if (this.pgId !== null && this.userId !== null) {
      this.newReview = {
        rid: 0,
        pid: this.pgId,
        uid: this.userId,
        rating: 1,
        reviewtext: '',
        reviewdate: new Date()
      };
    }
  }
}