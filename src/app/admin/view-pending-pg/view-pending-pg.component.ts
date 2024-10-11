
import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-view-pending-pg',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule,RouterOutlet],
  templateUrl: './view-pending-pg.component.html',
  styleUrl: './view-pending-pg.component.css'
})
export class ViewPendingPgComponent implements OnInit {
  pgs: any[] = []; // Array to hold the pending requests
  filteredRequests: any[] = []; // Array for filtered requests
  searchTerm: string = ''; // Search term for filtering

  constructor(private pgService: PgService,private router:Router) {} // Inject PgService

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
      this.router.navigate(['pending-pg-details',pgId])
    } else {
      console.error('Invalid PG ID:', pgId);
    }
  }
  

}




