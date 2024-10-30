import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Review } from '../../Models/review'; // Adjust the path to your model
import { ReviewService } from '../../services/review.service';  // Ensure correct path to ReviewService
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, CommonModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = [];
  newReview: Review = {
    rid: 0,
    pid: 0,  // Will be set dynamically from the route
    uid: 0,  // Set using AuthService (logged-in user)
    rating: 1,
    reviewtext: '',
    reviewdate: new Date(),
    isreported: false,
    reportedtoadmin: false
  };

  pgId: number | null = null;  // Store PG ID from the route
  userId: number | null = null;  // Store logged-in user ID

  // Use inject() for service dependencies
  reviewService = inject(ReviewService);
  route = inject(ActivatedRoute);
  authService = inject(AuthService);

  ngOnInit(): void {
    // Fetch the PG ID from the route parameters
    this.route.paramMap.subscribe(params => {
      const pgIdParam = params.get('pgid');
      if (pgIdParam) {
        this.pgId = +pgIdParam;
        this.newReview.pid = this.pgId;  // Set pid in newReview
        this.loadReviews();
      }
    });

    // Fetch the logged-in user ID using AuthService
    this.userId = this.authService.getUserId();
    if (this.userId !== null) {
      this.newReview.uid = this.userId; // Set uid in newReview
    }
  }

  // Method to load existing reviews
  loadReviews(): void {
    if (this.pgId !== null) {
      this.reviewService.getReviewsByPg(this.pgId).subscribe(reviews => {
        this.reviews = reviews;
      }, error => {
        console.error('Error loading reviews:', error);
      });
    }
  }

  // Method to add a new review
  addReview(): void {
    // Ensure rating and reviewtext are valid before submitting
    if (!this.newReview.rating || !this.newReview.reviewtext.trim()) {
      alert('Please provide a valid rating and review.');
      return;
    }
    if (this.pgId !== null && this.userId !== null) {
      this.reviewService.addReview(this.newReview, this.userId, this.pgId).subscribe({
        next: () => {
          this.loadReviews();  // Reload reviews after adding
          this.resetForm();    // Reset form
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

  // Method to delete a review
  deleteReview(id: number): void {
    this.reviewService.deleteReview(id).subscribe(() => {
      this.loadReviews();  // Reload reviews after deletion
    }, error => {
      console.error('Error deleting review:', error);
      alert('There was an error deleting the review. Please try again.');
    });
  }

  // Handle rating changes
  onRatingChange(rating: number): void {
    this.newReview.rating = rating;
  }

  // Reset the review form
  resetForm(): void {
    if (this.pgId !== null && this.userId !== null) {
      this.newReview = {
        rid: 0,
        pid: this.pgId,
        uid: this.userId,
        rating: 1,
        reviewtext: '',
        reviewdate: new Date(),
        isreported: false,
        reportedtoadmin: false
      };
    }
  }
}
