import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { YeahUrlListComponent } from "./component/yeah-url-list.component";

@NgModule({
  declarations: [YeahUrlListComponent],
  imports: [CommonModule],
  exports: [CommonModule, YeahUrlListComponent]
})
export class YeahUrlListModule {}
