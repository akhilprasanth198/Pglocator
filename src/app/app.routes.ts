import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { LoginComponent } from './Home/login/login.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { AboutComponent } from './Home/about/about.component';
import { ContactComponent } from './Home/contact/contact.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { PgsearchComponent } from './Home/pgsearch/pgsearch.component';
import { PgownerNavbarComponent } from './Pgowner/pgowner-navbar/pgowner-navbar.component';
import { PolicyComponent } from './Home/policies/policy/policy.component';
import { PrivacyComponent } from './Home/policies/privacy/privacy.component';
import { OwnerActionComponent } from './admin/owner-action/owner-action.component';
import { ViewOwnerComponent } from './admin/view-owner/view-owner.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
<<<<<<< HEAD
import { RegistrationComponent } from './registration/registration.component';
import { PoliciesComponent } from './Home/policies/policies.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
=======
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminTopbarComponent } from './admin/admin-topbar/admin-topbar.component';
<<<<<<< HEAD
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { PoliciesComponent } from './Home/policies/policies.component';
=======
>>>>>>> 32fc641dfaeb3b7e3692b835696333e65d7fa36b

>>>>>>> 447135556af359ddf56b356be49fa1850713064f
export const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomepageComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'login',component:LoginComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'view-owner',component:ViewOwnerComponent},
    {path:'view-user',component:ViewUsersComponent}
    {path:'registration',component:RegistrationComponent},
    {path:'admin-navbar',component:AdminNavbarComponent,
    {path:'policies',component:PoliciesComponent,
        children:[
            {path:'policy',component:PolicyComponent},
            {path:'privacy',component:PrivacyComponent},
        ]
    },
    
    
    // {path:'admin-dashboard',component:AdminDashboardComponent,
    //     children:[
            {path:'admin-navbar',component:AdminNavbarComponent,
                children:[
                    {path:'owner-action',component:OwnerActionComponent},
                    {path:'view-owner',component:ViewOwnerComponent},
                    {path:'pg-search',component:PgsearchComponent},
                ]
            },
    //     ]
    // },
    

    // PG Owner routes
    {path: 'pg-navbar', component: PgownerNavbarComponent,
        children: [
            // Add PG owner-specific routes here when needed
        ]
    },

    // User routes
    {path:'user-dashboard',component:UserDashboardComponent,
        children:[
            {
                path: 'user-navbar', component: UserNavbarComponent,
                children: [
                    { path: 'user-profile', component: UserProfileComponent },
                ]
            }
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
