import { Routes } from '@angular/router';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { LoginComponent } from './Home/login/login.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { AboutComponent } from './Home/about/about.component';
import { ContactComponent } from './Home/contact/contact.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { PgSearchComponent } from './Pgowner/pg-search/pg-search.component';
import { PgownerNavbarComponent } from './Pgowner/pgowner-navbar/pgowner-navbar.component';
import { PolicyComponent } from './Home/policy/policy.component';
import { PrivacyComponent } from './Home/privacy/privacy.component';
import { OwnerActionComponent } from './admin/owner-action/owner-action.component';
import { ViewOwnerComponent } from './admin/view-owner/view-owner.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminTopbarComponent } from './admin/admin-topbar/admin-topbar.component';

export const routes: Routes = [
    // Redirect root URL to home
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    // Home-related routes
    { path: 'home', component: HomepageComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'policy', component: PolicyComponent },
    { path: 'privacy', component: PrivacyComponent },

    // Admin routes
    {
        path: 'admin-navbar', component: AdminNavbarComponent,
        children: [
            { path: 'owner-action', component: OwnerActionComponent },
            { path: 'view-owner', component: ViewOwnerComponent },
            { path: 'pg-search', component: PgSearchComponent },
            { path: 'view-users', component: ViewUsersComponent },
        ]
    },

    // PG Owner routes
    {
        path: 'pg-navbar', component: PgownerNavbarComponent,
        children: [
            // Add PG owner-specific routes here when needed
        ]
    },

    // User routes
    {
        path: 'user-navbar', component: UserNavbarComponent,
        children: [
            { path: 'user-profile', component: UserProfileComponent },
        ]
    }
];
