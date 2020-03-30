import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UtlisService } from '../shared/services/utlis.service'
import { SecureSessionStorageService } from '../shared/services/secure-session-storage.service'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient, private utlisService: UtlisService, private sessionStorage: SecureSessionStorageService) { }
  signupApi(loginBody) {
    const url = this.utlisService.linkGeneration(environment.accountResource, environment.accountResource.registerAccount)
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
      })
    }
    const body = loginBody
    body.langKey = sessionStorage.getItem('lang')
    // const langStorage = this.sessionStorage.get('lang')
    // body.langKey = langStorage
    console.log(body.langKey)
    console.log("body===" + loginBody)
    return this.http.post(url, body, httpHeaders)
  }
}
