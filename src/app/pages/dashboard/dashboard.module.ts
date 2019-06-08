import { NgModule } from "@angular/core";

import { YeahSearchModule } from "../../molecules/search/yeah-search.module";
import { YeahUrlListModule } from "../../atoms/url-list/yeah-url-list.module";
import { YeahUrlItemModule } from "../../molecules/url-item/yeah-url-item.module";

import { YeahDashboardComponent } from "./component/yeah-dashboard.component";
import { DashboardRouterModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [YeahDashboardComponent],
  imports: [
    DashboardRouterModule,
    YeahSearchModule,
    YeahUrlListModule,
    YeahUrlItemModule
  ]
})
export class DashboardModule {}
