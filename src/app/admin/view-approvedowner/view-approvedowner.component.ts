import { Component, OnInit } from '@angular/core';
import { PgService } from '../../services/pg.service'; // Adjust the import path as necessary
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-view-approvedowner',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './view-approvedowner.component.html',
  styleUrls: ['./view-approvedowner.component.css'],
  
})
export class ViewApprovedOwnerComponent implements OnInit {
  approvedRequests: any[] = []; // Array to hold approved requests
  filteredRequests: any[] = []; // Array for filtered requests
  searchTerm: string = ''; // Search term for filtering
  errorMessage: string = ''; // Property to hold error messages
  loading: boolean = true;
  error: string | null = null;

  constructor(private pgService: PgService) {} // Inject PgService

  ngOnInit() {
    this.fetchApprovedRequests(); // Fetch approved requests on component initialization
  }

  fetchApprovedRequests() {
    this.pgService.fetchApprovedRequests().subscribe(
      data => {
        console.log('Fetched approved requests:', data);
        this.approvedRequests = data;
        this.filteredRequests = data; // Initialize filteredRequests
        this.errorMessage = ''; // Clear any previous error messages
        this.loading = false;
      },
      error => {
        console.error('Error fetching approved requests:', error);
        this.error = 'Failed to load approved requests';
        this.loading = false;
      }
    );
  }

  onSearch() {
    this.filteredRequests = this.approvedRequests.filter(request =>
      request.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
