import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{SignupComponent} from'./signup/signup.component';
import{LoginComponent} from'./login/login.component'
import{UserManagmentComponent} from'./user-managment/user-managment.component'
import{HeadresComponent} from './headres/headres.component';
import{DashboardComponent} from'./dashboard/dashboard.component'
const routes: Routes = [
 
  // {path:'',  redirectTo:'home',pathMatch: 'full'},
  // {path:'', component:DashboardComponent, outlet: 'navbar'},
  // {path:'', component:HomeComponent,
  // children: [
  //   {path: "signup", component:SignupComponent, pathMatch: 'full'},
  //   {path: "login", component:LoginComponent, pathMatch: 'full'},
  //   {path: "users", component:UserManagmentComponent, pathMatch: 'full'},
  
   
  //   ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
