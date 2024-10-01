import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink, RouterOutlet, UserNavbarComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
