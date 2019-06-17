import { Component } from "@angular/core";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "yeah-dashboard",
  templateUrl: "./yeah-dashboard.component.html",
  styleUrls: ["./yeah-dashboard.component.css"]
})
export class YeahDashboardComponent {
  urls: Array<any>;

  constructor(private _dataService: DataService) {
    this.urls = this._dataService.getUrls();
  }

  handleSelectedTagItem($event: any): void {
    this._showAlert($event);
  }

  handleDeleteTagItem($event: any): void {
    this._showAlert($event);
  }

  handleDeleteUrlItem($event: any): void {
    this._showAlert($event);
  }

  handleEditUrlItem($event: any): void {
    this._showAlert($event);
  }

  handleAddNewItem(): void {
    this._showAlert({ msg: "Add new Item" });
  }

  private _showAlert(value: any): void {
    alert(JSON.stringify(value, null, 2));
  }
}
