import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WebRoutingModule } from 'src/app/web/web-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, ForgotPasswordComponent],
  imports: [CommonModule, HttpClientModule, WebRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [LoginComponent, HomeComponent]
})
export class WebModule {}
