import { Component, Input } from "@angular/core";

@Component({
  selector: "yeah-link",
  templateUrl: "./yeah-link.component.html",
  styleUrls: ["./yeah-link.component.css"]
})
export class YeahLinkComponent {
  @Input() tabIndex = "1";
  @Input() link = "www.urls.flbk.dev";
}
