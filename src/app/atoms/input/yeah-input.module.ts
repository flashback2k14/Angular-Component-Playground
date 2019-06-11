import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { YeahInputComponent } from "./component/yeah-input.component";

@NgModule({
  declarations: [YeahInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, YeahInputComponent]
})
export class YeahInputModule {}
