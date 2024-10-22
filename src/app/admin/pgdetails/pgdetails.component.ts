import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PgownerService } from '../../services/pgowner.service';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-pgdetails',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './pgdetails.component.html',
  styleUrl: './pgdetails.component.css'
})
export class PgdetailsComponent implements OnInit {

  router=inject(Router);
  pgownerservice=inject(PgownerService);
  mediaservice=inject(MediaService);
  roomservice=inject(RoomService)
  route=inject(ActivatedRoute)
  http=inject(HttpClient)
  pgDetails:any={};  
  media:any={};
  roomDetails:any={};
  uid: number | null=null;

  ngOnInit(): void {
    const pgid = this.route.snapshot.paramMap.get('pgid');  // Get PG ID from the route
    // this.uid = this.authservice.getUserId();                // Get PG owner ID from AuthService

    if (pgid) {
      this.loadPgDetails(Number(pgid));
      // this.loadMediaDetails(Number(pgid));   // Fetch media details based on PG ID
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

// goBack(): void {
//   this.router.navigate(['pgsearch-dash']);
// }



}
