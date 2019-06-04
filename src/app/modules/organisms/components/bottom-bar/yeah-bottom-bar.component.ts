import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "yeah-bottom-bar",
  templateUrl: "./yeah-bottom-bar.component.html",
  styleUrls: ["./yeah-bottom-bar.component.css"]
})
export class YeahBottomBarComponent {
  @Output() addNewItem: EventEmitter<void>;

  constructor() {
    this.addNewItem = new EventEmitter<void>();
  }

  handleAddClick() {
    this.addNewItem.emit();
  }
}
