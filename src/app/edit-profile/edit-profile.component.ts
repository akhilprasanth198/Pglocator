import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})

export class EditProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalcode: ['', Validators.required],
      dob: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // You can populate the form with user data if needed
    // this.profileForm.patchValue(userData);
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Form Submitted', this.profileForm.value);
      alert('registered successfully')
      // Handle form submission, e.g., send to API
    }
  }
}
