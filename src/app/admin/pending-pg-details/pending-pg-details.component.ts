import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pending-pg-details',
  standalone: true,
  imports: [NgIf, RouterOutlet],
  templateUrl: './pending-pg-details.component.html',
  styleUrls: ['./pending-pg-details.component.css']
})
export class PendingPgDetailsComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  pgownerservice = inject(PgownerService);
  authservice = inject(AuthService);
  pgDetails: any | null = null; // Use 'any' type for pgDetails
  pgId: number | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pgId = Number(params['pgId']);
      console.log('Received PG ID:', this.pgId);
      if (!isNaN(this.pgId)) {
        this.loadPgDetails(this.pgId);
      } else {
        console.error('Invalid PG ID');
      }
    });
  }

  loadPgDetails(pgId: number): void {
    this.pgownerservice.getPgById(pgId).subscribe(
      data => {
        this.pgDetails = data; // Directly assign data
        console.log('Fetched PG details:', data);
      },
      error => {
        console.error(`Error fetching PG details: ${error.status} - ${error.message}`);
      }
    );
  }
  // approvePg(pgId: number): void {
  //   console.log('Approving request with ID:', pgId);
  //   this.pgownerservice.approveRequest(pgId).subscribe(
  //     response => {
  //       console.log(`Response from approval:`, response);
  //       alert('Approved: ' + response.text);  // Displaying the success message
  //   }
  //   ,
  //     error => {
  //       console.error('Error approving request:', error);
  //       alert('Error approving request: ' + (error.error?.message || error.message || 'Unknown error'));
  //     }
  //   );
  // }

  approvePg(pgId: number): void {
    console.log('Approving request with ID:', pgId);
    this.pgownerservice.approveRequest(pgId).subscribe(
        response => {
            console.log(`Response from approval:`, response);
          
        },
        error => {
            console.error('Error approving request:', error);
            alert('Error approving request: ' + (error.error?.message || error.message || 'Unknown error'));
        }
    );
}

  
  rejectRequest(pgId: number): void {
    console.log('Rejecting request with ID:', pgId);
    this.pgownerservice.rejectRequest(pgId).subscribe(
      response => {
        console.log(`Response from rejection:`, response);
        alert('Rejected');
        // Optionally, navigate away or refresh
      },
      error => {
        console.error('Error rejecting request:', error);
        alert('Error rejecting request: ' + (error.error?.message || error.message || 'Unknown error'));
      }
    );
  }
}  

//   approvePg(id: number): void {
//     this.pgownerservice.approveRequest(id).subscribe(
//       response => {
//         console.log(`Approved request with ID: ${id}`);
//         alert('Approved');
//         // Optionally, navigate away or refresh
//       },
//       error => {
//         console.error('Error approving request:', error);
//         alert('Error approving request');
//       }
//     );
//   }

//   rejectRequest(id: number): void {
//     this.pgownerservice.rejectRequest(id).subscribe(
//       response => {
//         console.log(`Rejected request with ID: ${id}`);
//         alert('Rejected');
//         // Optionally, navigate away or refresh
//       },
//       error => {
//         console.error('Error rejecting request:', error);
//         alert('Error rejecting request');
//       }
//     );
//   }
// }

// import { Component, inject, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
// import { PgownerService } from '../../services/pgowner.service';
// import { PgService } from '../../services/pg.service';
// import { AuthService } from '../../services/auth.service';
// import { NgIf } from '@angular/common';
// import { pgs } from '../../Models/pgs';
// @Component({
//   selector: 'app-pending-pg-details',
//   standalone: true,
//   imports: [NgIf,RouterOutlet],
//   templateUrl: './pending-pg-details.component.html',
//   styleUrl: './pending-pg-details.component.css'
// })
// export class PendingPgDetailsComponent implements OnInit {
//   router = inject(Router);
//   route = inject(ActivatedRoute);
//   pgownerservice = inject(PgownerService);
//   // PgService=inject(PgService);
//   authservice = inject(AuthService);
//   pgDetails: pgs | null = null;
//   pgId: number | null = null;

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.pgId = Number(params['pgId']);  // Use Number() to ensure it's converted to a number
//       console.log('Received PG ID:', this.pgId);  // Log the received PG ID
//       if (!isNaN(this.pgId)) {
//         this.loadPgDetails(this.pgId);  // Proceed if it's a valid number
//       } else {
//         console.error('Invalid PG ID');
//       }
//     });
//   }
  

//   // Fetch PG details by ID
//   loadPgDetails(pgId: number): void {
//     this.pgownerservice.getPgById(pgId).subscribe(
//       data => {
//         this.pgDetails = data as unknown as pgs;       
//           console.log('Fetched PG details:', data);
//       },
//       error => {
//         console.error(`Error fetching PG details: ${error.status} - ${error.message}`);
//       }
//     );
//   }


//   approvepg(id: number) {
//     this.pgownerservice.approveRequest(id).subscribe(
//         response => {
//             console.log(`Approved request with ID: ${id}`);
//             // Refresh the list
//         },
//         error => {
//             console.error('Error approving request:', error);
//             alert(`approved`);
            
//         }
//     );
// }

// rejectRequest(id: number) {
//     this.pgownerservice.rejectRequest(id).subscribe(
//         response => {
//             console.log(`Rejected request with ID: ${id}`);
//          // Refresh the list
//         },
//         error => {
//             console.error('Error rejecting request:', error);
//             alert(`rejected`);
         
//         }
//     );
// }
// }
