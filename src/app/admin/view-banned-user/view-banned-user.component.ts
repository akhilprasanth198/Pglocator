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


