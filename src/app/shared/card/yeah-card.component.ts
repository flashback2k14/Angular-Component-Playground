import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "yeah-card",
  templateUrl: "./yeah-card.component.html",
  styleUrls: ["./yeah-card.component.css"]
})
export class YeahCardComponent {
  @Input() url: any;
  @Output() selectedTagItem: EventEmitter<any>;
  @Output() deleteTagItem: EventEmitter<any>;
  @Output() deleteUrlItem: EventEmitter<any>;
  @Output() editUrlItem: EventEmitter<any>;

  showDeleteConfirmation: boolean;
  editUrlMode: boolean;
  editButtonText: string;

  constructor() {
    this.selectedTagItem = new EventEmitter<any>();
    this.deleteTagItem = new EventEmitter<any>();
    this.deleteUrlItem = new EventEmitter<any>();
    this.editUrlItem = new EventEmitter<any>();

    this.showDeleteConfirmation = false;
    this.editUrlMode = false;
    this.editButtonText = "Edit";
  }

  fireSelectedTag(tag: any): void {
    this.selectedTagItem.emit(tag);
  }

  fireDeleteTag(tag: any): void {
    this.deleteTagItem.emit(tag);
  }

  toggleDeleteConfirmationMode(): void {
    this.showDeleteConfirmation = !this.showDeleteConfirmation;
  }

  cancelEditMode(): void {
    if (this.editUrlMode) {
      this.editUrlMode = false;
      this.editButtonText = "Edit";
    }
  }

  fireEditUrl(): void {
    if (this.editButtonText === "Edit") {
      this.editUrlMode = !this.editUrlMode;
      this.editButtonText = "Save";
    } else {
      this.editUrlMode = !this.editUrlMode;
      this.editButtonText = "Edit";
      this.editUrlItem.emit(this.url);
    }
  }

  fireDeleteUrl(): void {
    this.toggleDeleteConfirmationMode();
    this.deleteUrlItem.emit(this.url);
  }
}
