import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { LoginComponent } from './Home/login/login.component';
import { UserNavbarComponent } from './User/user-navbar/user-navbar.component';
import { AboutComponent } from './Home/about/about.component';
import { ContactComponent } from './Home/contact/contact.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { PgSearchComponent } from './Pgowner/pg-search/pg-search.component';
import { PgownerNavbarComponent } from './Pgowner/pgowner-navbar/pgowner-navbar.component';
import { OwnerActionComponent } from './admin/owner-action/owner-action.component';
import { ViewOwnerComponent } from './admin/view-owner/view-owner.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomepageComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'login',component:LoginComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'owner-action',component:OwnerActionComponent},
    {path:'view-owner',component:ViewOwnerComponent},
    {path:'view-user',component:ViewUsersComponent},
    {path:'registration',component:RegistrationComponent},
    
    {path:'admin-navbar',component:AdminNavbarComponent,
        children:[
            {path:'pg-search',component:PgSearchComponent},
        ]
    },
    {path:'pg-navbar',component:PgownerNavbarComponent,
        children:[

        ]
    },
    {path:'user-navbar',component:UserNavbarComponent,
        children:[
            {path:'user-profile',component:UserProfileComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
