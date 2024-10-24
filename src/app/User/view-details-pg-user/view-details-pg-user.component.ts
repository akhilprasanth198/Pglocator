import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PgService } from '../../services/pg.service';
import { pgs } from '../../Models/pgs';
import { HttpClient } from '@angular/common/http';
import { PgownerService } from '../../services/pgowner.service';
import { AuthService } from '../../services/auth.service';
import { MediaService } from '../../services/media.service';
import { RoomService } from '../../services/room.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view-details-pg-user',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './view-details-pg-user.component.html',
  styleUrl: './view-details-pg-user.component.css'
})
export class ViewDetailsPgUserComponent implements OnInit {

  router=inject(Router);
  pgownerservice=inject(PgownerService);
  mediaservice=inject(MediaService);
  roomservice=inject(RoomService)
  authservice=inject(AuthService)
  route=inject(ActivatedRoute)
  http=inject(HttpClient)
  pgDetails:any={};  
  media:any={};
  roomDetails:any={};
  uid: number | null=null;

  ngOnInit(): void {
    const pgid = this.route.snapshot.paramMap.get('pgid');  // Get PG ID from the route
    this.uid = this.authservice.getUserId();                // Get PG owner ID from AuthService

    if (pgid) {
      this.loadPgDetails(Number(pgid));
      this.loadMediaDetails(Number(pgid));   // Fetch media details based on PG ID
    this.loadRoomDetails(Number(pgid)); 
    } else {
      console.error('PG ID not provided in the route!');
    }
  }

  // Call the service to fetch PG details
  loadPgDetails(pgid: number): void {
    this.pgownerservice.getPgById(pgid).subscribe(
      (data) => {
        this.pgDetails = data; 
        console.log("Fetched PG Details:", this.pgDetails); // Set the fetched PG details into the object
      },
      (error) => {
        console.error('Failed to load PG details:', error);
      }
    );
  }
 // Fetch media details related to the PG
loadMediaDetails(pgid: number): void {
  this.mediaservice.getMediaByPgId(pgid).subscribe(
    (data:any) => {
      this.media = data;  // Store media details
    },
    (error) => {
      console.error('Failed to load media details:', error);
    }
  );
}

// Fetch room details
loadRoomDetails(pgId: number): void {
  this.roomservice.getRoomDetails(pgId).subscribe(
    data => {
      this.roomDetails = data;
      console.log('Loaded room details:', this.roomDetails); // Log the roomDetails array
      this.roomDetails.forEach((room: { rid: any; }) => console.log('Room ID:', room.rid)); // Log each room's ID
    },
    error => {
      console.error(`Error fetching room details: ${error.message}`);
    }
  );
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