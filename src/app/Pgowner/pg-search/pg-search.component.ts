import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';

@Component({
  selector: 'app-pg-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pg-search.component.html',
  styleUrl: './pg-search.component.css'
})
export class PgSearchComponent {

  searchModel = {
    district: '',
    city: ''
  };
  
  pgs: any[] = [];  // Will hold the search results

  constructor(private pgService: PgService) {}

  searchPgs() {
    this.pgService.searchPgs(this.searchModel.district, this.searchModel.city)
      .subscribe({
        next: (data) => {
          this.pgs = data;
          console.log('Search Results:', this.pgs);
        },
        error: (error) => {
          console.error('Error occurred:', error);
        }
      });
  }
}
