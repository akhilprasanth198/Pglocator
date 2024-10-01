import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { adminService } from '../../admin.service';// Import the AdminService

@Component({
  selector: 'app-owner-action',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './owner-action.component.html',
  styleUrls: ['./owner-action.component.css']
})
export class OwnerActionComponent implements OnInit {
  pendingRequests: any[] = []; // Array to hold the pending requests

  constructor(private adminService: adminService) {} // Inject AdminService

  ngOnInit() {
    this.fetchPendingRequests(); // Fetch requests on component initialization
  }

  fetchPendingRequests() {
    this.adminService.fetchPendingRequests().subscribe(
      data => {
        this.pendingRequests = data; // Assign fetched data to pendingRequests
      },
      error => {
        console.error('Error fetching pending requests:', error); // Log errors if any
      }
    );
  }

  approveRequest(id: number) {
    this.adminService.approveRequest(id).subscribe(
      response => {
        console.log(`Approved request with ID: ${id}`);
        this.pendingRequests = this.pendingRequests.filter(request => request.id !== id); // Update local array
      },
      error => {
        console.error('Error approving request:', error);
      }
    );
  }

  rejectRequest(id: number) {
    this.adminService.rejectRequest(id).subscribe(
      response => {
        console.log(`Rejected request with ID: ${id}`);
        this.pendingRequests = this.pendingRequests.filter(request => request.id !== id); // Update local array
      },
      error => {
        console.error('Error rejecting request:', error);
      }
    );
  }
}
