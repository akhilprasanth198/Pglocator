import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pgowner-topbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pgowner-topbar.component.html',
  styleUrl: './pgowner-topbar.component.css'
})
export class PgownerTopbarComponent {

  onLogout(){

  }
}
