import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { WebRoutingModule } from "./web-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { RouterModule } from "@angular/router";
import { AuthService } from "../core/auth/auth.service";

@NgModule({
  declarations: [LoginComponent, HomeComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [LoginComponent, HomeComponent, ForgotPasswordComponent]
})
export class WebModule {}
