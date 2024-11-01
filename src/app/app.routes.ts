import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { OwnerActionComponent } from './admin/owner-action/owner-action.component';
import { PendingPgDetailsComponent } from './admin/pending-pg-details/pending-pg-details.component';
import { ViewActiveUserComponent } from './admin/view-active-user/view-active-user.component';
import { ViewApprovedOwnerComponent } from './admin/view-approvedowner/view-approvedowner.component';
import { ViewApprovedpgComponent } from './admin/view-approvedpg/view-approvedpg.component';
import { ViewBannedUserComponent } from './admin/view-banned-user/view-banned-user.component';

import { ViewPendingPgComponent } from './admin/view-pending-pg/view-pending-pg.component';

import { AboutComponent } from './Home/about/about.component';
import { ContactComponent } from './Home/contact/contact.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { LoginComponent } from './Home/login/login.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { PgsearchDashboardComponent } from './Home/pgsearch-dashboard/pgsearch-dashboard.component';
import { PoliciesComponent } from './Home/policies/policies.component';
import { PolicyComponent } from './Home/policies/policy/policy.component';
import { PrivacyComponent } from './Home/policies/privacy/privacy.component';
import { RegistrationComponent } from './Home/registration/registration.component';
import { AddRoomComponent } from './Pgowner/add-room/add-room.component';
import { EditPgComponent } from './Pgowner/edit-pg/edit-pg.component';
import { PgownerNavbarComponent } from './Pgowner/pgowner-navbar/pgowner-navbar.component';
import { RegisterPgComponent } from './Pgowner/register-pg/register-pg.component';
import { ViewPgComponent } from './Pgowner/view-pg/view-pg.component';
import { ViewdetailsPgComponent } from './Pgowner/viewdetails-pg/viewdetails-pg.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { UserpglistComponent } from './User/userpglist/userpglist.component';
import { ViewDetailsPgUserComponent } from './User/view-details-pg-user/view-details-pg-user.component';
import { EditRoomComponent } from './Pgowner/edit-room/edit-room.component';
import { ReviewComponent } from './Pgowner/review/review.component';
import { MediaPgownerComponent } from './Pgowner/media-pgowner/media-pgowner.component';
import { PgownerProfileComponent } from './Pgowner/pgowner-profile/pgowner-profile.component';
import { PgdetailsComponent } from './admin/pgdetails/pgdetails.component';
import { ViewcontactComponent } from './admin/viewcontact/viewcontact.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';




export const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomepageComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'login',component:LoginComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'pgsearch-dash',component:PgsearchDashboardComponent},
    {path:'policies',component:PoliciesComponent,
        children:[
            {path:'policy',component:PolicyComponent},
            {path:'privacy',component:PrivacyComponent},
        ]
    },
    {path:'registration',component:RegistrationComponent},

    {path :'view-userpglist',component:UserpglistComponent},
    

    // Admin routes
    {path:'admin-navbar',component:AdminNavbarComponent,
                children:[
                    {path:'owner-action',component:OwnerActionComponent},
                    {path:'view-approved',component:ViewApprovedOwnerComponent},
                    {path:'view-active-user',component:ViewActiveUserComponent},
                    {path:'view-banned-user',component:ViewBannedUserComponent},
                   
                    {path:'view-pending-pg',component:ViewPendingPgComponent,},
                    {path:'approved-pg',component:ViewApprovedpgComponent},
                    {path:'pgdetails/:pgid',component:PgdetailsComponent},
                    {path:'viewcontact',component:ViewcontactComponent},
                    {path:'Admin-profile/:user.role',component:AdminprofileComponent} 

                ]
    },
    

    // PG Owner routes 
    {path: 'pgowner-navbar', component: PgownerNavbarComponent,
        children: [
            {path:'view-pg/:pgId',component:ViewPgComponent}, 
            {path:'pgowner-profile/:user.role',component:PgownerProfileComponent}           
        ]
    },
    { path: 'viewdetails-pg/:pgId', component: ViewdetailsPgComponent }, 
    {path:'media-pgowner/:pgId',component:MediaPgownerComponent},
    {path:'edit-pg/:id',component:EditPgComponent},
    {path:'add-pg',component:RegisterPgComponent},
    {path:'pending-pg-details/:pgId',component:PendingPgDetailsComponent},
    { path: 'add-room/:pgid', component: AddRoomComponent },
    {path: 'edit-room/:roomId',component: EditRoomComponent},

    // User routes
            {path: 'user-navbar', component: UserNavbarComponent,
                children: [
                    { path: 'user-profile/:user.role', component: UserProfileComponent },
                ]
            },
    {path:'view-details-pg-user/:pgId',component:ViewDetailsPgUserComponent},
    {path:'userpglist',component:UserpglistComponent},
    {path:'review/:pgid/:uid',component:ReviewComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
