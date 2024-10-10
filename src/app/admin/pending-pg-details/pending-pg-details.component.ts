import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { pgs } from '../../Models/pgs';
@Component({
  selector: 'app-pending-pg-details',
  standalone: true,
  imports: [NgIf,RouterOutlet],
  templateUrl: './pending-pg-details.component.html',
  styleUrl: './pending-pg-details.component.css'
})
export class PendingPgDetailsComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  pgownerservice = inject(PgownerService);
  authservice = inject(AuthService);
  pgDetails: pgs | null = null;
  pgId: number | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pgId = Number(params['pgId']);  // Use Number() to ensure it's converted to a number
      console.log('Received PG ID:', this.pgId);  // Log the received PG ID
      if (!isNaN(this.pgId)) {
        this.loadPgDetails(this.pgId);  // Proceed if it's a valid number
      } else {
        console.error('Invalid PG ID');
      }
    });
  }
  

  // Fetch PG details by ID
  loadPgDetails(pgId: number): void {
    this.pgownerservice.getPgById(pgId).subscribe(
      data => {
        this.pgDetails = data as unknown as pgs;       
         console.log('Fetched PG details:', data);
      },
      error => {
        console.error(`Error fetching PG details: ${error.status} - ${error.message}`);
      }
    );
  }
}
