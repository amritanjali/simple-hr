import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SecureSessionStorageService } from '../shared/services/secure-session-storage.service'
import { AuthenticationService } from '../shared/services/authentication.service'
import { Router } from '@angular/router'
import { UserAccountService } from '../shared/services/user-account.service'
import{Authhorities} from '../shared/services/user-roles';

@Component({
  selector: 'app-headres',
  templateUrl: './headres.component.html',
  styleUrls: ['./headres.component.scss']
})
export class HeadresComponent implements OnInit {
  
  public userLoggedInTabs: boolean
  public userDetail: any;
  public userDetailShow = false;
  public AdminTAbs = false;
  public profileShow = false;
  // public authorities = {
  //   "admin": "ROLE_ADMIN",
  //   "user": "ROLE_USER"
  // }


  constructor(private translator: TranslateService, private sessionStorage: SecureSessionStorageService,
    private auth: AuthenticationService, private router: Router, private userAccount: UserAccountService) { }

     ngOnInit() {
     if(this.auth.isLoggedIn()) {
     this.auth.isUserLoggedIn.subscribe(value => {
      this.userLoggedInTabs = value;
      console.log("tabs val" + this.userLoggedInTabs)
   
      this.userAccount.getAccountDetails().subscribe(
        (data) => {
          this.userDetailShow = true;
          this.userDetail = data;
          console.log("username headres=====" + this.userDetail.firstName)
          if (this.userDetail.authorities == Authhorities.admin) {
            this.AdminTAbs = value;
            console.log("new added Authoritiesssssssss" + Authhorities.admin)
          }
          if (this.userDetail.authorities == Authhorities.user) {
            this.AdminTAbs = false
          }
          // if(this.userDetail.authorities == Authhorities.admin&&this.userDetail.authorities == Authhorities.user){
          //   this.AdminTAbs = true;
          //   console.log( "authorityies")
          // }
        }
      ),
      (error)=>{
          console.log("get account issue")
      }
    });
  }
    // this.auth.getLoggedInName.subscribe((name) => {
    //   this.userLoggedInTabs = true;
    //   console.log("subject  emitter" + this.userName.username)
    // }
    // );


  }
  LangHindi() {
    this.translator.setDefaultLang('hi')
    this.sessionStorage.set('lang', 'hi')
  }

  logoutClick() {
    this.auth.logout()
    this.userLoggedInTabs = false;

  }
  imageUpload(event) {
    let file = event.target.files[0];
    console.log("upload imgae obje " + file)
    console.log("clicking image upload")
    // this.userAccount.setImage()
  }
  profile(){
    this.profileShow = true
  }
}
