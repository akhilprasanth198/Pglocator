import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-topbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admin-topbar.component.html',
  styleUrl: './admin-topbar.component.css'
})
export class AdminTopbarComponent {
  authservice=inject(AuthService)
  constructor (private router: Router) {}
  onLogout() {
    this.authservice.llogout()
    this.router.navigate(['/']);
  }
}
