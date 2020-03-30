import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{Router} from'@angular/router';
import{App_CONSTANT} from'../constants/app-constant';
import{ToastrService} from'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdGuard implements CanActivate {
  constructor(private router:Router, private toaster:ToastrService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(sessionStorage.getItem('token')){
        return true;
      }
      else{
        alert("Please login");
        // this.toaster.warning("Please login");
        this.router.navigate([App_CONSTANT.LOGOUT])
        return false
      }
    
  }
  
}
