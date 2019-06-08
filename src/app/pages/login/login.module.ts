import { NgModule } from "@angular/core";

import { YeahInputModule } from "../../atoms/input/yeah-input.module";
import { YeahTextareaModule } from "../../atoms/textarea/yeah-textarea.module";
import { YeahButtonModule } from "../../atoms/button/yeah-button.module";

import { YeahLoginComponent } from "./component/yeah-login.component";
import { LoginRouterModule } from "./login-routing.module";

@NgModule({
  declarations: [YeahLoginComponent],
  imports: [
    LoginRouterModule,
    YeahInputModule,
    YeahTextareaModule,
    YeahButtonModule
  ]
})
export class LoginModule {}
