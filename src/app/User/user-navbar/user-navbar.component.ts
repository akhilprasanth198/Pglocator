import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';


@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,UserProfileComponent],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {
  constructor(private router: Router) {}
  onLogout() {
    console.log('User logged out');
    this.router.navigate(['/']);
  }
}
