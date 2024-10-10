
import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-view-pending-pg',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './view-pending-pg.component.html',
  styleUrl: './view-pending-pg.component.css'
})
 export class ViewPendingPgComponent implements OnInit {
  pgs: any[] = []; // Array to hold the pending requests
  filteredRequests: any[] = []; // Array for filtered requests
  searchTerm: string = ''; // Search term for filtering
  router: any;

  constructor(private pgService: PgService) {} // Inject PgService

  ngOnInit() {
    this.fetchPendingRequests(); // Fetch requests on component initialization
  }

  fetchPendingRequests() {
    this.pgService.fetchPendingpgss().subscribe(
        data => {
            console.log('Fetched pending requests:', data); // Log fetched data
            this.pgs = data;
            this.filteredRequests = data; // Initialize filteredRequests
            
        },
        error => {
            console.error('Error fetching pending requests:', error);
        }
    );
}


  onSearch() {
    this.filteredRequests = this.pgs.filter(request =>
      request.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewPGDetails(pgId: number): void {
    console.log('Navigating to PG details for ID:', pgId);
    if (!isNaN(pgId)) {
      this.router.navigate(['/pending-pg-deatils', pgId]);
    } else {
      console.error('Invalid PG ID:', pgId);
    }
  }
  

}



// import { CommonModule, NgFor } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { PgService } from '../../services/pg.service';
// import { forkJoin } from 'rxjs';

// @Component({
//   selector: 'app-view-pending-pg',
//   standalone: true,
//   imports: [FormsModule, NgFor, CommonModule],
//   templateUrl: './view-pending-pg.component.html',
//   styleUrls: ['./view-pending-pg.component.css'],
// })
// export class ViewPendingPgComponent implements OnInit {
//   pgs: any[] = []; // Array to hold the pending requests
//   filteredRequests: any[] = []; // Array for filtered requests
//   searchTerm: string = ''; // Search term for filtering

//   constructor(private pgService: PgService) {}

//   ngOnInit() {
//     this.fetchPendingRequests(); // Fetch requests on component initialization
//   }

//   fetchPendingRequests() {
//     this.pgService.fetchPendingpgss().subscribe(
//       (data) => {
//         console.log('Fetched pending requests:', data); // Log fetched PG data
//         this.pgs = data;
//         this.filteredRequests = data; // Initialize filteredRequests
//         this.fetchOwners(); // Fetch owners after fetching PGs
//       },
//       (error) => {
//         console.error('Error fetching pending requests:', error);
//       }
//     );
//   }

//   fetchOwners() {
//     const ownerRequests = this.pgs.map(pg =>
//       this.pgService.getOwnerById(pg.uid) // Fetch owner by UID
//     );

//     forkJoin(ownerRequests).subscribe(
//       (owners) => {
//         console.log('Fetched owners:', owners); // Log fetched owner data
//         this.pgs.forEach((pg, index) => {
//           // Attach owner names to each PG
//           pg.ownerName = owners[index]?.name; // Assuming the owner object has a 'name' property
//         });
//         this.filteredRequests = this.pgs; // Update filtered requests
//       },
//       (error) => {
//         console.error('Error fetching owners:', error);
//       }
//     );
//   }

//   onSearch() {
//     this.filteredRequests = this.pgs.filter(request =>
//       request.pgname.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }
// }



