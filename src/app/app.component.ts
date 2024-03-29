import { Component } from '@angular/core';
import {LoginService} from "./service/loginService/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  opened : boolean = false;
constructor(public loginService:LoginService) {
}
  logOut(){
    this.loginService.logout();
    location.reload();
  }

  isLoggedIn(){
  return this.loginService.isLoggedIng();
  }
}
