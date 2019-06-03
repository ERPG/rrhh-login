import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/web/login/login.component';
import { HomeComponent } from 'src/app/web/home/home.component';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from 'src/app/web/forgot-password/forgot-password.component';

const webRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(webRoutes)],
  providers: [],
  exports: [RouterModule]
})
export class WebRoutingModule {}
