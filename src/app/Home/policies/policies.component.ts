import { Component } from '@angular/core';
import { PolicyComponent } from "./policy/policy.component";

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [PolicyComponent,RouterOutlet,RouterLink],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent {

}
