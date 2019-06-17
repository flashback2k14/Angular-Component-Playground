import { Component } from "@angular/core";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "yeah-favorites",
  templateUrl: "./yeah-favorites.component.html",
  styleUrls: ["./yeah-favorites.component.css"]
})
export class YeahFavoritesComponent {
  optionButtonItems: Array<any>;

  constructor(private _dataService: DataService) {
    this.optionButtonItems = this._dataService.getRadioButtonOptions();
  }
}
