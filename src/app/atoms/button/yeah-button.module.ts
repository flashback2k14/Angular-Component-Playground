import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahButtonComponent } from "./component/yeah-button.component";

@NgModule({
  declarations: [YeahButtonComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahButtonComponent]
})
export class YeahButtonModule {}
