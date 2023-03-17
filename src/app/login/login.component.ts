import { Component } from '@angular/core';
import {LoginService} from "../service/loginService/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    credential={
      email:'',
      password:''
    }
    user:any;
constructor(private loginService:LoginService) {
}
  onSubmit(){
    console.log("submit");
    if((this.credential.email!="" && this.credential.password!="")
      && (this.credential.email!=null && this.credential.password!=null)){
      this.loginService.doLogin(this.credential).subscribe(
        (val:any)=>{
          if(val.present){
            console.log(val.token);
            this.user= val;
            this.loginService.getUser(this.user);
            console.log(this.user);
            this.loginService.loginUser(val.token)
          }else{
            alert("Username or Password is Wrong")
          }

        },
      error=>{
      })
        }
    else{
      console.log("blank field");
    }
  }

  logOut(){
     return this.loginService.logout();
  }
}

