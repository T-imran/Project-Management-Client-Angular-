import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './task/task.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./service/authService/auth.guard";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: "task", component: TaskComponent, canActivate: [AuthGuard]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
