import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserAccountService } from '../shared/services/user-account.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { SecureSessionStorageService } from '../shared/services/secure-session-storage.service'


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settingForm: FormGroup;
  public submitted = false;
  public userdetails: any;
  public SelectLang;
  public updateBody: any;
  public account;
  public updateSuccess= false
  public langObj =[
    {"value": "en", 
    "label": "English"
    },
    {"value": "hi", 
    "label": "Hindi"
    }
  ]
  constructor(private formBuilder: FormBuilder, private userAccount: UserAccountService, 
    private translateService:TranslateService, private secureStorage:SecureSessionStorageService) { }

  ngOnInit() {
    this.userAccount.getAccountDetails().subscribe(
      (data) => {
        this.userdetails = data;
        if(data){
          this.settingForm.patchValue({
            firstName: this.g.firstName.value,
            lastName: this.g.lastName.value,
            email: this.g.email.value,
            langKey: this.g.langKey.value
          })
         this.account = data
        }
      }
     
    )
    this.settingForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      langKey:['', [Validators.required]]
    })
  }
  get g (){
    return this.settingForm.controls
  }
  submit() {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      // this.account.langKey = event.lang
      console.log(this.account.langKey)
  });
    console.log(this.account.langkey)
    console.log(this.account.firstName)
    this.userAccount.setAccountDetails(this.account).subscribe(
      (data) => { 
        this.submitted =true;
        this.updateSuccess= true;
        // if (this.account.langKey !== this.secureStorage.get('langkey')) {
        //   this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        //     this.account.langKey = event.lang
        //     console.log(this.account.langKey)
        // });
        // }
      }
    )
  }

  langSelect(lang){
    this.settingForm.get('langKey').setValue(lang);
    console.log("lag selected" +   this.g.langKey.value)
  }
}
