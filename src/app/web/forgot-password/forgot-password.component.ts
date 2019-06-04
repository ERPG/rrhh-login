import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth/auth.service";
import { FormValidationsService } from "src/app/shared/services/form-validations.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"]
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPassword: FormGroup;
  public text: string;
  public showText: boolean;
  constructor(private _auth: AuthService, private formB: FormBuilder) {}

  ngOnInit() {
    this.forgotPassword = this.formB.group({
      email: ["", [Validators.required, FormValidationsService.emailValidator]]
    });
  }

  async submit() {
    const { email } = this.forgotPassword.value;
    // stop here if form is invalid
    if (this.forgotPassword.invalid) {
      return;
    }
    const promise = await this._auth.sendEmail(email);
    promise.subscribe(data => {
      console.log("data");
      console.log(data);
    });
  }
}
