import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { NgFor, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-pg',
  standalone: true,
  imports: [NgFor,NgIf,RouterOutlet,RouterLink],
  templateUrl: './view-pg.component.html',
  styleUrls: ['./view-pg.component.css'] // Fixing typo from styleUrl to styleUrls
})
export class ViewPgComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  pgownerservice = inject(PgownerService);
  authservice = inject(AuthService);
  pgs : any[]= [];
  ownerId: number | null = null;

  ngOnInit(): void {
    // Get the logged-in PG owner's ID from the AuthService
    this.ownerId = this.authservice.getUserId();
    if (this.ownerId) {
      this.loadApprovedPGs(this.ownerId);
    } else {
      console.error('User not logged in');
      this.router.navigate(['/login']);
    }
  }

  // Fetch approved PGs for the logged-in PG owner
  loadApprovedPGs(ownerId: number): void {
    this.pgownerservice.getApprovedPGs(ownerId).subscribe(
      data => {
        this.pgs = data;
        console.log('Fetched PGs:', data);
        
      },
      error=> {
        console.error(`Error fetching approved PGs: ${error.status} - ${error.message}`);
        alert('Failed to load PGs. Please try again later.');
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
    if (!isNaN(pgId)) {
      this.router.navigate(['viewdetails-pg', pgId]); // Navigates to the viewdetails-pg route with the PG ID
    } else {
      console.error('Invalid PG ID:', pgId);
    }
  }


  UploadPg(pgId:number):void{
    console.log('Navigating to PG details for ID:', pgId);
    if (!isNaN(pgId)) {
      this.router.navigate(['/media-pgowner', pgId]);
    } else {
      console.error('Invalid PG ID:', pgId);

  }
}
}
