import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pglocator';
  isDashboardRoute = false;
  isNavlogRoute = false;
  // constructor(private router: Router) {
  //   this.router.events.subscribe((event: any) => {
  //     if (event.url) {
  //       // Update this condition based on your actual dashboard routes
  //       this.isDashboardRoute = event.url.includes('/admin') || event.url.includes('/user');
  //     }
  //     if (event && event['url']) {
  //       this.isNavlogRoute = event.url.includes('/book-search') || event.url.includes('/user-search') || event.url.includes('/add-book');
  //     }
  //     if (event && event['url']) {
  //       this.isNavlogRoute = event.url.includes('/book-search') || event.url.includes('/borrow') || event.url.includes('/user-details');
  //     }

  //   });
  // }
}
