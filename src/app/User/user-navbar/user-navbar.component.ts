import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserTopbarComponent } from '../user-topbar/user-topbar.component';


@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,UserTopbarComponent],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {
  
}
