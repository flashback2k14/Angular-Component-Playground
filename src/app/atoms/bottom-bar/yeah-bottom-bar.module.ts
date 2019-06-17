import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahBottomBarComponent } from "./component/yeah-bottom-bar.component";

@NgModule({
  declarations: [YeahBottomBarComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahBottomBarComponent]
})
export class YeahBottomBarModule {}
