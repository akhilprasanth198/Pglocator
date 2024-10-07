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
import { PrivacyComponent } from './Home/privacy/privacy.component';
import { OwnerActionComponent } from './admin/owner-action/owner-action.component';
import { ViewOwnerComponent } from './admin/view-owner/view-owner.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminTopbarComponent } from './admin/admin-topbar/admin-topbar.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { PoliciesComponent } from './Home/policies/policies.component';
import { ViewPgComponent } from './Pgowner/view-pg/view-pg.component';
import { ViewdetailsPgComponent } from './Pgowner/viewdetails-pg/viewdetails-pg.component';
import { RegisterPgComponent } from './Pgowner/register-pg/register-pg.component';
import { ViewBannedUserComponent } from './admin/view-banned-user/view-banned-user.component';
import { ViewActiveUserComponent } from './admin/view-active-user/view-active-user.component';

import { ViewApprovedOwnerComponent } from './admin/view-approvedowner/view-approvedowner.component';
import { AddMediaComponent } from './Pgowner/add-media/add-media.component';

export const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomepageComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'login',component:LoginComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'view-owner',component:ViewOwnerComponent},
    {path:'view-user',component:ViewUsersComponent},
    {path:'owner-action',component:OwnerActionComponent},
    {path:'view-approved',component:ViewApprovedOwnerComponent},
    {path:'view-banned-user',component:ViewBannedUserComponent},
    {path:'view-active-user',component:ViewActiveUserComponent},

    {path:'registration',component:RegistrationComponent},
    {path:'policies',component:PoliciesComponent,
        children:[
            {path:'policy',component:PolicyComponent},
            {path:'privacy',component:PrivacyComponent},
        ]
    },
    // Admin routes
    {path:'admin-dashboard',component:AdminDashboardComponent,
        children:[
            {path:'admin-navbar',component:AdminNavbarComponent,
                children:[
                    
                    {path:'view-owner',component:ViewOwnerComponent},
                    {path:'pg-search',component:PgsearchComponent},
                    {path:'owner-action',component:OwnerActionComponent},
                    {path:'view-approved',component:ViewApprovedOwnerComponent},
                    {path:'view-banned-user',component:ViewBannedUserComponent},
                    {path:'view-active-user',component:ViewActiveUserComponent},
                
                ]
            }
        ]
    },
    // PG Owner routes
    {path: 'pgowner-navbar', component: PgownerNavbarComponent,
        children: [
            {path:'view-pg',component:ViewPgComponent},
            {path:'add-media',component:AddMediaComponent},
            // Add PG owner-specific routes here when needed
        ]
    },
    {path:'viewdetails-pg',component:ViewdetailsPgComponent},
    {path:'add-pg',component:RegisterPgComponent},
    // User routes
    {path:'user-dashboard',component:UserDashboardComponent,
        children:[
            {
                path: 'user-navbar', component: UserNavbarComponent,
                children: [
                    // {path:'pg-search',component:PgsearchComponent},
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
