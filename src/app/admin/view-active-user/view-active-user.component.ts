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

  //working code
//   banrequest(id: number) {
//     this.pgService.banrequest(id).subscribe(
//         response => {
//             console.log(`Approved request with ID: ${id}`);
//             this.fetchbanneduser(); // Refresh the list
//             alert('works');
//         },
//         error => {
//             console.error('Error approving request:', error);
//             alert(`Banned`);
//             this.fetchbanneduser(); 
            
//         }
//     );
// }


}






// import { Component, OnInit } from '@angular/core';
// import { PgService } from '../../services/pg.service'; // Adjust the path as necessary
// import { FormsModule } from '@angular/forms';
// import { CommonModule, NgFor } from '@angular/common';
// @Component({
//      selector: 'app-view-active-user',
//      standalone: true,
//      imports: [FormsModule, NgFor, CommonModule],
//      templateUrl: './view-active-user.component.html',
//      styleUrl: './view-active-user.component.css'
// })
// export class ViewActiveUserComponent implements OnInit {
//   searchTerm: string = '';
//   filteredRequests: any[] = []; // Use any type for dynamic data
//   allUsers: any[] = []; // To store all users

//   constructor(private PgService: PgService) {}

//   ngOnInit(): void {
//     this.loadActiveUsers();
//   }

//   loadActiveUsers() {
//     this.PgService.searchActiveUser('').subscribe(
//       (users: any[]) => {
//         this.allUsers = users; // Store all users
//         this.filteredRequests = users; // Initialize filteredRequests with all users
//       },
//       (error) => {
//         console.error('Error fetching users', error);
//       }
//     );
//   }

//   onSearch() {
//     if (this.searchTerm) {
//       this.filteredRequests = this.allUsers.filter(user =>
//         user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     } else {
//       this.filteredRequests = this.allUsers; // Reset to all users if search term is empty
//     }
//   }

//   banrequest(userId: number) {
//     this.PgService.userAction(userId, 'ban').subscribe(
//       (response) => {
//         console.log(response);
//         this.loadActiveUsers(); // Reload users after action
//         alert('works');
//       },
//       (error) => {
//         console.error('Error banning user', error);
//         alert('not');
//       }
//     );
//   }

//   unbanrequest(userId: number) {
//     this.PgService.userAction(userId, 'unban').subscribe(
//       (response) => {
//         console.log(response);
//         this.loadActiveUsers(); // Reload users after action
//       },
//       (error) => {
//         console.error('Error unbanning user', error);
//       }
//     );
//   }
// }
