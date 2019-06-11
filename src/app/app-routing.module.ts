import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { YeahLoginComponent } from "./pages/login/component/yeah-login.component";
import { YeahDashboardComponent } from "./pages/dashboard/component/yeah-dashboard.component";

const appRoutes: Routes = [
  {
    path: "login",
    component: YeahLoginComponent
  },
  {
    path: "dashboard",
    component: YeahDashboardComponent
  },
  // {
  //   path: "profile",
  //   loadChildren: "app/profile/profile.module#ProfileModule"
  // },
  // {
  //   path: "favorite",
  //   loadChildren: "app/favorite/favorite.module#FavoriteModule"
  // },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
