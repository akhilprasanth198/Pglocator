import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PgService } from '../../services/pg.service';
import { pgs } from '../../Models/pgs';
import { HttpClient } from '@angular/common/http';
import { PgownerService } from '../../services/pgowner.service';
import { AuthService } from '../../services/auth.service';
import { MediaService } from '../../services/media.service';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-view-details-pg-user',
  standalone: true,
  imports: [],
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
  room:any={};
  uid: number | null=null;

  ngOnInit(): void {
    const pgid = this.route.snapshot.paramMap.get('pgid');  // Get PG ID from the route
    this.uid = this.authservice.getUserId();                // Get PG owner ID from AuthService

    if (pgid) {
      this.loadPgDetails(Number(pgid));
      // this.loadMediaDetails(Number(pgid));   // Fetch media details based on PG ID
    // this.loadRoomDetails(Number(pgid)); 
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
loadRoomDetails(pgid: number): void {
  this.http.get('https://localhost:7152/api/Rooms?pgid=${pgid}')
  .subscribe(
    (data) => {
      this.room = data;  // Store room details
      console.log("Fetched room details:", this.room);
    },
    (error) => {
      console.error('Failed to load room details:', error);
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