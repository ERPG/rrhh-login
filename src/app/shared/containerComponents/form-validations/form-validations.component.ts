import { Component, OnInit, Input } from "@angular/core";
import { FormValidationsService } from "src/app/shared/services/form-validations.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-form-validations",
  templateUrl: "./form-validations.component.html",
  styleUrls: ["./form-validations.component.scss"]
})
export class FormValidationsComponent implements OnInit {
  @Input() control: FormControl;

  constructor() {}

  ngOnInit() {}

  get errorMessage() {
    if (this.control && this.control.errors !== null) {
      for (const propertyName in this.control.errors) {
        if (
          this.control.errors.hasOwnProperty(propertyName) &&
          this.control.touched
        ) {
          return FormValidationsService.getValidatorErrorMessage(
            propertyName,
            this.control.errors[propertyName]
          );
        }
      }
    }
    return null;
  }
}
