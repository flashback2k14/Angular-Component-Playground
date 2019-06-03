import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { YeahDashboardComponent, YeahInputsComponent } from "./routes";
import { SharedModule } from "./shared/shared.module";

const appRoutes: Routes = [
  {
    path: "dashboard",
    component: YeahDashboardComponent
  },
  {
    path: "inputs",
    component: YeahInputsComponent
  },
  // {
  //   path: "dialogs",
  //   component: YeahDialogsComponent
  // },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  declarations: [YeahDashboardComponent, YeahInputsComponent],
  imports: [RouterModule.forRoot(appRoutes), SharedModule],
  exports: [RouterModule, SharedModule]
})
export class AppRoutingModule {}
