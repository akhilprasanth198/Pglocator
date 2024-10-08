import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-topbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admin-topbar.component.html',
  styleUrl: './admin-topbar.component.css'
})
export class AdminTopbarComponent {
  constructor (private router: Router) {}
  onLogout() {
    console.log('User logged out');
    this.router.navigate(['/']);
  }
}
