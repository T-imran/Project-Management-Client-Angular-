import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './task/task.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./service/authService/auth.guard";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "task", component: TaskComponent, canActivate: [AuthGuard]
  },
  {
    path: "login", component: LoginComponent,
    data: { showRootComponents: false }
  },
  {
    path: "", component: DashboardComponent,canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
