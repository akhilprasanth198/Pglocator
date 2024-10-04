import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PgownerService } from '../../services/pgowner.service';
import { PG } from '../../Models/pglist';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-view-pg',
  standalone: true,
  imports: [NgFor],
  templateUrl: './view-pg.component.html',
  styleUrl: './view-pg.component.css'
})
export class ViewPgComponent implements OnInit {
  router=inject(Router)
  pgownerservice=inject(PgownerService);
  pgs: PG[] = []; // Array to store the PGs
  ownerId: number = 1; // Replace with dynamic owner ID if available

  ngOnInit(): void {
    this.getPGs();
  }

  // Fetch all PGs for the owner
  getPGs(): void {
    this.pgownerservice.getPGsByOwner(this.ownerId).subscribe(
      (response: PG[]) => {
        this.pgs = response;
      },
      (error) => {
        console.error('Error fetching PGs:', error);
      }
    );
  }

  // View details of a PG
  viewPGDetails(pgId: number): void {
    // Here you could route to another page or open a modal with PG details
    console.log(`View PG details for ID: ${pgId}`);
  }

  view():void{
    this.router.navigateByUrl("/viewdetails-pg");

  }
  addPG():void{
    this.router.navigateByUrl("/add-pg");


  }
}