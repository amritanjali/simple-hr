import { Component, OnInit } from '@angular/core';
import { UserManagmentService } from '../shared/services/user-managment.service';
import { Router } from '@angular/router';
import { App_CONSTANT } from '../shared/constants/app-constant';
// import{BehaviorSubject} from 'rxjs'
import { UserAccountService } from '../shared/services/user-account.service';
import { ToastrService } from 'ngx-toastr';
import{AuthhoritiesUser}    from'../shared/services/user-roles'
@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss']
})
export class UserManagmentComponent implements OnInit {
  public userAuthorities:any=AuthhoritiesUser;
  public userRole
  public usersData: any = []
  public activate = false
  public deactivate = false;
  public ActivateUser = true;
  public updateInfo: any;
  public userDataDetails = true;
  public activated = false;
  public errorShow = false;
  public errorMsg: any;
  public createdUserMsg = false;
  public loginName: any;
  public selectedFunction: any;;
  public slectedLang: object= {}
  // public slectedLang: any;
  public userLang = [
    { 'label': 'English', 'value': 'en' },
    { 'label': 'Hindi', 'value': 'hi' },
  ]
  public paginationList = [
    { 'pageNumber': 0, 'pageName': 1 },
    { 'pageNumber': 1, 'pageName': 2 },
    { 'pageNumber': 2, 'pageName': 3 },
    { 'pageNumber': 3, 'pageName': 4 }
  ]

  constructor(private usermanagmentService: UserManagmentService, private router: Router,
    private userAccService: UserAccountService, private toastrService: ToastrService) { }

  ngOnInit() {
    let pageNumbe = 0
    this.usermanagmentService.pagination(pageNumbe).subscribe(
      (data) => {

        this.usersData = data;
        console.log(this.usersData)
      }
    )
  }
  langSelected(lang) {
  //  let eV= document.getElementById("selectLang")[0].value()
    this.selectedFunction = lang;
    console.log( this.selectedFunction)

  }
  activateUser(user, isActvated) {
    user.activated = isActvated
    console.log(this.ActivateUser)
    this.usermanagmentService.getActivatedUsers(user).subscribe(
      // (data)=>{console.log("wertyui")}
    )
  }

  viewUser(userdata) {
    // this.router.navigate([App_CONSTANT.VIEW_USER])
    this.router.navigate([App_CONSTANT.VIEW_USER, userdata.login])
    // this.router.navigate([`home/users/active/view-user/${userdata.id}`]);

    this.usermanagmentService.getCurrentRegisterUser(userdata, userdata.login)
      .subscribe(
        (data) => {
          // console.log("cureen user data" + JSON.stringify(data))
        }
      );

  }
  editUser(editUserData) {
    this.router.navigate([App_CONSTANT.EDIT_USER, editUserData.login])
    this.usermanagmentService.getCurrentRegisterUser(editUserData, editUserData.login).subscribe(
      (data) => {
        console.log("edit user-==" + data)
      }
    )
  }

  createUser() {
    this.userDataDetails = false
  }
  activatedUser(event) {
    if (event.target.checked) {
      this.activated = true
      console.log(this.activated)
    }
    else {
      this.activated = false
      console.log(this.activated)
    }
  }
  backBtn() {
    this.userDataDetails = true;
  }
  submit(login, firstName, lastName, email) {
    const user1 = {
      // "activated": false,// API value for this property is true always.
      "authorities":this.userRole,
      "email": email,
      "firstName": firstName,
      "imageUrl": "string",
      "langKey": this.selectedFunction,
      "lastName": lastName,
      "login": login,
      "resetDate": "2020-03-13T07:46:02.290Z"
    }
    console.log(user1)
    this.usermanagmentService.createUser(user1).subscribe(
      (data) => {
        this.createdUserMsg = true;
        this.errorShow = false;
      },
      (error) => {
        console.log("error msg")
        this.errorShow = true;
        this.errorMsg = error.error
        this.createdUserMsg = false;
      }
    )

  }
  deletUser(users) {
    document.getElementById("myModal").style.display = "block";
    this.loginName = users
    // this.removeAPI(users)
  }
  ConfirmdeleteUser(login) {
    this.usermanagmentService.deleteUser(login).subscribe(
      (data) => {
        document.getElementById("myModal").style.display = "none";
        this.usermanagmentService.getAllRegisterUser().subscribe(
          (data) => {

            this.usersData = data;
            console.log(this.usersData)
          }
        )
      },
      (error) => {
        this.toastrService.warning(error.error.title)
      }
    )
  }

  close() {
    document.getElementById("myModal").style.display = "none";
  }
  page(pageNumber) {
    this.usermanagmentService.pagination(pageNumber).subscribe(
      (data) => {

        this.usersData = data;
        // console.log(this.usersData)
      }
    )
  }
  sorting() {
    let pageNumbe = 0
    this.usermanagmentService.desendingUserData(pageNumbe).subscribe(
      (data) => {

        this.usersData = data;
        // console.log(this.usersData)
      }
    )
  }
  selectRole(authorities){
    this.userRole = [authorities]
  }
}
