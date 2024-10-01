import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OwnerActionComponent } from '../owner-action/owner-action.component';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [RouterOutlet,OwnerActionComponent,RouterLink],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

}
