import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebModule } from 'src/app/web/web.module';

const routes: Routes = [
  {
    path: '', loadChildren: () => WebModule
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
