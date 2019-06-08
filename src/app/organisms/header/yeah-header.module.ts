import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { YeahHeaderComponent } from "./component/yeah-header.component";

@NgModule({
  declarations: [YeahHeaderComponent],
  imports: [RouterModule, CommonModule],
  exports: [YeahHeaderComponent]
})
export class YeahHeaderModule {}
