import { Component, OnInit } from '@angular/core';
import { UserManagmentService } from '../../shared/services/user-managment.service'
import { UserManagmentComponent } from '../user-managment.component';
import { User } from '../../shared/constants/user-model'
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  providers: [UserManagmentComponent]
})
export class ViewUserComponent implements OnInit {
  public userDetails: any
  public login: any;
  public nameL = "my name is...."
  public role: any = 'default';
  constructor(private userService: UserManagmentService) { }

   async ngOnInit() {
    this.role = 'rgdhfg '
    await this.userService.currentUser.subscribe(
      (loginName) => {
        // console.log("login name=====" + JSON.stringify(loginName))
        this.userDetails = loginName;
    
      }
    )
  }
  cancel(){
    window.history.back();
  }
}
