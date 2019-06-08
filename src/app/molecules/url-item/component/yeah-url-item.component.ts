import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "yeah-url-item",
  templateUrl: "./yeah-url-item.component.html",
  styleUrls: ["./yeah-url-item.component.css"]
})
export class YeahUrlItemComponent {
  @Input() url: any;
  @Output() selectedTagItem: EventEmitter<any>;
  @Output() deleteTagItem: EventEmitter<any>;
  @Output() deleteUrlItem: EventEmitter<any>;
  @Output() editUrlItem: EventEmitter<any>;
  mode: string;

  constructor() {
    this.selectedTagItem = new EventEmitter<any>();
    this.deleteTagItem = new EventEmitter<any>();
    this.deleteUrlItem = new EventEmitter<any>();
    this.editUrlItem = new EventEmitter<any>();
    this.mode = "show";
  }

  fireSelectedTag(tag: any): void {
    this.selectedTagItem.emit(tag);
  }

  fireDeleteTag(tag: any): void {
    this.deleteTagItem.emit(tag);
  }

  toggleDeleteConfirmationMode(): void {
    if (this.mode === "delete") {
      this.mode = "show";
    } else {
      this.mode = "delete";
    }
  }

  cancelEditMode(): void {
    if (this.mode === "edit") {
      this.mode = "show";
    }
  }

  fireEditUrl(): void {
    if (this.mode === "show") {
      this.mode = "edit";
    } else {
      this.mode = "show";
      this.editUrlItem.emit(this.url);
    }
  }

  fireDeleteUrl(): void {
    this.toggleDeleteConfirmationMode();
    this.deleteUrlItem.emit(this.url);
  }
}
