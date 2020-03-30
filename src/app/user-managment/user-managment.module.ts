import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ViewUserComponent} from './view-user/view-user.component';
import { UserManagmentRoutingModule } from './user-managment-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import{UserManagmentComponent } from './user-managment.component';
import { UserRouterComponent } from './user-router.component';
import{ReactiveFormsModule} from'@angular/forms'
import { FormsModule } from '@angular/forms';
import {ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{AuthGaurdGuard} from '../shared/services/auth-gaurd.guard'


@NgModule({
  declarations: [UserManagmentComponent, EditUserComponent, DeleteUserComponent, ViewUserComponent, UserRouterComponent],
  imports: [
    CommonModule,
    UserManagmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot({
    //   timeOut: 3000,
    //   positionClass: 'top-right',
    //   preventDuplicates: true,
    // }),
  ],
  providers:[AuthGaurdGuard]
})
export class UserManagmentModule { }
