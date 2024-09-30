import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PgSearchComponent } from './pg-search/pg-search.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { PgNavbarComponent } from './pg-navbar/pg-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OwnerActionComponent } from './admin/owner-action/owner-action.component';
import { ViewOwnerComponent } from './admin/view-owner/view-owner.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { PgownerRegisterComponent } from './pgowner-register/pgowner-register.component';
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
    {path:'register',component:PgownerRegisterComponent},
    
    {path:'admin-navbar',component:AdminNavbarComponent,
        children:[
            {path:'pg-search',component:PgSearchComponent},
        ]
    },
    {path:'pg-navbar',component:PgNavbarComponent,
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
