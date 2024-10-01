import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Add your authentication logic here
    alert('Login successful!');    // On successful login, redirect to another page
    // this.router.navigate(['/dashboard']);
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}