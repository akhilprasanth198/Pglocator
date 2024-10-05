import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserTopbarComponent } from '../user-topbar/user-topbar.component';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component';


@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet,UserTopbarComponent,UserSidebarComponent],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.css'
})
export class UserNavbarComponent {
  
}
