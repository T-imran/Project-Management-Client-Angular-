import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {LoginService} from "../loginService/login.service";

@Injectable()
export class AuthIntercepter implements HttpInterceptor{
  constructor(private loginService:LoginService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req;
    let token = this.loginService.getToken();

    if(token!=null){
        newReq= req.clone({
        headers: req.headers.append('Authorization', 'Bearer '+token),
      });
    }


    return next.handle(newReq);
  }

}
