import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PgsearchComponent } from '../pgsearch/pgsearch.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, PgsearchComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
