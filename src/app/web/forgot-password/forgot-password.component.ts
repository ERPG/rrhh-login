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

  resetForm() {
    setTimeout(() => {
      this.forgotPassword.reset();
      this.showText = false;
      this.text = "";
    }, 3000);
  }

  async submit(): Promise<any> {
    const { email } = this.forgotPassword.value;
    // stop here if form is invalid
    if (this.forgotPassword.invalid) {
      return;
    }
    const promise = await this._auth.sendEmail(email);
    promise.subscribe(
      data => {
        this.showText = true;
        this.text = "Un email fue enviado a usted con su clave de acceso.";
        this.resetForm();
        // console.log(data);
      },
      (response: string) => {
        this.showText = true;
        this.text = "Ha habido un error, por favor intente mas tarde.";
        // Reset form
        this.resetForm();
      }
    );
  }
}
