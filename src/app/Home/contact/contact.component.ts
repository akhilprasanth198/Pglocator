import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactobject: any = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  contactService = inject(ContactService);
  router = inject(Router);

  contact() {
    // Check if any field is empty
    if (!this.contactobject.name || !this.contactobject.email || !this.contactobject.subject || !this.contactobject.message) {
      alert("Please fill out all fields in the form.");
      return; // Exit the function if validation fails
    }

    this.contactService.onLoginSubmit(this.contactobject).subscribe(
      (result: any) => {
        console.log(result);
        // Show alert message on successful submission
        alert("Message sent successfully!");
        
        // Clear the entered data
        this.clearForm();
      },
      (error) => {
        alert("Message not sent");
      }
    );
  }

  // Method to clear the form fields
  clearForm() {
    this.contactobject = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
