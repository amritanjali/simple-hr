import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserManagmentService } from '../../shared/services/user-managment.service';
import { Authhorities } from '../../shared/services/user-roles'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public userDetails;
  public account;
  public authority;
  public userEditRole;
  public successMsg = false;
  public errorMsg = false;
  public errorStatus: any;
  public authorities=[];
  public userLang = [
    { value: 'hi', label: "Hindi" },
    { value: 'en', label: "English" }
  ]
  public userRoles = [
    { value: 'ROLE_USER', label: "user role" },
    { value: 'ROLE_ADMIN', label: "Admin role" }
  ]
  constructor(private userService: UserManagmentService, private toasterService: ToastrService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (data) => {
        this.userDetails = data;
      }
    )

    if (this.userDetails.activated == true) {
      document.getElementById('activated').setAttribute('checked', 'true')
    }
    if (this.userDetails.activated == false) {
      document.getElementById('activated').setAttribute('unchecked', 'false')
    }

    this.userService.getAuthorities().subscribe(
      (data) => {
        this.authority = data
      }
    )

  }

  activatedUser(event) {
    if (event.target.checked) {
      this.userDetails.activated = true
    }
    else {
      this.userDetails.activated = false
    }
  }
  roleSelected(role) {
    if (role == 'ROLE_USER') {
      this.userDetails.authorities = role
    }
    if (role == 'ROLE_ADMIN') {
      this.userDetails.authorities = role
    }

  }
  getauthority(roles) {
    console.log("athoriti")
    this.userEditRole = roles
    console.log("roles is " + this.userEditRole)
  }

  submit(data) {
  console.log(data)
    this.userService.getActivatedUsers(data).subscribe(
      (data) => {
        // console.log("dattttttttttttt" , this.account)
        this.toasterService.success("data edited successfully !!");
        this.successMsg = true;
        this.errorMsg = false;
      },
      (error) => {
        this.errorMsg = true;
        this.successMsg = false;
        this.errorStatus = error.error
        console.log("errro" + error.title)
        this.toasterService.error(error.error.title)
      }
    )
  }

  cancel() {
    window.history.back();
  }
  selectedLang(lang) {
    this.userDetails.langKey = lang
    //  console.log("selected lane" + this.userDetails.langKey)
  }
  selectedAuthority(authority){
    this.userDetails.authorities = [authority]
    // console.log(typeof authority)
    // console.log(typeof this.authorities)
    
  }
}
