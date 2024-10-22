import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent,RegistrationComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Ensure you fix the typo from styleUrl to styleUrls
})
export class LoginComponent {
  userobject: any = {
    email: "", 
    password: "",
  };
  searchModel = {
    
    district: '',
    city: ''
  };


  userService = inject(UserService);
  router = inject(Router);
  authservice=inject(AuthService)

  // Function to handle login submission
  onSubmit() {
    this.userService.onLoginSubmit(this.userobject).subscribe(
      (result: any) => {
        console.log("Login result:", result);
        
        if (result && result.message === 'Login successful') {
          this.authservice.setUserId(result.userId);
          console.log("User Role:", result.role);

          // Role-based redirection
          if (result.role === 'admin') {
            console.log("Navigating to admin-navbar");
            this.router.navigateByUrl('/admin-navbar');
          } else if (result.role === 'PGOwner') {
            console.log("Navigating to pgowner-navbar");
            this.router.navigateByUrl('pgowner-navbar/view-pg/:pgId');
          } else if (result.role === 'User') {
            console.log("Navigating to pgsearch-dashboard");
            this.router.navigateByUrl('/pgsearch-dash');
          }
        }
          else {
          alert('Invalid username or password');
        }
      },
      (error: any) => {
        alert('Invalid username or password');
        console.error(error);
      }
    );
  }

}