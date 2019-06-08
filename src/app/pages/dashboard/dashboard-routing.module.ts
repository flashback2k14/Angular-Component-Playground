import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { YeahDashboardComponent } from "./component/yeah-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: YeahDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouterModule {}
