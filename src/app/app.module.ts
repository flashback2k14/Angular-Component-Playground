import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { YeahRootComponent } from "./root/yeah-root.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [AppRoutingModule, BrowserModule],
  declarations: [YeahRootComponent],
  bootstrap: [YeahRootComponent]
})
export class AppModule {}
