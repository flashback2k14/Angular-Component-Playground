import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "yeah-textarea",
  templateUrl: "./yeah-textarea.component.html",
  styleUrls: ["./yeah-textarea.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YeahTextareaComponent),
      multi: true
    }
  ]
})
export class YeahTextareaComponent implements ControlValueAccessor {
  @Input() inputId: string;
  @Input() inputTabIndex: string;
  @Input() placeholderText: string;
  @Input() rowCount: string;
  @Input() labelText: string;
  @Input() inputValue: string;

  constructor() {
    this.inputId = "txt";
    this.inputTabIndex = "1";
    this.placeholderText = "Enter here...";
    this.rowCount = "4";
    this.labelText = "Label...";
    this.inputValue = "";
  }

  private _propagateChange = (_: any) => {};

  writeValue(obj: any): void {
    if (obj) {
      this.inputValue = obj;
    }
  }

  registerOnChange(fn: any): void {
    this._propagateChange = fn;
  }

  private onChange(event) {
    this.inputValue = event.target.value;
    this._propagateChange(this.inputValue);
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
