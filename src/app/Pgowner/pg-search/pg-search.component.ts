import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pg-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pg-search.component.html',
  styleUrl: './pg-search.component.css'
})
export class PgSearchComponent {
place: any;
district: any;

onSearch(){

}
}
