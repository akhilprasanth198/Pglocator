import { Component,OnInit} from '@angular/core';
import { PgService } from '../../services/pg.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-banned-user',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule],
  templateUrl: './view-banned-user.component.html',
  styleUrl: './view-banned-user.component.css'
})
export class ViewBannedUserComponent implements OnInit {
  pendingRequests: any[] = []; // Array to hold the pending requests
  filteredRequests: any[] = []; // Array for filtered requests
  searchTerm: string = ''; // Search term for filtering
  loading: boolean = true;
  error: string | null = null;


  constructor(private pgService: PgService) {} // Inject PgService

  ngOnInit() {
    this.fetchactiveuser(); // Fetch requests on component initialization
  }

  fetchactiveuser() {
    this.pgService.fetchactiveuser().subscribe(
        data => {
            console.log('Fetched pending requests:', data); // Log fetched data
            this.pendingRequests = data;
            this.filteredRequests = data; // Initialize filteredRequests
            this.loading = false;
        },
        error => {
          this.error = 'Failed to load  banned users';
          this.loading = false;
            console.error('Error fetching banned users:', error);

        }
    );
}


  onSearch() {
    this.filteredRequests = this.pendingRequests.filter(request =>
      request.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  unban(id: number) {
    this.pgService.unban(id).subscribe(
        response => {
            console.log(`Approved request with ID: ${id}`, response);
            
            
            alert('unbaan request successful');
            this.fetchactiveuser(); // Refresh the list
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


