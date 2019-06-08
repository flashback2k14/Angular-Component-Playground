import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { YeahHeaderModule } from "./organisms/header/yeah-header.module";
import { YeahFooterModule } from "./organisms/footer/yeah-footer.module";

import { YeahRootComponent } from "./root/yeah-root.component";

@NgModule({
  declarations: [YeahRootComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    YeahHeaderModule,
    YeahFooterModule
  ],
  bootstrap: [YeahRootComponent]
})
export class AppModule {}
