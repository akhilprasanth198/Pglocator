import { Component ,inject,OnInit} from '@angular/core';
import { PgService } from '../../services/pg.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-view-approvedpg',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './view-approvedpg.component.html',
  styleUrl: './view-approvedpg.component.css'
})
export class ViewApprovedpgComponent implements OnInit {
  pgs: any[] = []; // Array to hold the pending requests
  filteredRequests: any[] = []; // Array for filtered requests
  searchTerm: string = ''; // Search term for filtering
  router=inject(Router);

  constructor(private pgService: PgService) {} // Inject PgService

  ngOnInit() {
    this.fetchapprovedpgs(); // Fetch requests on component initialization
  }

  fetchapprovedpgs() {
    this.pgService.fetchapprovedpgss().subscribe(
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

  viewPGDetails(pgid: number): void {
    console.log('Navigating to PG details for ID:', pgid);
    if (!isNaN(pgid)) {
      this.router.navigate(['admin-navbar/pgdetails', pgid]);
    } else {
      console.error('Invalid PG ID:', pgid);
    }
  }
  

}