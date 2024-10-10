import { Component, OnInit } from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';


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

  filters = {
    price: 10000,
    foodavailable: '',
    rating: 1,
    roomtype: '',
    amenities: '',
    gender_preference: ''
  };

  pgs:any[] = []; 

  constructor(private pgService: PgService) {}

  // Method to search PGs based on district and city
  onSearch() {
    const searchParams = {
      district: this.searchModel.district,
      city: this.searchModel.city
    };

    // Call the service to fetch PGs based on district and city
    this.pgService.searchPGs(searchParams).subscribe(data => {
      this.pgs = data;
    });
  }

  // Method to apply filters and get filtered PGs
  applyFilters() {
    const searchParams = {
      district: this.searchModel.district,
      city: this.searchModel.city,
      price: this.filters.price,
      foodavailable: this.filters.foodavailable,
      rating: this.filters.rating,
      roomtype: this.filters.roomtype,
      amenities: this.filters.amenities,
      gender_preference: this.filters.gender_preference
    };

    // Call the service to fetch filtered PGs
    this.pgService.getFilteredPGs(searchParams).subscribe(
      data => {
        this.pgs = data; // Update the PG listings with the filtered data
      },
      error => {
        console.error('Error fetching filtered PGs:', error);
      }
    );
  }
}

// export class UserpglistComponent implements OnInit {
//   searchModel = {
    
//     district: '',
//     city: ''
//   };
//   pgs: any[] = [];
//   router = inject(Router);
//   constructor(private pgService: PgService) { }

//   ngOnInit(): void { }

//   onSearch(): void {
//     this.pgService.searchPgs(this.searchModel.district, this.searchModel.city)
//       .subscribe(
//         (result: any[]) => {
//           if (result.length === 0) {
//             alert('No PGs found');
//             this.pgs = []; // Clear previous search results
//           } else {
//             console.log(result);
//             this.pgs = result; // Display new search results
//           }
//         },
//         (error: any) => {
//           alert('An error occurred while searching for PGs.');
//           console.log(error);
//           this.pgs = []; // Clear previous search results on error
//         }
//       );
//   }
// }
