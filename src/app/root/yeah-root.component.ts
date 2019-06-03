import { Component } from "@angular/core";
import { DataService } from "../core/services/data.service";

@Component({
  selector: "yeah-root",
  templateUrl: "./yeah-root.component.html",
  styleUrls: ["./yeah-root.component.css"]
})
export class YeahRootComponent {
  navMenuItems: Array<any>;

  constructor(private _dataService: DataService) {
    this.navMenuItems = this._dataService.getNavMenuItems();
  }

  submit($event: any): void {
    this._showAlert($event);
  }

  handleAddNewItem(): void {
    this._showAlert({ msg: "Add new Item" });
  }

  private _showAlert(value: any): void {
    alert(JSON.stringify(value, null, 2));
  }
}
