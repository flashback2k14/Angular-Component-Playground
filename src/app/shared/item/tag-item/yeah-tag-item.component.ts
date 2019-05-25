import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "yeah-tag-item",
  templateUrl: "./yeah-tag-item.component.html",
  styleUrls: ["./yeah-tag-item.component.css"]
})
export class YeahTagItemComponent {
  @Input() item: any;
  @Input() showDeleteIcon: boolean;
  @Output() selectedTagItem: EventEmitter<any>;
  @Output() deleteTagItem: EventEmitter<any>;

  constructor() {
    this.item = { name: "lorem" };
    this.showDeleteIcon = false;
    this.selectedTagItem = new EventEmitter<any>();
    this.deleteTagItem = new EventEmitter<any>();
  }
}
