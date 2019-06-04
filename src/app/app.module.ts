import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "src/app/core/core.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { WebModule } from "./web/web.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// used to create fake backend
import { BackendProvider } from "./_helpers/backend";
import { JwtInterceptor } from "./_helpers/interceptor.service";
import { AuthService } from "./core/auth/auth.service";
import { WebRoutingModule } from "./web/web-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    WebModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    // provider used to create fake backend
    BackendProvider,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
