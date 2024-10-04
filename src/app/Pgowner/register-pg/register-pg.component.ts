import { Component, inject } from '@angular/core';
import { PgownerService } from '../../services/pgowner.service';
import { Router } from '@angular/router';
import { PG } from '../../Models/pglist';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-pg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-pg.component.html',
  styleUrl: './register-pg.component.css'
})
export class RegisterPgComponent {
  pg: PG = {
    id: 1,
    name: '',
    description: '',
    address: '',
    district: '',
    city: '',
    latitude: 0,
    longitude: 0,
    pin: '',
    genderPreference: 'Both',
    amenities: [],
    foodAvailable: false,
    meals: [],
    rules: ''
  };
  amenitiesString: string = '';
  mealsString: string = '';

  pgownerservice=inject(PgownerService)
  router=inject(Router)

  onSubmit(): void {
    // Convert amenities and meals from comma-separated string to array
    this.pg.amenities = this.amenitiesString.split(',').map(item => item.trim());
    this.pg.meals = this.mealsString.split(',').map(item => item.trim());

    this.pgownerservice.addPG(this.pg).subscribe(
      (response) => {
        alert('PG registered successfully!');
        this.router.navigate(['/pg-list']); // Navigate to PG list after registration
      },
      (error) => {
        console.error('Error registering PG:', error);
        alert('Failed to register PG. Please try again.');
      }
    );
  }
}