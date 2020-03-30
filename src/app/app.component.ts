import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SecureSessionStorageService } from './shared/services/secure-session-storage.service';
import{UserAccountService} from './shared/services/user-account.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'simple-hr';
  public dataLang
  constructor(private translator: TranslateService, private sessionStorage: SecureSessionStorageService, private userService:UserAccountService) {
    this.translator.addLangs(['en', 'hi'])
    this.translator.setDefaultLang('en')
    this.sessionStorage.set('lang', 'en')



    }
    ngOnInit() {
      if(sessionStorage.getItem('token')){
        this.userService.getAccountDetails().subscribe(
          (data)=>{
              this.dataLang = data;
              this.translator.setDefaultLang(this.dataLang.langKey)
              console.log("app kcalling")
          }
        )
      }
    }
  }
  

