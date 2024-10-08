import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PgService } from '../../services/pg.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pgsearch-dashboard',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule,],
  templateUrl: './pgsearch-dashboard.component.html',
  styleUrl: './pgsearch-dashboard.component.css'
})
export class PgsearchDashboardComponent implements OnInit {
  pgs: any[] = [];
  searchModel = {
    district: '',
    city: '' 
  };

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
  showLoginAlert(): void {
    alert('Please Login to View more Details or Contact the Owner.');
  }
}