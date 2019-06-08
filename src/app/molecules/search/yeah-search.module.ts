import { NgModule } from "@angular/core";
import { YeahInputModule } from "../../atoms/input/yeah-input.module";
import { YeahSearchComponent } from "./component/yeah-search.component";

@NgModule({
  declarations: [YeahSearchComponent],
  imports: [YeahInputModule],
  exports: [YeahSearchComponent]
})
export class YeahSearchModule {}
