import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahSeparatorComponent } from "./component/yeah-separator.component";

@NgModule({
  declarations: [YeahSeparatorComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahSeparatorComponent]
})
export class YeahSeparatorModule {}
