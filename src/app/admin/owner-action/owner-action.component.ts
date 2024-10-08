import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PgService } from '../../services/pg.service'; // Make sure to import your service
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-owner-action',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule],
  templateUrl: './owner-action.component.html',
  styleUrls: ['./owner-action.component.css']
})
export class OwnerActionComponent implements OnInit {
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
//   approveRequest(id: number) {
//     this.pgService.approveRequest(id).subscribe(
//         response => {
//             console.log(`Approved request with ID: ${id}`, response);
//             this.fetchPendingRequests(); // Refresh the list
//         },
//         error => {
//             console.error('Error approving request:', error);
//             // You can update the UI here instead of alerting
//             // For example, set a property to show an error message in the template
//         }
//     );
// }

// rejectRequest(id: number) {
//     this.pgService.rejectRequest(id).subscribe(
//         response => {
//             console.log(`Rejected request with ID: ${id}`, response);
//             this.fetchPendingRequests(); // Refresh the list
//         },
//         error => {
//             console.error('Error rejecting request:', error);
//             this.fetchPendingRequests(); 
//             // Handle the error silently or update the UI
//         }
//     );
// }

  //working code
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



  //
//   approveRequest(id: number) {
//     this.pgService.approveRequest(id).subscribe(
//       response => {
//         console.log(`Approved request with ID: ${id}`, response);
//         // Handle success...
//       },
//       error => {
//         console.error('Error approving request:', error);
//         alert('Failed to approve request. Please try again.');
//       }
//     );
// }

// rejectRequest(id: number) {
//     this.pgService.rejectRequest(id).subscribe(
//       response => {
//         console.log(`Rejected request with ID: ${id}`, response);
//         // Handle success...
//       },
//       error => {
//         console.error('Error rejecting request:', error);
//         alert('Failed to reject request. Please try again.');
//       }
//     );
// }
// }






//   approveRequest(id: number) {
//     this.pgService.approveRequest(id).subscribe(
//       response => {
//         console.log(`Approved request with ID: ${id}`);
//         this.pendingRequests = this.pendingRequests.filter(request => request.uid !== id);
//         this.onSearch();
//       },
//       error => {
//         console.error('Error approving request:', error);
//         alert('Failed to approve request. Please try again.');
//       }
//     );
//   }

//   rejectRequest(id: number) {
//     this.pgService.rejectRequest(id).subscribe(
//       response => {
//         console.log(`Rejected request with ID: ${id}`);
//         this.pendingRequests = this.pendingRequests.filter(request => request.uid !== id);
//         this.onSearch();
//       },
//       error => {
//         console.error('Error rejecting request:', error);
//         alert('Failed to reject request. Please try again.');
//       }
//     );
//   }
// }