import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/web/login/login.component';
import { HomeComponent } from 'src/app/web/home/home.component';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from 'src/app/core/auth/auth-guard.service';

const webRoutes: Routes = [
  {
    path: '',
    children:
      [{
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(webRoutes)
  ],
  providers: [
    AuthGuardService
  ],
  exports: [RouterModule]
})
export class WebRoutingModule { }
