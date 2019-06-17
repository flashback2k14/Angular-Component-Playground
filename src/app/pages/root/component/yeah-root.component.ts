import { Component } from "@angular/core";
import { DataService } from "../../../services/data.service";

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
}
