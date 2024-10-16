import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { RoomService } from '../../services/room.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewdetails-pg',
  standalone:true,
  imports:[FormsModule,CommonModule,RouterOutlet],
  templateUrl: './viewdetails-pg.component.html',
  styleUrls: ['./viewdetails-pg.component.css']
})
export class ViewdetailsPgComponent implements OnInit {
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

  
  editPg(): void {
    if (this.pgId !== null) {
      console.log('Navigating to edit PG for ID:', this.pgId);
      this.router.navigate(['/edit-pg', this.pgId]); // Adjust the route as needed
    } else {
      console.error('PG ID is not available');
    }
  }

  // Method to delete the current PG
  deletePg(): void {
    if (this.pgId !== null) {
      if (confirm('Are you sure you want to delete this PG?')) {
        this.pgownerservice.deletePG(this.pgId).subscribe(
          () => {
            console.log('PG deleted successfully');
            alert('PG deleted successfully');
            this.router.navigate(['/view-pg']); // Navigate back to the PG list after deletion
          },
          error => {
            console.error('Error deleting PG:', error);
            alert('Failed to delete the PG. Please try again later.');
          }
        );
      }
    } else {
      console.error('PG ID is not available');
    }
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

  editroom(roomId: number | undefined): void {
    if (roomId) {
      console.log('Navigating to edit room for ID:', roomId);
      this.router.navigate(['/edit-room', roomId]);
    } else {
      console.error('Room ID is not available', roomId);
    }
  }

  
  deleteroom(roomId: number | undefined): void {
    if (roomId) {
      if (confirm('Are you sure you want to delete this room?')) {
        this.roomservice.deleteRoom(roomId).subscribe(
          () => {
            console.log('Room deleted successfully');
            alert('Room deleted successfully');
            // Reload room details after deletion
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
    } else {
      console.error('Room ID is not available');
    }
  }
  

  // // Fetch uploaded PG images
  // loadPgImages(pgId: number): void {
  //   this.pgownerservice.getPgImages(pgId).subscribe(
  //     data => this.pgImages = data,
  //     error => console.error(`Error fetching PG images: ${error.message}`)
  //   );
  // }
}
