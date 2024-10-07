import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { PG } from '../../Models/pglist';
import { NgFor } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-pg',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-pg.component.html',
  styleUrls: ['./view-pg.component.css'] // Fixing typo from styleUrl to styleUrls
})
export class ViewPgComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  pgownerservice = inject(PgownerService);
  authservice = inject(AuthService);
  pgs: PG[] = [];
  ownerId: number | null = null;
  ngOnInit(): void {
    // Get the logged-in PG owner's ID from the AuthService
    this.ownerId = this.authservice.getUserId();
    
    if (this.ownerId) {
      this.loadApprovedPGs(this.ownerId);
    } else {
      // If no user is logged in, redirect to login
      console.error('User not logged in');
      this.router.navigate(['/login']);
    }
  }

  // Fetch approved PGs for the logged-in PG owner
  loadApprovedPGs(ownerId: number): void {
    this.pgownerservice.getPgsByOwner(ownerId).subscribe(
      (data: PG[]) => {
        this.pgs = data; // Populate the pgs array with the approved PGs
      },
      (error) => {
        console.error('Error fetching approved PGs', error);
      }
    );
  }

  // Navigate to the add PG form
  addPG(): void {
    this.router.navigate(['/add-pg']); // Adjust the route to your add PG component
  }

  // View the details of a specific PG
 viewPGDetails(pgId: number): void {
    console.log('Navigating to PG details for ID:', pgId);
    this.router.navigate(['/pg-details', pgId]);
}
}