import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { YeahLoginComponent } from "../login/component/yeah-login.component";
import { YeahDashboardComponent } from "../dashboard/component/yeah-dashboard.component";
import { YeahProfileComponent } from "../profile/component/yeah-profile.component";
import { YeahFavoritesComponent } from "../favorites/component/yeah-favorites.component";

const appRoutes: Routes = [
  {
    path: "login",
    component: YeahLoginComponent
  },
  {
    path: "dashboard",
    component: YeahDashboardComponent
  },
  {
    path: "profile",
    component: YeahProfileComponent
  },
  {
    path: "favorites",
    component: YeahFavoritesComponent
  },
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
export class YeahRootRoutingModule {}
