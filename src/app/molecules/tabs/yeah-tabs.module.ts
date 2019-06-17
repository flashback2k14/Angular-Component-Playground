import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahTabsComponent } from "./component/yeah-tabs.component";

@NgModule({
  declarations: [YeahTabsComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahTabsComponent]
})
export class YeahTabsModule {}
