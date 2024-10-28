import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-viewcontact',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css'],
})
export class ViewcontactComponent implements OnInit {
  contactDetails: any[]=[];
  loading: boolean = true;
  error: string | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContactDetails();
  }

  loadContactDetails() {
    this.contactService.getContactDetails().subscribe(
      (data) => {
        console.log('Fetched contact details:', data); // Check the exact structure
        this.contactDetails = data; // Ensure this is directly assigning the expected structure
        this.loading = false;
      },
      (error) => {
        this.error = 'No Data Found';
        this.loading = false;
        console.error('Error fetching contact details:', error);
      }
    );
  }
}  
//   loadContactDetails() {
//     this.contactService.getContactDetails().subscribe(
//       (data) => {
//         this.contactDetails = data;
//         this.loading = false;
//         console.log(data);
//       },
//       (error) => {
//         this.error = 'Failed to load contact details.';
//         this.loading = false;
//         console.error('Error fetching contact details:', error);
//       }
//     );
//   }
// }


