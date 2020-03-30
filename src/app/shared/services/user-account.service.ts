import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UtlisService } from '../../shared/services/utlis.service'
import { SecureSessionStorageService } from '../../shared/services/secure-session-storage.service';
import { Subject, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Account {
  activated: boolean,
  authorities: string[],
  email: string,
  firstName: string,
  langKey: string,
  lastName: string,
  login: string,
  imageUrl: string
}
@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  public getLoggedInName = new Subject(); //Alternate method to Emitting data across Components. Subject() is doing both Emitting data and Subscribing it in another component. So its the best way to compare with Emitting using Output.

  constructor(private http: HttpClient, private utlisService: UtlisService, private secureSession: SecureSessionStorageService) { }

  getAccountDetails() {
    const url = this.utlisService.linkGeneration(environment.accountResource, environment.accountResource.getAccount)
    const httpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + sessionStorage.getItem('token')
      })
    }

    return this.http.get<Account>(url, httpHeaders)
  }

  setImage(updateResource) {
    const url = this.utlisService.linkGeneration(environment.accountResource, environment.accountResource.getAccount)
    const httpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + sessionStorage.getItem('token')
      })
    }

    return this.http.patch<Account>(url, updateResource, httpHeaders)
  }

  setAccountDetails(body) {
    const url = this.utlisService.linkGeneration(environment.accountResource, environment.accountResource.getAccount)
    const httpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + sessionStorage.getItem('token')
      })
    }
    return this.http.post(url, body, httpHeaders)

  }

  changePassword(body){
    const url = this.utlisService.linkGeneration(environment.accountResource, environment.accountResource.changePassword)
    const httpHeaders = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + sessionStorage.getItem('token')
      })
    }
    return this.http.post(url, body, httpHeaders)
  }
  covid19(){
    const url = "https://covid-193.p.rapidapi.com/statistics?country=india"
    const httpHeaders = {
      headers: new HttpHeaders({
        // "Authorization": "Bearer " + sessionStorage.getItem('token')
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "8198e94074msh8413f51000c8dabp1b0d02jsn0b02f5ca124e"
      })
    }
    return this.http.get(url, httpHeaders)
    // .pipe(
    //   map((res:Response) => res.json().data)
    // )
      
  }
  covid19All(){
    const url = this.utlisService.linkGeneration1(environment.covid19)
    const httpHeaders = {
      headers: new HttpHeaders({
        // "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        // "x-rapidapi-key": "8198e94074msh8413f51000c8dabp1b0d02jsn0b02f5ca124e"
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
	"x-rapidapi-key": "8198e94074msh8413f51000c8dabp1b0d02jsn0b02f5ca124e"
      })
    }
    return this.http.get(url, httpHeaders)
    // .pipe(
    //   map((res:Response) => res.json().data)
    // )
      
  }

}
