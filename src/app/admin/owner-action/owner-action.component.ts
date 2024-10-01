import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-owner-action',
  standalone: true,
  imports: [],
  templateUrl: './owner-action.component.html',
  styleUrls: ['./owner-action.component.css']
})
export class OwnerActionComponent implements OnInit {
  pendingRequests: any[] = []; // Array to hold the pending requests

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPendingRequests(); // Fetch requests on component initialization
  }

  fetchPendingRequests() {
    this.http.get<any[]>('getuser api') // Replace with your actual API URL
      .subscribe(
        data => {
          this.pendingRequests = data; // Assign fetched data to pendingRequests
        },
        error => {
          console.error('Error fetching pending requests:', error); // Log errors if any
        }
      );
  }

  approveRequest(id: number) {
    this.http.put(`putuserapi/${id}/approve`, { role: 'Owner' }) // Replace with your actual API URL
      .subscribe(
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
    this.http.put(`putuserapi/${id}/reject`, { status: 'Rejected' }) // Replace with your actual API URL
      .subscribe(
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
