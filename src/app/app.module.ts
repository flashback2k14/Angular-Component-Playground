import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { YeahHeaderModule } from "./organisms/header/yeah-header.module";
import { LoginModule } from "./pages/login/login.module";
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { ProfileModule } from "./pages/profile/profile.module";
import { YeahFooterModule } from "./organisms/footer/yeah-footer.module";

import { YeahRootComponent } from "./root/yeah-root.component";

@NgModule({
  declarations: [YeahRootComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    YeahHeaderModule,
    LoginModule,
    DashboardModule,
    ProfileModule,
    YeahFooterModule
  ],
  bootstrap: [YeahRootComponent]
})
export class AppModule {}
