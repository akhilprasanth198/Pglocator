import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = {
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
    status: '',
  };

  successMessage: string | undefined;
  errorMessage: string | undefined;

  userService = inject(UserService);
  router = inject(Router);

  onSubmit() {
    this.user.status = this.user.role === 'PGOwner' ? 'Pending' : 'Active';
  
    console.log('Registration data:', this.user);
  
    this.userService.register(this.user).subscribe(
      (response: string) => {
        this.successMessage = response; // Handle plain text response
        this.resetForm();
        console.log('Registration Success:', this.successMessage);
        alert("Registered Successfully");
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Registration Error:', error);
        if (error.error?.errors) {
          this.errorMessage = Object.values(error.error.errors).flat().join(', ');
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      }
    );
  }
  
  private resetForm() {
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
  }
}
