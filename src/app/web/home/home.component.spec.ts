import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home.component";
import { AuthService } from "src/app/core/auth/auth.service";
import { WebRoutingModule } from "src/app/web/web-routing.module";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from "../login/login.component";
import { Routes, Router, RouterModule } from "@angular/router";
import { Location } from "@angular/common";
import { Component } from "../../../../node_modules/@angular/core";

@Component({
  template: ""
})
class MockLoginComponent {}

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: "login",
            component: MockLoginComponent
          }
        ]),
        HttpClientModule,
        RouterModule,
        WebRoutingModule
      ],
      providers: [AuthService, HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
