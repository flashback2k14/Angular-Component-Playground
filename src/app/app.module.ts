import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./core/core.module";
import { YeahRootComponent } from "./root/yeah-root.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [AppRoutingModule, BrowserModule, CoreModule],
  declarations: [YeahRootComponent],
  bootstrap: [YeahRootComponent]
})
export class AppModule {}
