import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewdetails-pg',
  standalone:true,
  imports:[FormsModule,CommonModule,RouterOutlet],
  templateUrl: './viewdetails-pg.component.html',
  styleUrls: ['./viewdetails-pg.component.css']
})
export class ViewdetailsPgComponent implements OnInit {
  pgownerservice = inject(PgownerService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  pgDetails: any;
  roomDetails: any[] = [];
  pgImages: any[] = [];
  pgId: number | null = null;

  ngOnInit(): void {
    // Retrieve the PG ID from the route parameters
    this.pgId = Number(this.route.snapshot.paramMap.get('pgId'));
    if (this.pgId) {
      this.loadPgDetails(this.pgId);
      this.loadRoomDetails(this.pgId);
      // this.loadPgImages(this.pgId);
    } else {
      console.error('Invalid PG ID');
    }
  }

  // Fetch PG details
  loadPgDetails(pgId: number): void {
    this.pgownerservice.getPgById(pgId).subscribe(
      data => this.pgDetails = data,
      error => console.error(`Error fetching PG details: ${error.message}`)
    );
  }

  // Fetch room details
  loadRoomDetails(pgId: number): void {
    this.pgownerservice.getRoomDetails(pgId).subscribe(
      data => this.roomDetails = data,
      error => console.error(`Error fetching room details: ${error.message}`)
    );
  }
  editPg(): void {
    if (this.pgId !== null) {
      console.log('Navigating to edit PG for ID:', this.pgId);
      this.router.navigate(['/edit-pg', this.pgId]); // Adjust the route as needed
    } else {
      console.error('PG ID is not available');
    }
  }

  // Method to delete the current PG
  deletePg(): void {
    if (this.pgId !== null) {
      if (confirm('Are you sure you want to delete this PG?')) {
        this.pgownerservice.deletePG(this.pgId).subscribe(
          () => {
            console.log('PG deleted successfully');
            alert('PG deleted successfully');
            this.router.navigate(['/view-pg']); // Navigate back to the PG list after deletion
          },
          error => {
            console.error('Error deleting PG:', error);
            alert('Failed to delete the PG. Please try again later.');
          }
        );
      }
    } else {
      console.error('PG ID is not available');
    }
  }
  // // Fetch uploaded PG images
  // loadPgImages(pgId: number): void {
  //   this.pgownerservice.getPgImages(pgId).subscribe(
  //     data => this.pgImages = data,
  //     error => console.error(`Error fetching PG images: ${error.message}`)
  //   );
  // }
}
