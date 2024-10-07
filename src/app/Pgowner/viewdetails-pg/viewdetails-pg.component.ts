import { Component,inject, OnInit } from '@angular/core';
import { PG } from '../../Models/pglist';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-viewdetails-pg',
  standalone: true,
  imports: [NgIf,RouterOutlet],
  templateUrl: './viewdetails-pg.component.html',
  styleUrl: './viewdetails-pg.component.css'
})
export class ViewdetailsPgComponent implements OnInit{
pg:PG|null=null;
pgId!:number;
router=inject(Router);
route=inject(ActivatedRoute)
pgownerservice=inject(PgownerService)
ngOnInit(): void {
  const paramMapValue = this.route.snapshot.paramMap.get('pgId');
    if (paramMapValue !== null) {
    this.pgId = +paramMapValue;
    this.getPgDetails();
  }
}

getPgDetails() {
  this.pgownerservice.getApprovedPGs(this.pgId).subscribe(
    response => {
      this.pg = response;
    },
    error => {
      console.error('Error fetching PG details', error);
    }
  );
}

editPg() {
  this.router.navigate(['/edit-pg', this.pgId]); // Navigate to edit page
}

deletePg(){
  if (confirm('Are you sure you want to delete this PG?')) {
    this.pgownerservice.deletePG(this.pgId).subscribe(
      () => {
        alert('PG deleted successfully!');
        this.router.navigate(['/pg-list']); // Navigate to PG list or appropriate route
      },
      (error) => {
        console.error('Error deleting PG:', error);
        alert('Failed to delete PG. Please try again later.');
      }
    );
  }
}
}
