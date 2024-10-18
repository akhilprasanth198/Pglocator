import { Component, inject } from '@angular/core';
import { PgownerService } from '../../services/pgowner.service';
import { Router } from '@angular/router';
import { PG } from '../../Models/pglist';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-pg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-pg.component.html',
  styleUrl: './register-pg.component.css'
})
export class RegisterPgComponent {
  pg: PG = {
    Uid: null,
    Pgname: '',
    Description: '',
    Address: '',
    District: '',
    City: '',
    Latitude: '',
    Longitude: '',
    Pin:670,
    Gender_perference: 'Both',  // Default value
    Amentities: '',  // String
    Foodavailable: false,
    Status: 'pending',
    Meal: '',  // String
    Rules: ''
  };

  pgownerservice = inject(PgownerService);
  router = inject(Router);
authservice=inject(AuthService)
 

ngOnInit() {
  const userId = this.authservice.getUserId();
  if (userId) {
    this.pg.Uid = userId;
  } else {
    console.error('User not logged in');
    this.router.navigate(['/login']); // Redirect to login if not logged in
  }
}

onSubmit() {
  if (this.pg.Uid) {
    this.pgownerservice.registerPG(this.pg).subscribe(
      (response) => {
        console.log('PG registered successfully', response);
        this.router.navigate(['/pgowner-navbar']); // Adjust this route as needed
      },
      (error) => {
        console.error('Error registering PG', error);
      }
    );
  } else {
    console.error('User ID is missing, cannot register PG');
  }
}
}