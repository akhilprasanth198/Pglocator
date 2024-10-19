import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { PgownerProfileComponent } from '../pgowner-profile/pgowner-profile.component';
import { AuthService } from '../../services/auth.service';
import { User } from '../../Models/user';
@Component({
  selector: 'app-pgowner-topbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,PgownerProfileComponent],
  templateUrl: './pgowner-topbar.component.html',
  styleUrl: './pgowner-topbar.component.css'
})
export class PgownerTopbarComponent {
  authservice=inject(AuthService);
  user:User = {
    uid: 0,
    status: 'approved',
    firstName: '',
    email: '',
    dob: '',
    password: '',
    role: 'PGOwner',
    chatlink: '',
    lastName: '',
    phone:'',
    gender:'',
    whatsapp:'',
    address:''
  };
  uid : number | null = null;
  
  constructor(private router: Router) {}
  onLogout() {
    this.authservice.llogout()
    console.log('logged out');
    this.router.navigate(['/']);
  }
}
