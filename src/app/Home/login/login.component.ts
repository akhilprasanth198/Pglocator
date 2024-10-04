import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

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

  onLogin(form: NgForm) {
    if (form.valid) {
      console.log('Login Form Submitted!', form.value);
      // Here you can handle the login logic (e.g., validate credentials)
      form.reset();
    }
  }
  onSubmit() {
    // Add your authentication logic here
    alert('Login successful!');    // On successful login, redirect to another page
    // this.router.navigate(['/dashboard']);
  }
  navigateToRegister() {
    this.router.navigate(['/registration']);
  }

}
