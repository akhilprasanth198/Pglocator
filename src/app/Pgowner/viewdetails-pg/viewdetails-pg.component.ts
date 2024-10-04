import { Component,inject, OnInit } from '@angular/core';
import { PG } from '../../Models/pglist';
import { ActivatedRoute, Router } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-viewdetails-pg',
  standalone: true,
  imports: [NgIf],
  templateUrl: './viewdetails-pg.component.html',
  styleUrl: './viewdetails-pg.component.css'
})
export class ViewdetailsPgComponent implements OnInit{
pg:PG|null=null;
router=inject(Router);
route=inject(ActivatedRoute)
pgownerservice=inject(PgownerService)
ngOnInit(): void {
  const pgId = this.route.snapshot.paramMap.get('id');
  if (pgId) {
    this.getPgDetails(+pgId);
  }
}

getPgDetails(id: number): void {
  this.pgownerservice.getPG(id).subscribe(
    (data: PG) => {
      this.pg = data;
    },
    (error:any) => {
      console.error('Error fetching PG details:', error);
    }
  );
}

editPg(id: number): void {
  this.router.navigate(['/edit-pg', id]); // Navigate to edit page
}

deletePg(id: number): void {
  if (confirm('Are you sure you want to delete this PG?')) {
    this.pgownerservice.deletePG(id).subscribe(
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
