import { NgModule } from "@angular/core";
import { YeahButtonComponent } from "./components/button/yeah-button.component";
import { YeahSeparatorComponent } from "./components/separator/yeah-separator.component";

@NgModule({
  declarations: [YeahButtonComponent, YeahSeparatorComponent],
  exports: [YeahButtonComponent, YeahSeparatorComponent]
})
export class AtomsModule {}
