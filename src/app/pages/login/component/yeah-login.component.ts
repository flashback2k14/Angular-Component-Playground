import { Component } from "@angular/core";

@Component({
  selector: "yeah-login",
  templateUrl: "./yeah-login.component.html",
  styleUrls: ["./yeah-login.component.css"]
})
export class YeahLoginComponent {
  submit($event: any): void {
    alert(JSON.stringify($event, null, 2));
  }
}
