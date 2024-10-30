import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgService } from '../../services/pg.service';
import { pgs } from '../../Models/pgs';
import { HttpClient } from '@angular/common/http';
import { PgownerService } from '../../services/pgowner.service';
import { AuthService } from '../../services/auth.service';
import { RoomService } from '../../services/room.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-view-details-pg-user',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './view-details-pg-user.component.html',
  styleUrl: './view-details-pg-user.component.css'
})
export class ViewDetailsPgUserComponent implements OnInit {
  pgownerservice = inject(PgownerService);
  roomservice = inject(RoomService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  mediaService = inject(MediaService);
  authservice = inject(AuthService)
  pgDetails: any;
  roomDetails: any[] = [];
  pgImages: any[] = [];
  pgId: number | null = null;
  mediaList: any[] = [];
  currentIndex = 0;
  selectedRoomType: string = '';
  roomTypes: string[] = [];
  filteredRooms: any[] = [];
  uid: number | null | undefined;
  

  ngOnInit(): void {
    this.uid = this.authservice.getUserId();                // Get PG owner ID from AuthService

    this.pgId = Number(this.route.snapshot.paramMap.get('pgId'));
    if (this.pgId) {
      this.loadPgDetails(this.pgId);
      this.loadRoomDetails(this.pgId);
      this.pgId = +this.route.snapshot.paramMap.get('pgId')!;
      this.loadMedia();
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
 loadMedia(): void {
  if (this.pgId !== null) {
    this.mediaService.getMediaByPgId(this.pgId).subscribe(
      media => this.mediaList = media,
      error => console.error('Error loading media:', error)
    );
  }
}


  // Fetch room details
  loadRoomDetails(pgId: number): void {
    this.roomservice.getRoomDetails(pgId).subscribe(
      data => {
        this.roomDetails = data;
        this.roomTypes = [...new Set(data.map(room => room.roomtype))]; // Get unique room types
        this.filterRooms(); // Initialize filtered rooms
      },
      error => {
        console.error(`Error fetching room details: ${error.message}`);
      }
    );
  }

  filterRooms(): void {
    if (this.selectedRoomType) {
      this.filteredRooms = this.roomDetails.filter(room => room.roomtype === this.selectedRoomType);
    } else {
      this.filteredRooms = [...this.roomDetails];
    }
  }


onFileChange(event: any): void {
  const file = event.target.files[0];
  if (file && this.pgId !== null) {
    this.mediaService.uploadMedia(this.pgId, file).subscribe(
      () => this.loadMedia(),
      error => console.error('Error uploading media:', error)
    );
  }
}
triggerFileInput(): void {
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  if (fileInput) {
    fileInput.click();
  }
}
previousImage(): void {
  this.currentIndex = (this.currentIndex === 0) ? this.mediaList.length - 1 : this.currentIndex - 1;
}

nextImage(): void {
  this.currentIndex = (this.currentIndex + 1) % this.mediaList.length;
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