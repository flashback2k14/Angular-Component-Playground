import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { YeahButtonComponent } from "./button/yeah-button.component";
import { YeahCardComponent } from "./card/yeah-card.component";
import { YeahInputComponent } from "./input/yeah-input.component";
import { YeahListComponent } from "./list/yeah-list.component";
import { YeahSearchComponent } from "./search/yeah-search.component";
import { YeahTextareaComponent } from "./textarea/yeah-textarea.component";

@NgModule({
  declarations: [
    YeahButtonComponent,
    YeahCardComponent,
    YeahInputComponent,
    YeahListComponent,
    YeahSearchComponent,
    YeahTextareaComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    YeahButtonComponent,
    YeahCardComponent,
    YeahInputComponent,
    YeahListComponent,
    YeahSearchComponent,
    YeahTextareaComponent,
    FormsModule
  ]
})
export class SharedModule {}
