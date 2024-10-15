import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterLink, FooterComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

}
