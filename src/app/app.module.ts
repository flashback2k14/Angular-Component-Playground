import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { YeahHeaderModule } from "./organisms/header/yeah-header.module";
import { LoginModule } from "./pages/login/login.module";
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { YeahFooterModule } from "./organisms/footer/yeah-footer.module";

import { YeahRootComponent } from "./root/yeah-root.component";

@NgModule({
  declarations: [YeahRootComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    YeahHeaderModule,
    LoginModule,
    DashboardModule,
    YeahFooterModule
  ],
  bootstrap: [YeahRootComponent]
})
export class AppModule {}
