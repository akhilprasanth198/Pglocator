import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent {

}
