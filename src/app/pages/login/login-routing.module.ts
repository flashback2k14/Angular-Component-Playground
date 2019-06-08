import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { YeahLoginComponent } from "./component/yeah-login.component";

const routes: Routes = [
  {
    path: "",
    component: YeahLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouterModule {}
