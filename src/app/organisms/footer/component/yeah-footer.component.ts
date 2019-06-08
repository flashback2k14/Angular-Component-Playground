import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "yeah-footer",
  templateUrl: "./yeah-footer.component.html",
  styleUrls: ["./yeah-footer.component.css"]
})
export class YeahFooterComponent {
  @Output() addNewItem: EventEmitter<void>;

  constructor() {
    this.addNewItem = new EventEmitter<void>();
  }

  handleAddClick() {
    this.addNewItem.emit();
  }
}
