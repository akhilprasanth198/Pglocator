import { Component } from '@angular/core';
import { PolicyComponent } from "./policy/policy.component";
import { PrivacyComponent } from './privacy/privacy.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [PolicyComponent,PrivacyComponent,RouterOutlet,RouterLink],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent {

}
