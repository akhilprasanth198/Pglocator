import { Component, OnInit,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pgsearch',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './pgsearch.component.html',
  styleUrls: ['./pgsearch.component.css']
})
export class PgsearchComponent implements OnInit {
  searchModel = {
    
    district: '',
    city: ''
  };
  pgs: any[] = [];
  router = inject(Router);
  constructor(private pgService: PgService) { }

  ngOnInit(): void { }

  searchPgs(): void {
    this.pgService.searchPgs(this.searchModel.district, this.searchModel.city)
      .subscribe(
        (result: any[]) => {
          if (result.length === 0) {
            alert('No PGs found');
            this.pgs = []; // Clear previous search results
          } else {
            console.log(result);
            this.pgs = result; // Display new search results
          }
        },
        (error: any) => {
          alert('An error occurred while searching for PGs.');
          console.log(error);
          this.pgs = []; // Clear previous search results on error
        }
      );
  }
  navigateToPgdash() {
    this.router.navigate(['/pgsearch-dash'], { queryParams: { district: this.searchModel.district, city: this.searchModel.city } });
  }
}
