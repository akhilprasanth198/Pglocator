import { Component,inject,OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PgService } from '../../services/pg.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserNavbarComponent } from "../../User/user-navbar/user-navbar.component";
import { AuthService } from '../../services/auth.service';
import { PgsearchComponent } from "../pgsearch/pgsearch.component";
@Component({
  selector: 'app-pgsearch-dashboard',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, UserNavbarComponent, PgsearchComponent],
  templateUrl: './pgsearch-dashboard.component.html',
  styleUrl: './pgsearch-dashboard.component.css'
})
export class PgsearchDashboardComponent implements OnInit {
  pgs: any[] = [];
  searchModel = {
    district: '',
    city: '' 
  };

  authservice=inject(AuthService)
  router=inject(Router);
roomDetails: any;
  constructor(private route: ActivatedRoute, private pgService: PgService) {}

  ngOnInit() {
    // Get query parameters from the route
    this.route.queryParams.subscribe(params => {
      this.searchModel.district = params['district'];
      this.searchModel.city = params['city'];

      if (this.searchModel.district || this.searchModel.city) {
        this.searchPgs(this.searchModel.district, this.searchModel.city);
      }
    });
  }

  searchPgs(district: string, city: string) {
    // Call your service to fetch PGs based on district and city
    this.pgService.getPgs(district, city).subscribe((data: any[]) => {
      console.log(data);
      this.pgs = data;
    },
    error => {
      console.error('No PG found:', error);
  });
  }
  viewPGDetails(pgId: number): void {
    if (!this.authservice.isLoggedIn()) {
      // If not logged in, show alert or redirect to login
      console.log('User is not logged in, redirecting to login.');
      this.router.navigate(['/login'], { queryParams: { returnUrl: `/viewdetailPg/${pgId}` } });
    } else {
      // If logged in, navigate to the PG details page
      console.log('Navigating to PG details for ID:', pgId);
      if (!isNaN(pgId)) {
        this.router.navigate(['/view-details-pg-user', pgId]);
      } else {
        console.error('Invalid PG ID:', pgId);
      }
    }
  }

  showLoginAlert(): void {
    if (!this.authservice.isLoggedIn()) {
      alert('You must be logged in to perform this action.');
    } else {
      console.log('Action allowed for logged-in user.');
    }
  }
}