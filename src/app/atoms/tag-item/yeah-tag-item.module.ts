import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahTagItemComponent } from "./component/yeah-tag-item.component";

@NgModule({
  declarations: [YeahTagItemComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahTagItemComponent]
})
export class YeahTagItemModule {}
