import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PgService } from '../../services/pg.service';
import { pgs } from '../../Models/pgs';
import { PgownerService } from '../../services/pgowner.service';
import { AuthService } from '../../services/auth.service';
import { MediaService } from '../../services/media.service';
import { RoomService } from '../../room.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-view-details-pg-user',
  standalone: true,
  imports: [CommonModule,NgFor,],
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
  pgDetails:any={};  
  media:any={};
  room:any={};
  uid: number | null=null;

  ngOnInit(): void {
    const pgid = this.route.snapshot.paramMap.get('pgid');  // Get PG ID from the route
    this.uid = this.authservice.getUserId();                // Get PG owner ID from AuthService

    if (pgid) {
      this.loadPgDetails(Number(pgid));
      this.loadMediaDetails(Number(pgid));   // Fetch media details based on PG ID
    // this.loadRoomDetails(Number(pgid)); 
    } else {
      console.error('PG ID not provided in the route!');
    }
  }

  // Call the service to fetch PG details
  loadPgDetails(pgid: number): void {
    this.pgownerservice.getPgById(pgid).subscribe(
      (data) => {
        this.pgDetails = data;  // Set the fetched PG details into the object
      },
      (error) => {
        console.error('Failed to load PG details:', error);
      }
    );
  }
  // Fetch media details related to the PG
loadMediaDetails(pgid: number): void {
  this.mediaservice.getMediaByPgId(pgid).subscribe(
    (data) => {
      this.media = data;  // Store media details
    },
    (error) => {
      console.error('Failed to load media details:', error);
    }
  );
}
review(pgid: number): void {
  console.log('Review PG ID:', pgid); // Debug log to check pgid value

 
    // If logged in, navigate to the review page
    this.router.navigate(['/review', pgid]); // Adjust as necessary
  
}


// review(PgId:number) :void{
//   if (!this.authservice.isLoggedIn()) {
//     // If not logged in, show alert or redirect to login
//     console.log('User is not logged in, redirecting to login.');
//     this.router.navigate(['/login'], { queryParams: { returnUrl: `/viewdetailPg/${PgId}` } });
//   } 
// }
// Fetch room details related to the PG
// loadRoomDetails(pgid: number): void {
//   this.roomservice.getRoomsByPgId(pgid).subscribe(
//     (data) => {
//       this.room = data;  // Store room details
//     },
//     (error) => {
//       console.error('Failed to load room details:', error);
//     }
//   );
// }

}