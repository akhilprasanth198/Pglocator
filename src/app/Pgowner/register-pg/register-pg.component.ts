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
    Pgname: 'asdfg',
    Description: '',
    Address: '',
    District: '',
    City: '',
    Latitude: '',
    Longitude: '',
    Pin: '',
    Gender_perference: 'Both',  // Default value
    Amentities: '',  // String
    Foodavailable: false,
    Status: 'pending',
    Meal: '',  // String
    Rules: ''
  };

  pgownerservice = inject(PgownerService);
  router = inject(Router);

  // Validation to check for missing fields
  validateFields(): string[] {
    const missingFields = [];
    if (!this.pg.Pgname) {
      missingFields.push('PG Name');
    
    }
    if (!this.pg.Description) {
      missingFields.push('Description');
    }
    if(!this.pg.Address)
      {
        missingFields.push('Address');
      }
    if(!this.pg.District)
      {
        missingFields.push('District');
      }
    if(!this.pg.City)
      {
        missingFields.push('City');
      }
    if(!this.pg.Latitude)
      {
        missingFields.push('Latitude');
      }
    if(!this.pg.Longitude)
      {
        missingFields.push('Longitu');
      }
          
    if(!this.pg.Pin)
        {
          missingFields.push('Pin');
        }
    if (!this.pg.Amentities) {
      missingFields.push('Amenities');
    }
    if (!this.pg.Meal) {
      missingFields.push('Meals');
    }
    if (!this.pg.Gender_perference) {
      missingFields.push('Gender Preference');
    }
    if (!this.pg.Rules) {
      missingFields.push('Rules');
    }
    if(!this.pg.Foodavailable)
      {
        missingFields.push('Food Available');
      }

    return missingFields;
  }

  onSubmit(): void {
    // Validate the form
    const missingFields = this.validateFields();
    if (missingFields.length > 0) {
      alert(`Please fill all the required fields: ${missingFields.join(', ')}.`);
      return;
    }

    // Send the request
    this.pgownerservice.registerPG(this.pg).subscribe(
      response => {
        alert('PG registered successfully. Awaiting admin approval.');
        this.router.navigate(['/pgowner-navbar/view-pg']);
      },
      error => {
        console.error('Registration failed:', error);
        if (error.status === 400 && error.error.errors) {
          console.log('Validation errors:', error.error.errors);
        }
      }
    );
  }
}
