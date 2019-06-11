import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahFooterComponent } from "./component/yeah-footer.component";

@NgModule({
  declarations: [YeahFooterComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahFooterComponent]
})
export class YeahFooterModule {}
