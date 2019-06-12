import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahRadioButtonsComponent } from "./component/yeah-radio-buttons.component";

@NgModule({
  declarations: [YeahRadioButtonsComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahRadioButtonsComponent]
})
export class YeahRadioButtonsModule {}
