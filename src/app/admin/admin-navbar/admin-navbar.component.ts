import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OwnerActionComponent } from '../owner-action/owner-action.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { AdminTopbarComponent } from '../admin-topbar/admin-topbar.component';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [RouterOutlet,OwnerActionComponent,RouterLink,AdminSidebarComponent,AdminTopbarComponent],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {

}
