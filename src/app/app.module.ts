import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebModule } from 'src/app/web/web.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { BackendProvider } from './_helpers/backend';
import { JwtInterceptor } from './_helpers/interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    WebModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    // provider used to create fake backend
    BackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
