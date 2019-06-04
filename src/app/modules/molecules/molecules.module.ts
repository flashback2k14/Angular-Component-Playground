import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { YeahInputComponent } from "./components/input/yeah-input.component";
import { YeahSearchComponent } from "./components/search/yeah-search.component";
import { YeahTextareaComponent } from "./components/textarea/yeah-textarea.component";

@NgModule({
  declarations: [
    YeahInputComponent,
    YeahSearchComponent,
    YeahTextareaComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [YeahInputComponent, YeahSearchComponent, YeahTextareaComponent]
})
export class MoleculesModule {}
