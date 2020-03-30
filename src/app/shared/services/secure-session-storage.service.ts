import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecureSessionStorageService {

  constructor() { }
  get(key){
    sessionStorage.getItem(key)
  }
  set(key, value){
    sessionStorage.setItem(key, value)
  }
  clear(){
    sessionStorage.clear()
  }
}
