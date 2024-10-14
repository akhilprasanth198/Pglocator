import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule, NgIf } from '@angular/common';
import { pgs } from '../../Models/pgs';
import { data, error } from 'jquery';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewdetails-pg',
  standalone: true,
  imports: [ RouterOutlet,FormsModule,CommonModule],
  templateUrl: './viewdetails-pg.component.html',
  styleUrls: ['./viewdetails-pg.component.css'] 
})
export class ViewdetailsPgComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  pgownerservice = inject(PgownerService);
  authservice = inject(AuthService);
  pgDetails: pgs | null = null;
  pgId: number | null = null;
  rooms : any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pgId = Number(params['pgId']);  // Use Number() to ensure it's converted to a number
      console.log('Received PG ID:', this.pgId);  // Log the received PG ID
      if (!isNaN(this.pgId)) {
        this.loadPgDetails(this.pgId);  // Proceed if it's a valid number
        this.loadRoomDetails(this.pgId); // Fetch room for this pg
      } else {
        console.error('Invalid PG ID');
      }
    });
  }
  

  // Fetch PG details by ID
  loadPgDetails(pgId: number): void {
    this.pgownerservice.getPgById(pgId).subscribe(
      data => {
        this.pgDetails = data as unknown as pgs;        
        console.log('Fetched PG details:', data);
      },
      error => {
        console.error(`Error fetching PG details: ${error.status} - ${error.message}`);
      }
    );
  }

  //Fetch room details
  loadRoomDetails(pgId:number):void{
      this.pgownerservice.getRoomsByPgId(pgId).subscribe(data => {
        this.rooms = data;
        console.log("Fetched rooms:",data);
      },
      error =>{
        console.error(`Error fetching rooms: ${error.status} - ${error.message}`);
      }
    );
  }
  // Method for edit button
  editPg(): void {
    console.log('Editing PG with ID:', this.pgId);
    this.router.navigate(['/edit-pg', this.pgId]); // Navigate to the edit page
  }

  // Method for delete button
  deletePg(): void {
    if (this.pgId) {
      this.pgownerservice.deletePG(this.pgId).subscribe(
        response => {
          console.log('PG deleted successfully:', response);
          alert('PG deleted successfully');
          this.router.navigate(['/pgowner-navbar/view-pg']); // Navigate back to PG list after deletion
        },
        error => {
          console.error('Error deleting PG:', error);
          alert('Failed to delete PG. Please try again later.');
        }
      );
    }
  }
}
