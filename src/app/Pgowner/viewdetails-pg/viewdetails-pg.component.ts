import { Component, inject, OnInit } from '@angular/core';
import { PG } from '../../Models/pglist';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-viewdetails-pg',
  standalone: true,
  imports: [NgIf, RouterOutlet],
  templateUrl: './viewdetails-pg.component.html',
  styleUrls: ['./viewdetails-pg.component.css'] // Corrected typo from styleUrl to styleUrls
})
export class ViewdetailsPgComponent implements OnInit {
  pg: PG | null = null;
  router = inject(Router);
  route = inject(ActivatedRoute);
  pgownerservice = inject(PgownerService);
  authservice = inject(AuthService); 

  ngOnInit(): void {
    this.loadPgDetails(); // Load PG details on component initialization
  }

  // Fetch PG details by ID
  loadPgDetails(): void {
    const pgId = this.route.snapshot.paramMap.get('id'); // Get the PG ID from the route parameters
    if (pgId) {
      this.pgownerservice.getPGDetails(+pgId).subscribe(
        (data: PG) => {
          this.pg = data; // Set the PG details to the pg variable
        },
        (error) => {
          console.error('Error fetching PG details', error);
          alert('Could not load PG details. Please try again later.'); // Notify the user
        }
      );
    } else {
      console.error('No PG ID found in route parameters.');
      alert('Invalid PG ID.'); // Notify the user
    }
  }
  editPg(): void {
    if (this.pg) {
      this.router.navigate(['/edit-pg', this.pg.Uid]); // Adjust the route to your edit PG component
    } else {
      console.error('No PG selected for editing.');
      alert('No PG selected to edit.'); // Notify the user
    }
  }

 // Delete the PG
 deletePg(): void {
  if (this.pg && this.pg.Uid) {
    const confirmDelete = confirm(`Are you sure you want to delete "${this.pg.Pgname}"?`);
    if (confirmDelete) {
      this.pgownerservice.deletePG(this.pg.Uid).subscribe(
        () => {
          console.log('PG deleted successfully');
          alert('PG deleted successfully.'); // Notify the user
          this.router.navigate(['/view-pgs']); // Navigate back to the PG list or appropriate page
        },
        (error) => {
          console.error('Error deleting PG', error);
          alert('Could not delete PG. Please try again later.'); // Notify the user
        }
      );
    }
  } else {
    console.error('No PG selected for deletion.');
    alert('No PG selected to delete.'); // Notify the user
  }
}
}