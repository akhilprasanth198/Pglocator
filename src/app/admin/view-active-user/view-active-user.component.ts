import { CommonModule, NgFor } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service';

@Component({
  selector: 'app-view-active-user',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './view-active-user.component.html',
  styleUrl: './view-active-user.component.css'
})
export class ViewActiveUserComponent implements OnInit {
  pendingRequests: any[] = []; // Array to hold the pending requests
  filteredRequests: any[] = []; // Array for filtered requests
  searchTerm: string = ''; // Search term for filtering
  loading: boolean = true;
  error: string | null = null;


  constructor(private pgService: PgService) {} // Inject PgService

  ngOnInit() {
    this.fetchbanneduser(); // Fetch requests on component initialization
  }

  fetchbanneduser() {
    this.pgService.fetchbanneduser().subscribe(
        data => {
            console.log('Fetched pending requests:', data); // Log fetched data
            this.pendingRequests = data;
            this.filteredRequests = data; // Initialize filteredRequests
            this.loading = false;
        },
        error => {
          this.error = 'Failed to load  active users';
          this.loading = false;
            console.error('Error fetching  active  users:', error);
        }
    );
}


  onSearch() {
    this.filteredRequests = this.pendingRequests.filter(request =>
      request.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  banrequest(id: number) {
    this.pgService.banrequest(id).subscribe(
        response => {
            console.log(`Approved request with ID: ${id}`, response);
            
            alert('Ban request successful');
            this.fetchbanneduser(); // Refresh the list
        },
        error => {
            console.error('Error approving request:', error);
            // More detailed error handling
            if (error.error && error.error.message) {
                alert(`Error: ${error.error.message}`);
            } else {
                alert('An unexpected error occurred while banning the user.');
            }
          
        }
    );
}

}
