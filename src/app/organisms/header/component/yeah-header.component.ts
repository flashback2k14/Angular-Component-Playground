import { Component, Input } from "@angular/core";

@Component({
  selector: "yeah-header",
  templateUrl: "./yeah-header.component.html",
  styleUrls: ["./yeah-header.component.css"]
})
export class YeahHeaderComponent {
  @Input() homeRoute: string;
  @Input() menuItems: Array<any>;

  toggle($menuBtn: HTMLInputElement): void {
    $menuBtn.checked = !$menuBtn.checked;
  }
}
