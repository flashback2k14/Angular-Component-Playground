import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "yeah-card",
  templateUrl: "./yeah-card.component.html",
  styleUrls: ["./yeah-card.component.css"]
})
export class YeahCardComponent {
  @Input() url: any;
  @Output() tagItemClicked: EventEmitter<any>;
  @Output() deleteButtonClicked: EventEmitter<any>;
  @Output() editButtonClicked: EventEmitter<any>;

  showDeleteConfirmation: boolean;
  editUrlMode: boolean;
  editButtonText: string;

  constructor() {
    this.tagItemClicked = new EventEmitter<any>();
    this.deleteButtonClicked = new EventEmitter<any>();
    this.editButtonClicked = new EventEmitter<any>();

    this.showDeleteConfirmation = false;
    this.editUrlMode = false;
    this.editButtonText = "Edit";
  }

  toggleDeleteConfirmation(): void {
    this.showDeleteConfirmation = !this.showDeleteConfirmation;
  }

  cancelEdit(): void {
    if (this.editUrlMode) {
      this.editUrlMode = false;
      this.editButtonText = "Edit";
    }
  }

  editUrl(): void {
    if (this.editButtonText === "Edit") {
      this.editUrlMode = !this.editUrlMode;
      this.editButtonText = "Save";
    } else {
      this.editButtonClicked.emit(this.url);
      this.editUrlMode = !this.editUrlMode;
      this.editButtonText = "Edit";
    }
  }

  deleteUrl(): void {
    this.deleteButtonClicked.emit(this.url);
  }
}
