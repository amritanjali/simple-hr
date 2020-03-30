import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UtlisService } from '../../shared/services/utlis.service'
import { SecureSessionStorageService } from '../../shared/services/secure-session-storage.service';
import{BehaviorSubject, Subject} from 'rxjs'
import{ User} from '../constants/user-model'
@Injectable({
  providedIn: 'root'
})
export class UserManagmentService {
  public currentUser:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  // public currentUser= new Subject(); 
  constructor(private http:HttpClient, private utlisService: UtlisService, private secureSession:SecureSessionStorageService) { }
  getAllRegisterUser(){
    const url = this.utlisService.linkGeneration(environment.userResource, environment.userResource.getAllUsers)
    const httpHeadres = {
      headers: new HttpHeaders({
        "Authorization" : "Bearer " +  sessionStorage.getItem('token')
      })
    }
    console.log("token user" + this.secureSession.get('token'))
    return this.http.get(url, httpHeadres)
  }
  getActivatedUsers(body){
    const url = this.utlisService.linkGeneration(environment.userResource, environment.userResource.getAllUsers)
    const httpHeadres = {
      headers: new HttpHeaders({
        "Authorization" : "Bearer " +  sessionStorage.getItem('token')
      })
    }
    return this.http.put(url, body, httpHeadres)
  }

   getCurrentRegisterUser(loginName, login){
    let  url = this.utlisService.linkGeneration(environment.userResource, environment.userResource.currentUser);
    url= url.replace(':user', login)
        // console.log("current user url " + url)
    const httpHeadres = {
      headers: new HttpHeaders({
        "Authorization" : "Bearer " +  sessionStorage.getItem('token')
      })
    }
     this.currentUser.next(loginName)
    return this.http.get<User>(url, httpHeadres)
  }

  createUser(body){
    let url = this.utlisService.linkGeneration(environment.userResource, environment.userResource.getAllUsers);
    const httpHeadres = {
      headers: new HttpHeaders({
        "Authorization" : "Bearer " +  sessionStorage.getItem('token')
      })
    }
    // console.log("token user" + this.secureSession.get('token'))
    return this.http.post(url, body, httpHeadres)
  }

deleteUser(login){
  let  url = this.utlisService.linkGeneration(environment.userResource, environment.userResource.currentUser);
  url= url.replace(':user', login)
      // console.log("current user url " + url)
  const httpHeadres = {
    headers: new HttpHeaders({
      "Authorization" : "Bearer " +  sessionStorage.getItem('token')
    })
  }
  return this.http.delete<User>(url, httpHeadres) 
}
getAuthorities(){
  let  url = this.utlisService.linkGeneration(environment.userResource, environment.userResource.getAuthorities);
  const httpHeadres = {
    headers: new HttpHeaders({
      "Authorization" : "Bearer " +  sessionStorage.getItem('token')
    })
  }
  return this.http.get<User>(url, httpHeadres)
}

pagination(pageNumber){
  // let  url = "http://localhost:8080/api/users?page=0&size=20&sort=id,asc",
  let  url = this.utlisService.linkGeneration(environment.userResource, environment.userResource.pagination);
  url = url.replace(':page' , '?page='+pageNumber+'&size=20&sort=id,asc')
  const httpHeadres = {
    headers: new HttpHeaders({
      "Authorization" : "Bearer " +  sessionStorage.getItem('token')
    })
  }
  return this.http.get<User>(url, httpHeadres)
}

desendingUserData(pageNumber){
  // let  url = "http://localhost:8080/api/users?page=0&size=20&sort=id,asc",
  let  url = this.utlisService.linkGeneration(environment.userResource, environment.userResource.pagination);
  url = url.replace(':page' , '?page='+pageNumber+'&size=20&sort=id,desc')
  const httpHeadres = {
    headers: new HttpHeaders({
      "Authorization" : "Bearer " +  sessionStorage.getItem('token')
    })
  }
  return this.http.get<User>(url, httpHeadres)
}
}
