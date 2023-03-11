import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {isEmpty} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:8080";
  constructor(private _http: HttpClient) {}

  doLogin(credential: { email: string; password: string; }){
    return this._http.post(`${this.url}/api/v1/auth/authenticate`,credential)
  }

  loginUser(token: string){
    if(token!=undefined || token!=null){
      localStorage.setItem("token",token)
      window.location.href="/task";
    }

  }

  isLoggedIng(){
   let token =  localStorage.getItem("token");
   return !(token == undefined || token == "" || token == null);
  }

  logout(){
    localStorage.removeItem("token");
    return true;
  }
}
