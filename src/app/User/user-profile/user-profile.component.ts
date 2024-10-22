import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service'; 
import { User } from '../../Models/user'; 
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { UserTopbarComponent } from '../user-topbar/user-topbar.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, UserNavbarComponent, RouterOutlet, UserTopbarComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = {
    uid:0,
    status: 'active',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: '',
    role: 'User',
  }; // Initialize with default values
  uid: number | null = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private authservice: AuthService,
    private location:Location
  ) {}

  ngOnInit(): void {
    // Fetch user ID from AuthService
    this.uid = this.authservice.getUserId();
    console.log('User ID:', this.uid); // Debugging log
    
    // Call fetchUserProfile only if uid is not null
    if (this.uid) {
      this.fetchUserProfile();
    } else {
      console.error('User ID is null. Cannot fetch user profile.');
      alert('Error: User ID not found.');
    }
  }

  // Load user profile using the user ID
  fetchUserProfile(): void {
    if (this.uid) {
      console.log('Fetching profile for user ID:', this.uid); // Debugging log
      this.userService.getUserDetails(this.uid).subscribe({
        next: (data) => {
          console.log('Profile data received:', data); // Debugging log
          this.user = data; // Set user data from response
        },
        error: (err) => {
          console.error('Error loading user profile', err);
          alert('Error loading user profile. Please try again.');
        }
      });
    }
  }

  // Update user profile
  updateProfile(): void {
    if (this.uid) {
      this.userService.updateUser(this.uid, this.user).subscribe({
        next: () => {
          alert('Profile updated successfully!'); // Success alert
          this.router.navigate(['/pgsearch-dash']); 
        },
        error: (err) => {
          console.error('Error updating profile', err);
          alert('There was an error updating your profile. Please try again.'); // Error alert
        }
      });
    }
  }
  goBack() {
    this.location.back(); // Navigates to the previous page
  }
}