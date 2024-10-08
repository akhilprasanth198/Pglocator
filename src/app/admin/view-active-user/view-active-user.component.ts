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

  constructor(private pgService: PgService) {} // Inject PgService

  ngOnInit() {
    this.fetchbanneduser(); // Fetch requests on component initialization
  }

  fetchbanneduser() {
    this.pgService.fetchactiveuser().subscribe(
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


  //working code
  ban(id: number) {
    this.pgService.approveRequest(id).subscribe(
        response => {
            console.log(`Approved request with ID: ${id}`);
            this.fetchbanneduser(); // Refresh the list
        },
        error => {
            console.error('Error approving request:', error);
            alert(`approved`);
            this.fetchbanneduser(); 
            
        }
    );
}


}


