import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';

@Component({
  selector: 'app-view-pending-pg',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './view-pending-pg.component.html',
  styleUrl: './view-pending-pg.component.css'
})
 export class ViewPendingPgComponent implements OnInit {
  pendingRequests: any[] = []; // Array to hold the pending requests
  filteredRequests: any[] = []; // Array for filtered requests
  searchTerm: string = ''; // Search term for filtering

  constructor(private pgService: PgService) {} // Inject PgService

  ngOnInit() {
    this.fetchPendingRequests(); // Fetch requests on component initialization
  }

  fetchPendingRequests() {
    this.pgService.fetchPendingRequests().subscribe(
        data => {
            console.log('Fetched pending requests:', data); // Log fetched data
            this.pendingRequests = data;
            this.filteredRequests = data; // Initialize filteredRequests
        },
        error => {
            console.error('Error fetching pending requests:', error);
        }
    );
}


  onSearch() {
    this.filteredRequests = this.pendingRequests.filter(request =>
      request.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  approveRequest(id: number) {
    this.pgService.approveRequest(id).subscribe(
        response => {
            console.log(`Approved request with ID: ${id}`);
            this.fetchPendingRequests(); // Refresh the list
        },
        error => {
            console.error('Error approving request:', error);
            alert(`approved`);
            
        }
    );
}

rejectRequest(id: number) {
    this.pgService.rejectRequest(id).subscribe(
        response => {
            console.log(`Rejected request with ID: ${id}`);
            this.fetchPendingRequests(); // Refresh the list
        },
        error => {
            console.error('Error rejecting request:', error);
            alert(`rejected`);
            this.fetchPendingRequests(); 
        }
    );
}

}