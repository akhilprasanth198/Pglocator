import { Component, inject, OnInit } from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PgownerService } from '../../services/pgowner.service';


@Component({
  selector: 'app-userpglist',
  standalone: true,
  imports: [NgFor,CommonModule,FormsModule],
  templateUrl: './userpglist.component.html',
  styleUrl: './userpglist.component.css'
})
export class UserpglistComponent {
  searchModel = {
    district: '',
    city: ''
  };
  pgs:any[] = []; 
  router=inject(Router)
  authservice=inject(AuthService);

  constructor(private pgService: PgService) {}

  viewPGDetails(pgId: number): void {
    console.log('Navigating to PG details for ID:', pgId);
    
    // Check if the user is logged in
    if (!this.authservice.getUserId()) {
      // If user is not logged in, redirect to the login page
      console.log('User is not logged in, redirecting to login page.');
      this.router.navigate(['/login'], { queryParams: { returnUrl: `/viewdetailPg/${pgId}` } });
    } else {
      // If user is logged in, navigate to the PG details page
      if (!isNaN(pgId)) {
        this.router.navigate(['/viewdetailPg', pgId]);
      } else {
        console.error('Invalid PG ID:', pgId);
      }
    }
  }
}