import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahInputModule } from "../../atoms/input/yeah-input.module";
import { YeahSearchComponent } from "./component/yeah-search.component";

@NgModule({
  declarations: [YeahSearchComponent],
  imports: [CommonModule, YeahInputModule],
  exports: [CommonModule, YeahSearchComponent]
})
export class YeahSearchModule {}
