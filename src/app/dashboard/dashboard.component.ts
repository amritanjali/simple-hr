import { Component, OnInit } from '@angular/core';
import{SecureSessionStorageService} from '../shared/services/secure-session-storage.service'
import {AuthenticationService} from '../shared/services/authentication.service'
import{Router} from'@angular/router'
import{UserAccountService} from'../shared/services/user-account.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public userDeatils: any;
public authenticated = false;
public covidDetails: any;
public covidNumb: any
public covidDetailsAll: any;
public covidNumbAll: any
  constructor( private sessionStorage:SecureSessionStorageService,
    private auth:AuthenticationService, private router:Router, private userAccount:UserAccountService) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.userAccount.getAccountDetails().subscribe(
        (data)=>{
          this.userDeatils = data;
          this.authenticated = true;
        }
      )
  
    }
    // console.log(   this.userDeatils + "dagvhord testinggg")
    this.userAccount.covid19().subscribe(
      (res)=>{
        console.log("covid data=====>")
        this.covidDetails =  res
        this.covidNumb = this.covidDetails.response
        // console.log("covid data" +  this.covidDetails.data.covid19Stats[0].city);
      },
      (error)=>{
        console.log(error)
      }
    )

    this.userAccount.covid19All().subscribe(
      (res)=>{
        console.log("covid data=====>")
        this.covidDetailsAll =  res
        this.covidNumbAll = this.covidDetailsAll.response
        // console.log("covid data" +  this.covidDetailsAll.data.covid19Stats[0].city);
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
