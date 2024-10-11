import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private router: Router) {}
  onSubmit(form: NgForm) { 
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      // You can also send the data to your backend server here
      this.router.navigate(['/login']);
      form.reset();
    }
  }

}
