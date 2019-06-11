import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahLinkComponent } from "./component/yeah-link.component";

@NgModule({
  declarations: [YeahLinkComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahLinkComponent]
})
export class YeahLinkModule {}
