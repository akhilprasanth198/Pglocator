import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { RoomService } from '../../services/room.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-viewdetails-pg',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './viewdetails-pg.component.html',
  styleUrls: ['./viewdetails-pg.component.css']
})
export class ViewdetailsPgComponent implements OnInit {
  pgownerservice = inject(PgownerService);
  roomservice = inject(RoomService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  mediaService = inject(MediaService);

  pgDetails: any;
  roomDetails: any[] = [];
  pgImages: any[] = [];
  pgId: number | null = null;
  mediaList: any[] = [];
  currentIndex = 0;
  selectedRoomType: string = '';
  roomTypes: string[] = [];
  filteredRooms: any[] = [];

  ngOnInit(): void {
    // Retrieve the PG ID from the route parameters
    this.pgId = Number(this.route.snapshot.paramMap.get('pgId'));
    if (this.pgId) {
      this.loadPgDetails(this.pgId);
      this.loadRoomDetails(this.pgId);
      this.pgId = +this.route.snapshot.paramMap.get('pgId')!;
      this.loadMedia();
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

  editPg(): void {
    if (this.pgId !== null) {
      this.router.navigate(['/edit-pg', this.pgId]);
    } else {
      console.error('PG ID is not available');
    }
  }

  deletePg(): void {
    if (this.pgId !== null && confirm('Are you sure you want to delete this PG?')) {
      this.pgownerservice.deletePG(this.pgId).subscribe(
        () => {
          alert('PG deleted successfully');
          this.router.navigate(['/view-pg']);
        },
        error => {
          console.error('Error deleting PG:', error);
          alert('Failed to delete the PG. Please try again later.');
        }
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

  editRoom(roomId: number | undefined): void {
    if (roomId) {
      this.router.navigate(['/edit-room', roomId]);
    } else {
      console.error('Room ID is not available');
    }
  }

  deleteRoom(roomId: number | undefined): void {
    if (roomId && confirm('Are you sure you want to delete this room?')) {
      this.roomservice.deleteRoom(roomId).subscribe(
        () => {
          alert('Room deleted successfully');
          if (this.pgId) {
            this.loadRoomDetails(this.pgId);
          }
        },
        error => {
          console.error('Error deleting room:', error);
          alert('Failed to delete the room. Please try again later.');
        }
      );
    }
  }

  loadMedia(): void {
    if (this.pgId !== null) {
      this.mediaService.getMediaByPgId(this.pgId).subscribe(
        media => this.mediaList = media,
        error => console.error('Error loading media:', error)
      );
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

  deleteMedia(mediaId: number): void {
    this.mediaService.deleteMedia(mediaId).subscribe(
      () => this.loadMedia(),
      error => console.error('Error deleting media:', error)
    );
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
}
