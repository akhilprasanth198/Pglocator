import { Component } from '@angular/core';
import { UserNavbarComponent } from "../user-navbar/user-navbar.component";
import { AdminSidebarComponent } from "../../admin/admin-sidebar/admin-sidebar.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [UserNavbarComponent, AdminSidebarComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
