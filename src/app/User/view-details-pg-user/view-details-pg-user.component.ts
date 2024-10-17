import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { RoomService } from '../../services/room.service';
<<<<<<< HEAD
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view-details-pg-user',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
=======
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-details-pg-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
>>>>>>> 10b0f5b76e24c9051671ae1dcef5cc1bf2b2b722
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

<<<<<<< HEAD
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
      // this.loadMediaDetails(Number(pgid));   // Fetch media details based on PG ID
    this.loadRoomDetails(Number(pgid)); 
=======
ngOnInit(): void {
    // Retrieve the PG ID from the route parameters
    this.pgId = Number(this.route.snapshot.paramMap.get('pgId'));
    if (this.pgId) {
      this.loadPgDetails(this.pgId);
      this.loadRoomDetails(this.pgId);
      //this.loadPgImages(this.pgId);
>>>>>>> 10b0f5b76e24c9051671ae1dcef5cc1bf2b2b722
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
<<<<<<< HEAD
  }
  // Fetch media details related to the PG
// loadMediaDetails(pgid: number): void {
//   this.mediaservice.getMedia   (pgid).subscribe(
//     (data:any) => {
//       this.media = data;  // Store media details
//     },
//     (error) => {
//       console.error('Failed to load media details:', error);
//     }
//   );
// }

//Fetch room details related to the PG
=======
}
>>>>>>> 10b0f5b76e24c9051671ae1dcef5cc1bf2b2b722
// Fetch room details
loadRoomDetails(pgId: number): void {
  this.roomservice.getRoomDetails(pgId).subscribe(
    data => {
      this.roomDetails = data;
      console.log('Loaded room details:', this.roomDetails); // Log the roomDetails array
<<<<<<< HEAD
      this.roomDetails.forEach((room: { rid: any; }) => console.log('Room ID:', room.rid)); // Log each room's ID
    },
    error => {
      console.error(`Error fetching room details: ${error.message}`);
    }
  );
=======
      this.roomDetails.forEach(room => console.log('Room ID:', room.rid)); // Log each room's ID
    },
    error => {
      console.error(`Error fetching room details: ${error.message}`);
    }
  );
>>>>>>> 10b0f5b76e24c9051671ae1dcef5cc1bf2b2b722
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