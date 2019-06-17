import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { YeahBottomBarModule } from "../../atoms/bottom-bar/yeah-bottom-bar.module";
import { YeahUrlListModule } from "../../atoms/url-list/yeah-url-list.module";
import { YeahSearchModule } from "../../molecules/search/yeah-search.module";
import { YeahUrlItemModule } from "../../molecules/url-item/yeah-url-item.module";

import { YeahDashboardComponent } from "./component/yeah-dashboard.component";
// import { DashboardRouterModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [YeahDashboardComponent],
  imports: [
    CommonModule,
    // DashboardRouterModule,
    YeahBottomBarModule,
    YeahUrlListModule,
    YeahSearchModule,
    YeahUrlItemModule
  ],
  exports: [CommonModule, YeahDashboardComponent]
})
export class DashboardModule {}
