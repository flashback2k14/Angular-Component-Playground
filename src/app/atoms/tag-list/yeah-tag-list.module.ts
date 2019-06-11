import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahTagListComponent } from "./component/yeah-tag-list.component";

@NgModule({
  declarations: [YeahTagListComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahTagListComponent]
})
export class YeahTagListModule {}
