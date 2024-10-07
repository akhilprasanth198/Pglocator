import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Ensure you fix the typo from styleUrl to styleUrls
})
export class LoginComponent {
  userobject: any = {
    email: "", 
    password: "",
  };

  userService = inject(UserService);
  router = inject(Router);

  // Function to handle login submission
  onSubmit() {
    this.userService.onLoginSubmit(this.userobject).subscribe(
      (result: any) => {
        console.log("Login result:", result);
        if (result.role === 'admin') {
          console.log("Navigating to admin-navbar");
          this.router.navigateByUrl('/admin-navbar');
        }
        if (result && result.message === 'Login successful') {
          console.log("User Role:", result.role);
          
          // Handle redirection based on the user's role
          if (result.role === 'pgowner') {
            console.log("Navigating to pgowner-navbar");
            this.router.navigateByUrl('/pgowner-navbar');
          } else if (result.role === 'user') {
            console.log("Navigating to user-dashboard");
            this.router.navigateByUrl('/user-dashboard');
          }
        }
      },
      (error: any) => {
        alert('Invalid username or password');
        console.log(error);
      }
    );
  }

  
  // Navigate to register component
  navigateToRegister() {
    this.router.navigate(['/registration']);
  }
}
