import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import{AuthenticationService} from '../shared/services/authentication.service';
import { SecureSessionStorageService } from '../shared/services/secure-session-storage.service';
import{Router} from '@angular/router';
import{DOCUMENT}from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public loginsubmitted = false
loginForm:FormGroup;
public userdata: any;
public errorShowLogin = false;
public errorMsg: any
  constructor(private formBuilder:FormBuilder, private auth:AuthenticationService, private secureSession:SecureSessionStorageService, private router:Router, 
    @Inject(DOCUMENT) private _document: Document) 
  { }

  ngOnInit() {
    this.auth.errorMessages.subscribe((error)=>{
      this.errorShowLogin = true;
      this.errorMsg= error;
      // console.log("error==" + this.errorMsg.error.detail)
    })
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password:['', Validators.required, Validators.minLength[6]]
    })
  }

get g(){
  return this.loginForm.controls
}
loginSubmit(){

  this.auth.storeData(this.loginForm.value)
  // this.auth.errorShowLogin;

  console.log("error msg" + this.errorMsg)
  // .subscribe(
  //   (data)=>{
  //     console.log("login sucssesfully")
  //     // this._document.defaultView.location.reload();
  //     this.router.navigate(['home/dashboard'])
  //  },
  //  (error)=>{
  //   this.errorShowLogin = true;
  //         this.errorMsg = error.error
  //       }
  //  )
}
}
 