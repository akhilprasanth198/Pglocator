import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user:User = {
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: '',
    role: 'User',
    phone: '',
    gender: '',
    whatsapp: '',
    chatlink: '',
    address: '',
    status:'',
  };
  
  successMessage: string | undefined;
  errorMessage: string | undefined;
  userService=inject(UserService)


  onSubmit() {
    // Set status based on user role
    this.user.status = this.user.role === 'PGOwner' ? 'Pending' : 'Active';

    console.log('Registration data:', this.user); // Log the user data to confirm

    // Make the HTTP POST request to register the user
    this.userService.register(this.user).subscribe(
      (response) => {
        // Check if the response is JSON
        if (typeof response === 'string') {
          this.successMessage = response; // Plain text message
        } else {
          this.successMessage = response?.message || 'User Registered Successfully'; // JSON response
        }

        // Reset user object
        this.user = {
          firstName: '',
          lastName: '',
          email: '',
          dob: '',
          password: '',
          role: 'User',
          phone: '',
          gender: '',
          whatsapp: '',
          chatlink: '',
          address: '',
          status: ''
        };

        // Log the registration success response
        console.log('Registration Success:', this.successMessage);
        // Here you can also navigate to a different page or perform other actions
      },
      (error) => {
        console.error('Registration Error:', error);
        // Handle error scenario
        if (error.error?.errors) {
          this.errorMessage = Object.values(error.error.errors).flat().join(', ');
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      }
    );
  }
}