import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "yeah-radio-buttons",
  templateUrl: "./yeah-radio-buttons.component.html",
  styleUrls: ["./yeah-radio-buttons.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YeahRadioButtonsComponent),
      multi: true
    }
  ]
})
export class YeahRadioButtonsComponent implements ControlValueAccessor {
  @Input() groupTabIndex: string;
  @Input() buttonItems: Array<any>;
  @Output() optionChanged: EventEmitter<string>;
  inputValue: string;

  constructor() {
    this.optionChanged = new EventEmitter<string>();
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

  onChange(event: any) {
    this.inputValue = event.target.value;
    this._propagateChange(this.inputValue);
    this.optionChanged.emit(this.inputValue);
  }

  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
