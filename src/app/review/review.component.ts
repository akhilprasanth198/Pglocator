import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Review } from '../Models/review';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReviewService } from '../review.service';// Ensure correct path to ReviewService

@Component({
  selector: 'app-review',
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule, BrowserModule],
  standalone: true,
  templateUrl: './review.component.html'
})
export class ReviewComponent {
  review: Review = {
    comment: '',
    name: 'John Doe',  // Set dynamically if needed
    Rid: 1,            // Static or fetched dynamically
    Pid: 123,          // Static or fetched dynamically
    Uid: 456,          // Static or fetched dynamically
    Rating: '',
    Reviewdate: new Date().toISOString()
  };

  submittedReviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }
  submitReview() {
    
  }
  // submitReview() {
  //   // The reviewService.submitReview should return an Observable. Ensure this in review.service.ts
  //   this.reviewService.submitReview(this.review).subscribe(
  //     (response: any) => {  // Fix the 'any' type for response
  //       console.log('Review submitted successfully', response);

  //       // Push the submitted review into the submittedReviews array
  //       this.submittedReviews.push({ ...this.review });

  //       // Clear the form
  //       this.review.comment = '';
  //       this.review.Rating = '';

  //       // Show success alert
  //       alert('Review submitted successfully!');
  //     },
  //     (error: any) => {  // Fix the 'any' type for error
  //       console.error('Error submitting review', error);
  //     }
  //   );
  // }
}