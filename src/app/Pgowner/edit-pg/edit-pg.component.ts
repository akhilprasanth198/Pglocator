import { Component, OnInit, inject } from '@angular/core';
import { PgownerService } from '../../services/pgowner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-pg',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit-pg.component.html',
  styleUrls: ['./edit-pg.component.css']
})
export class EditPgComponent implements OnInit {
  pgId: number | null = null;
  pgDetails: any = {}; 
  pgownerService = inject(PgownerService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pgId = Number(params['pgId']); 
      if (!isNaN(this.pgId)) {
        this.loadPgDetails(this.pgId); 
      }
    });
  }

  // Load the PG details using the service
  loadPgDetails(pgId: number): void {
    this.pgownerService.getPgById(pgId).subscribe(
      data => {
        console.log("Fetched PG Data:", data); // Check the response structure
        if (data) {
          this.pgDetails = data;
          console.log("pgDetails populated:", this.pgDetails); // Log the pgDetails to confirm
        } else {
          console.error("No data returned for PG with ID:", pgId);
        }
      },
      error => {
        console.error(`Error fetching PG details for ID ${pgId}:`, error);
      }
    );
  }
  

  // Submit the updated PG details
  onSubmit(): void {
    if (this.pgDetails && this.pgId) {
      this.pgownerService.updatePG(this.pgId, this.pgDetails).subscribe(
        response => {
          console.log('PG updated successfully:', response);
          this.router.navigate(['/viewdetails-pg']); 
        },
        error => {
          console.error('Error updating PG:', error);
        }
      );
    }
  }

  // Cancel editing and navigate back to the PG list
  cancel(): void {
    this.router.navigate(['/view-pg']);
  }
}
