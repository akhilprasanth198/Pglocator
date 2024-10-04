import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pgowner-sidebar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './pgowner-sidebar.component.html',
  styleUrl: './pgowner-sidebar.component.css'
})
export class PgownerSidebarComponent {

}