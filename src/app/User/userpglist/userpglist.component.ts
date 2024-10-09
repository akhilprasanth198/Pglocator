import { Component, OnInit } from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-userpglist',
  standalone: true,
  imports: [NgFor,CommonModule,FormsModule],
  templateUrl: './userpglist.component.html',
  styleUrl: './userpglist.component.css'
})
export class UserpglistComponent implements OnInit {
  searchModel = {
    
    district: '',
    city: ''
  };
  pgs: any[] = [];
  router = inject(Router);
  constructor(private pgService: PgService) { }

  ngOnInit(): void { }

  onSearch(): void {
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
}
