import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { RoomService } from '../../services/room.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-details-pg-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-details-pg-user.component.html',
  styleUrl: './view-details-pg-user.component.css'
})
export class ViewDetailsPgUserComponent implements OnInit {
  pgownerservice = inject(PgownerService);
  roomservice=inject(RoomService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  pgDetails: any;
  roomDetails: any[] = [];
  pgImages: any[] = [];
  pgId: number | null = null;

ngOnInit(): void {
    // Retrieve the PG ID from the route parameters
    this.pgId = Number(this.route.snapshot.paramMap.get('pgId'));
    if (this.pgId) {
      this.loadPgDetails(this.pgId);
      this.loadRoomDetails(this.pgId);
      //this.loadPgImages(this.pgId);
    } else {
      console.error('Invalid PG ID');
    }
}

  // Fetch PG details
loadPgDetails(pgId: number): void {
    this.pgownerservice.getPgById(pgId).subscribe(
      data => this.pgDetails = data,
      error => console.error(`Error fetching PG details: ${error.message}`)
    );
}
// Fetch room details
loadRoomDetails(pgId: number): void {
  this.roomservice.getRoomDetails(pgId).subscribe(
    data => {
      this.roomDetails = data;
      console.log('Loaded room details:', this.roomDetails); // Log the roomDetails array
      this.roomDetails.forEach(room => console.log('Room ID:', room.rid)); // Log each room's ID
    },
    error => {
      console.error(`Error fetching room details: ${error.message}`);
    }
  );
}

goBack(): void {
  this.router.navigate(['pgsearch-dash']);
}

goToReview(): void {
  const pgid = this.route.snapshot.paramMap.get('pgid'); 
  if (pgid) {
    this.router.navigate(['/review', pgid]); 
  } else {
    console.error('PG ID is null, cannot navigate to review.');
  }
}
}