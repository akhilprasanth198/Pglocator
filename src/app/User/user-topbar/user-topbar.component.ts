import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AuthService } from '../../services/auth.service';
import { PgsearchDashboardComponent } from "../../Home/pgsearch-dashboard/pgsearch-dashboard.component";
import { User } from '../../Models/user';
@Component({
  selector: 'app-user-topbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, UserProfileComponent, PgsearchDashboardComponent],
  templateUrl: './user-topbar.component.html',
  styleUrl: './user-topbar.component.css'
})
export class UserTopbarComponent {
  authservice=inject(AuthService);
  user: User = {
    uid:0,
    status: 'active',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: '',
    role: 'User',
  };
  uid: number | null = null;
  constructor(private router: Router) {}
  onLogout() {
    this.authservice.llogout()
    console.log('logged out successfully');
    this.router.navigate(['/']);
  }
}
