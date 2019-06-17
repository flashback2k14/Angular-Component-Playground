import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { YeahTabsModule } from "../../molecules/tabs/yeah-tabs.module";

import { YeahProfileComponent } from "./component/yeah-profile.component";
// import { ProfileRouterModule } from "./profile-routing.module";

@NgModule({
  declarations: [YeahProfileComponent],
  imports: [
    CommonModule,
    // ProfileRouterModule,
    YeahTabsModule
  ],
  exports: [CommonModule, YeahProfileComponent]
})
export class ProfileModule {}
