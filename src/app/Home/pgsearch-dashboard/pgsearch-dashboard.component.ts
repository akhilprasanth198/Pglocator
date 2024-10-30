import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PgService } from '../../services/pg.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserNavbarComponent } from "../../User/user-navbar/user-navbar.component";
import { AuthService } from '../../services/auth.service';
import { PgsearchComponent } from "../pgsearch/pgsearch.component";
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-pgsearch-dashboard',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, UserNavbarComponent, PgsearchComponent],
  templateUrl: './pgsearch-dashboard.component.html',
  styleUrls: ['./pgsearch-dashboard.component.css']
})
export class PgsearchDashboardComponent implements OnInit {
  pgs: any[] = [];
  searchModel = {
    district: '',
    city: ''
  };

  authservice = inject(AuthService);
  router = inject(Router);
  mediaService = inject(MediaService);
  
  // For carousel functionality
  currentImageIndex: { [key: number]: number } = {}; // Track current image index for each PG

  constructor(private route: ActivatedRoute, private pgService: PgService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchModel.district = params['district'];
      this.searchModel.city = params['city'];

      if (this.searchModel.district || this.searchModel.city) {
        this.searchPgs(this.searchModel.district, this.searchModel.city);
      }
    });
  }

  searchPgs(district: string, city: string) {
    this.pgService.getPgs(district, city).subscribe((data: any[]) => {
      this.pgs = data;
      
      // Fetch media for each PG
      this.pgs.forEach(pg => {
        this.mediaService.getMediaByPgId(pg.pgid).subscribe(media => {
          pg.images = media; // Attach media to the PG object
          this.currentImageIndex[pg.pgid] = 0; // Initialize current image index
        });
      });
    },
    error => {
      console.error('No PG found:', error);
    });
  }

  viewPGDetails(pgId: number): void {
    if (!this.authservice.isLoggedIn()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: `/viewdetailPg/${pgId}` } });
    } else {
      if (!isNaN(pgId)) {
        this.router.navigate(['/view-details-pg-user', pgId]);
      } else {
        console.error('Invalid PG ID:', pgId);
      }
    }
  }

  nextImage(pgId: number): void {
    if (this.pgs) {
      const pg = this.pgs.find(p => p.pgid === pgId);
      if (pg && pg.images.length > 0) {
        this.currentImageIndex[pgId] = (this.currentImageIndex[pgId] + 1) % pg.images.length;
      }
    }
  }

  previousImage(pgId: number): void {
    if (this.pgs) {
      const pg = this.pgs.find(p => p.pgid === pgId);
      if (pg && pg.images.length > 0) {
        this.currentImageIndex[pgId] = (this.currentImageIndex[pgId] - 1 + pg.images.length) % pg.images.length;
      }
    }
  }

  showLoginAlert(): void {
    if (!this.authservice.isLoggedIn()) {
      alert('You must be logged in to perform this action.');
    }
  }
}
