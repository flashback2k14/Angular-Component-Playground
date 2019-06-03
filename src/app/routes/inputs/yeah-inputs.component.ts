import { Component } from "@angular/core";

@Component({
  selector: "yeah-inputs",
  templateUrl: "./yeah-inputs.component.html",
  styleUrls: ["./yeah-inputs.component.css"]
})
export class YeahInputsComponent {
  submit($event: any): void {
    alert(JSON.stringify($event, null, 2));
  }
}
