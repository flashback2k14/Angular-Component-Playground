import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { YeahRootRoutingModule } from "./root-routing.module";
import { YeahHeaderModule } from "../../atoms/header/yeah-header.module";
import { LoginModule } from "../login/login.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { ProfileModule } from "../profile/profile.module";
import { FavoritesModule } from "../favorites/favorites.module";

import { YeahRootComponent } from "./component/yeah-root.component";

@NgModule({
  declarations: [YeahRootComponent],
  imports: [
    YeahRootRoutingModule,
    BrowserModule,
    YeahHeaderModule,
    LoginModule,
    DashboardModule,
    ProfileModule,
    FavoritesModule
  ],
  bootstrap: [YeahRootComponent]
})
export class YeahRootModule {}
