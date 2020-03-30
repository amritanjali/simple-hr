import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import{UserAccountService} from '../shared/services/user-account.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../shared/services/authentication.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public loginsubmitted = false
  changePassForm:FormGroup;
  public successfullyChanged= false;
  public forgotPassword= true;
  constructor(private authService:AuthenticationService, private formBuilder:FormBuilder, private userService:UserAccountService, private toasterService:ToastrService) { }

  ngOnInit() {
    this.changePassForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]],
      currentPassword:['', Validators.required, Validators.minLength[6]]
    })
  }

  get g(){
    return this. changePassForm.controls
  }
  changePassword(){
    
    this.loginsubmitted = true
    this.userService.changePassword(this.changePassForm.value).subscribe(
      (data)=>{
        this.toasterService.success("password changed successfully");
        this.successfullyChanged = true;
        this.forgotPassword = false;
      },
      (error)=>{
       
        this.toasterService.warning(error.error.title)
      }
    )
  }

  logout(){
    this.authService.logout();
  }
}
