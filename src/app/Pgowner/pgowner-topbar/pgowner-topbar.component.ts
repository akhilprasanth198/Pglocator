import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pgowner-topbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './pgowner-topbar.component.html',
  styleUrl: './pgowner-topbar.component.css'
})
export class PgownerTopbarComponent {
  constructor(private router: Router) {}
  onLogout() {
    console.log('User logged out');
    this.router.navigate(['/']);
  }
}
