import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UserManagmentComponent} from './user-managment.component'
import{ViewUserComponent} from './view-user/view-user.component';
import{EditUserComponent} from './edit-user/edit-user.component';
import{DeleteUserComponent} from './delete-user/delete-user.component'
import{UserRouterComponent} from'./user-router.component'
import { from } from 'rxjs';

const userManagment: Routes = [
  // {path:'users-details', component:UserManagmentComponent, pathMatch:'full'},

    {path: 'active', component:UserRouterComponent,
    children:[
      {path:'usersdata', component:UserManagmentComponent, },
      {path: 'view/:login' , component: ViewUserComponent},
      {path:'edit/:login', component: EditUserComponent,},
      {path:'delete' , component:DeleteUserComponent}
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(userManagment)],
  exports: [RouterModule]
})
export class UserManagmentRoutingModule { }
