import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { YeahTextareaComponent } from "./component/yeah-textarea.component";

@NgModule({
  declarations: [YeahTextareaComponent],
  imports: [CommonModule, FormsModule],
  exports: [YeahTextareaComponent]
})
export class YeahTextareaModule {}
