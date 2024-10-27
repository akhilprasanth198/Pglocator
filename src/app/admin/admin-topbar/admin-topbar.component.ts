import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-admin-topbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admin-topbar.component.html',
  styleUrl: './admin-topbar.component.css'
})
export class AdminTopbarComponent {
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
