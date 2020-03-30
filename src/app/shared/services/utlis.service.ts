import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtlisService {

  constructor() { }

  linkGeneration(param1, param2){
    const host = window.location.hostname;
    const ApiUrl = param1.protocol+":"+"//"+host+":"+param1.port+'/'+param1.apiprefix+'/'+param2
    console.log('http://localhost:8080/api/register' + "======" + param1.protocol+":"+"//"+host+":"+param1.port+'/'+param1.apiprefix+'/'+param2)
  return ApiUrl;
  }

  linkGeneration1(param1){
    const ApiUrl = param1.apiName
    // const host = window.location.hostname;
    // const ApiUrl = param1.protocol+":"+"//"+host+":"+param1.port+'/'+param1.apiprefix+'/'+param2
    // console.log('http://localhost:8080/api/register' + "======" + param1.protocol+":"+"//"+host+":"+param1.port+'/'+param1.apiprefix+'/'+param2)
  return ApiUrl;
  }
}
