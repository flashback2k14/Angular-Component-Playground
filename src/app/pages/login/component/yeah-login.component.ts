import { Component } from "@angular/core";
import { DataService } from "../../../core/services/data.service";

@Component({
  selector: "yeah-login",
  templateUrl: "./yeah-login.component.html",
  styleUrls: ["./yeah-login.component.css"]
})
export class YeahLoginComponent {
  optionButtonItems: Array<any>;

  constructor(private _dataService: DataService) {
    this.optionButtonItems = this._dataService.getRadioButtonOptions();
  }

  submit($event: any): void {
    alert(JSON.stringify($event, null, 2));
  }
}
