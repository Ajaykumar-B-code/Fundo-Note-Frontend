import { Injectable } from '@angular/core';
import { HttpService } from '../httService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any
  constructor(private httpService:HttpService) { }

  login(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('https://localhost:44318/api/User/login',reqData,false,header);
  }
  register(reqData: any){
    let header ={
      Headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    return this.httpService.postService('https://localhost:44318/api/User/reg',reqData,false,header)
  }
  forgotPassword(regData: any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/',
      })
    }
   // console.log("forget ");
      return this.httpService.postService('https://localhost:44318/api/User/ForgetPassword?Email='+regData.Email,{},false,header)
   
  }
  ResetPassword(regData: any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44318/api/User/ResetPassword',regData,true,header)
  }

}
