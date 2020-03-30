import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  errorShow = false;
  public confirmPasswordError = false
  public errorMsg: any;
  public signupDoneMsg;
  public signupScree= true;
  constructor(private formBuilder: FormBuilder, private signupService: SignupService) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      Cpassword: ['', [Validators.required,]],
    
    })
  }
  get g() {
    return this.signupForm.controls
  }
  signup() {
    this.submitted = true;
    if (this.g.password.value != this.g.Cpassword.value) {
      this.confirmPasswordError = true
    }
    if (this.g.password.value === this.g.Cpassword.value && this.signupForm.valid) {
      this.signupService.signupApi(this.signupForm.value).subscribe(
        (data) => {
          this.signupDoneMsg = true;
          this.signupScree = false;
          // this.signupForm.reset()

          // console.log("rest")
        },
        (error) => {
          this.errorShow = true;
          this.errorMsg = error.error
          console.log("error" + error.error.title)
        }
      )
    }
  }


}
