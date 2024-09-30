import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { OwnerActionComponent } from './admin/owner-action/owner-action.component';
import { PgSearchComponent } from './pg-search/pg-search.component';
import { ViewOwnerComponent } from './admin/view-owner/view-owner.component';
export const routes: Routes = [
    {path:'',redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomepageComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'login',component:LoginComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'owner-action',component:OwnerActionComponent},
    {path:'view-owner',component:ViewOwnerComponent},
    
];
