
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './../home/home.component';
import{SignupComponent} from'./../signup/signup.component';
import{LoginComponent} from'./../login/login.component'
import{UserManagmentComponent} from'./../user-managment/user-managment.component'
import{HeadresComponent} from './../headres/headres.component';
import{DashboardComponent} from'./../dashboard/dashboard.component';
import{SettingComponent} from './../setting/setting.component';
import{UserManagmentModule} from './../user-managment/user-managment.module';
import{ChangePasswordComponent} from './../change-password/change-password.component';
import{AuthGaurdGuard} from '../shared/services/auth-gaurd.guard'
const routes: Routes = [
 
  {path:'',  redirectTo:'home',pathMatch: 'full'},
  {path:'', component:HeadresComponent, pathMatch: 'full'},
  // {path:'home', component:HomeComponent, pathMatch: 'full'},
  {path:'home', component:HomeComponent,
  children: [
    {path: "signup", component:SignupComponent, pathMatch: 'full'},
    {path: "login", component:LoginComponent, pathMatch: 'full'},
    {path: "users",
    // loadChildren:'./../user-managment/user-managment.module#UserManagmentModule',
    loadChildren: () => import('./../user-managment/user-managment.module').then(m => m.UserManagmentModule), canActivate: [AuthGaurdGuard] 
  },
    {path: "dashboard", component:DashboardComponent, pathMatch: 'full'},
    {path:'setting', component:SettingComponent, pathMatch: 'full',  canActivate: [AuthGaurdGuard]},
    {path:'change-password', component:ChangePasswordComponent, pathMatch: 'full', canActivate: [AuthGaurdGuard] }
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
// export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
