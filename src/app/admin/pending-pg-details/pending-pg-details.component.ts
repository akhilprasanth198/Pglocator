import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pending-pg-details',
  standalone: true,
  imports: [NgIf, RouterOutlet],
  templateUrl: './pending-pg-details.component.html',
  styleUrls: ['./pending-pg-details.component.css']
})
export class PendingPgDetailsComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  pgownerservice = inject(PgownerService);
  authservice = inject(AuthService);
  pgDetails: any | null = null; // Use 'any' type for pgDetails
  pgId: number | null = null;
  loading: boolean = true;
  error: string | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pgId = Number(params['pgId']);
      console.log('Received PG ID:', this.pgId);
      if (!isNaN(this.pgId)) {
        this.loadPgDetails(this.pgId);
      } else {
        console.error('Invalid PG ID');
      }
    });
  }

  loadPgDetails(pgId: number): void {
    this.pgownerservice.getPgById(pgId).subscribe(
      data => {
        this.pgDetails = data; // Directly assign data
        console.log('Fetched PG details:', data);
        this.loading = false;
      },
      error => {
        this.error = 'Failed to load pending requests';
        this.loading = false;
        console.error(`Error fetching PG details: ${error.status} - ${error.message}`);
      }
    );
  }
  approvePg(pgId: number): void {
    console.log('Approving request with ID:', pgId);
    this.pgownerservice.approveRequest(pgId).subscribe(
        response => {
            console.log(`Response from approval:`, response);
            alert('approved');
            this.router.navigate(['admin-navbar/view-pending-pg']);
          
        },
        error => {
            console.error('Error approving request:', error);
            alert('Error approving request: ' + (error.error?.message || error.message || 'Unknown error'));
        }
    );
}

  
  rejectRequest(pgId: number): void {
    console.log('Rejecting request with ID:', pgId);
    this.pgownerservice.rejectRequest(pgId).subscribe(
      response => {
        console.log(`Response from rejection:`, response);
        alert('Rejected');
        this.router.navigate(['admin-navbar/view-pending-pg']);
       
      },
      error => {
        console.error('Error rejecting request:', error);
        alert('Error rejecting request: ' + (error.error?.message || error.message || 'Unknown error'));
      }
    );
  }
}  
