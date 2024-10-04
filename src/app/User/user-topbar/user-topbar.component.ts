import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-user-topbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,UserProfileComponent],
  templateUrl: './user-topbar.component.html',
  styleUrl: './user-topbar.component.css'
})
export class UserTopbarComponent {
  constructor(private router: Router) {}
  onLogout() {
    console.log('User logged out');
    this.router.navigate(['/']);
  }
}
