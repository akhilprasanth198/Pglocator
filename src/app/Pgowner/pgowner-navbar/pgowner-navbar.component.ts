import { Component } from '@angular/core';
import { PgownerTopbarComponent } from "../pgowner-topbar/pgowner-topbar.component";
import { PgownerSidebarComponent } from "../pgowner-sidebar/pgowner-sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pgowner-navbar',
  standalone: true,
  imports: [PgownerTopbarComponent, PgownerSidebarComponent,RouterOutlet],
  templateUrl: './pgowner-navbar.component.html',
  styleUrl: './pgowner-navbar.component.css'
})
export class PgownerNavbarComponent {

}
