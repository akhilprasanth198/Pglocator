import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PgownerService } from '../../services/pgowner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../Models/room'; // Ensure correct import for Room model
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-room',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  private pgownerService = inject(PgownerService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  roomForm: FormGroup;
  roomId: number | null = null;
  pgId: number | null = null; // Define pgId
  availableServices: string[] = ['WiFi', 'Air Conditioning', 'Parking', 'Laundry']; // Sample services

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation
    this.roomForm = this.fb.group({
      price: [0, [Validators.required, Validators.min(0)]],
      deposit: [0, [Validators.required, Validators.min(0)]],
      roomType: ['', Validators.required],
      facility: ['', Validators.required],
      totalRoom: [1, [Validators.required, Validators.min(1)]],
      availability: [true], // Assuming default is available
      services: [[], Validators.required] // Add the services control
    });
  }

  ngOnInit(): void {
    // Retrieve the room ID from the route parameters
    this.roomId = Number(this.route.snapshot.paramMap.get('roomId'));
    if (this.roomId) {
      this.loadRoomDetails(this.roomId);
    } else {
      console.error('Invalid Room ID');
    }
  }

  // Method to load room details for editing
  private loadRoomDetails(roomId: number): void {
    this.pgownerService.getRoomDetailsById(roomId).subscribe(
      (room: Room) => {
        this.roomForm.patchValue({
          price: room.Price,
          deposit: room.Deposit,
          roomType: room.RoomType,
          facility: room.Facility,
          totalRoom: room.TotalRoom,
          availability: room.Availability, // Assuming this is a boolean
          services: room.Services || [] // Assign services (ensure it is an array)
        });
        this.pgId = room.Pgid; // Assign Pgid to pgId
      },
      error => {
        console.error('Error fetching room details:', error);
        alert('Failed to load room details. Please try again later.');
      }
    );
  }

  // Method to save the updated room details
  saveRoom(): void {
    if (this.roomForm.valid) {
      const roomData: Room = {
        Rid: this.roomId!,
        Price: this.roomForm.value.price,
        Deposit: this.roomForm.value.deposit,
        RoomType: this.roomForm.value.roomType,
        Facility: this.roomForm.value.facility,
        TotalRoom: this.roomForm.value.totalRoom,
        Availability: this.roomForm.value.availability,
        Services: this.roomForm.value.services, // Include services in the room data
        Pgid: this.pgId! // Use pgId here
      };

      console.log('Updating room with data:', roomData); // Log the data being sent

      this.pgownerService.updateRoom(this.roomId!, roomData).subscribe(
        response => {
          console.log('Room updated successfully:', response);
          alert('Room updated successfully');
          this.router.navigate(['/view-pg']); // Navigate back or to another page
        },
        error => {
          console.error('Error updating room:', error);
          alert('Failed to update the room. Please try again later.');
        }
      );
    } else {
      console.error('Form is invalid');
      alert('Please fill out all required fields correctly.');
    }
  }
}
