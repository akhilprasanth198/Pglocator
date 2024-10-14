import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  room = {
    pgid: null as number | null, // Allow pgid to be of type number or null
    price: null as number | null,
    deposit: null as number | null,
    services: '',
    roomtype: '',
    facility: '',
    totalroom: null as number | null,
    availability: null as number | null
  };

  pgid: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Get Pgid from route parameters
    this.route.params.subscribe(params => {
      this.pgid = +params['pgid']; // '+' converts to number
      if (this.pgid) {
        this.room.pgid = this.pgid;
      } else {
        console.error('Pgid not provided in route');
        this.router.navigate(['/view-pg']);
      }
    });
  }

  onSubmit(): void {
    // Post the room data to the API
    this.http.post('https://localhost:7152/api/Rooms', this.room)
      .subscribe(
        response => {
          console.log('Room added successfully!', response);
          alert('Room added successfully!');
          // Navigate back to the PG view after adding the room
          this.router.navigate(['/pgowner-navbar/view-pg', this.pgid]);
        },
        error => {
          console.error('Error adding room', error);
          alert('Failed to add room. Please try again.');
          this.router.navigate(['/pgowner-navbar/view-pg', this.pgid]);
        }
      );
  }
}
