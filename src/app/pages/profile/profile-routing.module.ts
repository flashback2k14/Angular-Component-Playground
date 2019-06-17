import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { YeahProfileComponent } from "./component/yeah-profile.component";

const routes: Routes = [
  {
    path: "",
    component: YeahProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRouterModule {}
