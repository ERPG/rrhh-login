import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WebModule } from "./web/web.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./web/web.module").then(m => m.WebModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
