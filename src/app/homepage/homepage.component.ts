import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { PgSearchComponent } from "../pg-search/pg-search.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, PgSearchComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
