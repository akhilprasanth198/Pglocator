import { Component, inject, OnInit } from '@angular/core';
import { PgownerService } from '../../services/pgowner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pg } from '../../Models/Pg';
import { PG } from '../../Models/pglist';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-pg',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './edit-pg.component.html',
  styleUrl: './edit-pg.component.css'
})
export class EditPgComponent implements OnInit {
  pgId: number | null = null;
  pgDetails: PG | null = null;
  pgownerService = inject(PgownerService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pgId = Number(params['pgId']); // Get the PG ID from route params
      if (!isNaN(this.pgId)) {
        this.loadPgDetails(this.pgId);
      }
    });
  }

  // Load the PG details using the service
  loadPgDetails(pgId: number): void {
    this.pgownerService.getPgById(pgId).subscribe(
      data => {
        this.pgDetails = data;
      },
      error => {
        console.error(`Error fetching PG details: ${error}`);
      }
    );
  }

  // Submit the updated PG details
  onSubmit(): void {
    if (this.pgDetails && this.pgId) {
      this.pgownerService.updatePG(this.pgId, this.pgDetails).subscribe(
        response => {
          console.log('PG updated successfully:', response);
          this.router.navigate(['/pg-list']); // Navigate back to the PG list after update
        },
        error => {
          console.error('Error updating PG:', error);
        }
      );
    }
  }

  // Cancel editing and navigate back to the PG list
  cancel(): void {
    this.router.navigate(['/pg-list']);
  }
}