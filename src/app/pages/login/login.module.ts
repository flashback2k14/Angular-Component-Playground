import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { YeahInputModule } from "../../atoms/input/yeah-input.module";
import { YeahTextareaModule } from "../../atoms/textarea/yeah-textarea.module";
import { YeahButtonModule } from "../../atoms/button/yeah-button.module";

import { YeahLoginComponent } from "./component/yeah-login.component";
// import { LoginRouterModule } from "./login-routing.module";

@NgModule({
  declarations: [YeahLoginComponent],
  imports: [
    CommonModule,
    // LoginRouterModule,
    YeahInputModule,
    YeahTextareaModule,
    YeahButtonModule
  ],
  exports: [CommonModule, YeahLoginComponent]
})
export class LoginModule {}
