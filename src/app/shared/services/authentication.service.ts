import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UtlisService } from '../../shared/services/utlis.service'
import { SecureSessionStorageService } from '../../shared/services/secure-session-storage.service';
import { map } from 'rxjs/operators';
import { Subject, of, from } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import{App_CONSTANT} from'../constants/app-constant'

export interface User {
  "username": string,
  "id_token": string

}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getLoggedInName = new Subject(); //Alternate method to Emitting data across Components. Subject() is doing both Emitting data and Subscribing it in another component. So its the best way to compare with Emitting using Output.
  public errorMessages = new Subject()
  public errorShowLogin = false;
  public errorMsg = false
  public userdata: any
  constructor(private router: Router, private http: HttpClient, private utlisService: UtlisService, private secureSession: SecureSessionStorageService) { }

  loggedIn(body) {
    const url = this.utlisService.linkGeneration(environment.userJwtController, environment.userJwtController.authorize)
    const httpHeaders = {
      headers: new HttpHeaders({
        "Auth": "my Auth",
      })
    }
    body.rememberMe = false
    return this.http.post<User>(url, body, httpHeaders).pipe(
      map(user => {
        this.userdata = user
        this.secureSession.set('token', user.id_token)
        this.secureSession.set('username', user.username)
        return user

      })
    )
  }

  storeData(logiData) {
    //next() method is alternate to emit().
    this.loggedIn(logiData).subscribe(
      (data) => {
        // this.getLoggedInName.next(logiData);
        // this.isUserLoggedIn.next(true);
        console.log("login sucssesfully")
        this.router.navigate([App_CONSTANT.DASHBOARD])
      },
      (error) => {
        //  this.errorShowLogin = true;
        //  this.errorMsg = error.error;
        this.errorMessages.next(error)
      }
    )
  }


  async isLoggedIn() {
    let token = sessionStorage.getItem('token');
    if (token !== null) {
      this.isUserLoggedIn.next(true);
      console.log("logidin=====" + this.isUserLoggedIn.next(true))
      return true
    }
    return false
  }
  logout(): void {
    this.getLoggedInName.next('login');
    this.secureSession.clear();
    this.router.navigate([App_CONSTANT.LOGOUT])
  }
}
