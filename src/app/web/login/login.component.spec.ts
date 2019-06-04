import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Component, Input } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthService } from "../../core/auth/auth.service";

@Component({ selector: "app-card", template: "" })
class CardComponent {
  @Input() icon: any;
  @Input() title: string;
  @Input() text: string;
  @Input() selected: string;
}
@Component({ selector: "app-input", template: "" })
class InputComponent {
  @Input() type: string;
  @Input() id: string;
  @Input() name: string;
  @Input() control: string;
  @Input() placeholder: string;
}
@Component({ selector: "app-form-validations", template: "" })
class FormValidationsComponent {
  @Input() control: string;
}
@Component({ selector: "app-label", template: "" })
class LabelComponent {
  @Input() text: string;
}

@Component({ selector: "app-tooltip", template: "" })
class TooltipComponent {
  @Input() error: string;
  @Input() user: string;
}
@Component({ selector: "app-button", template: "" })
class ButtonComponent {
  @Input() type: string;
  @Input() disabled: string;
  @Input() text: string;
}

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        CardComponent,
        InputComponent,
        FormValidationsComponent,
        LabelComponent,
        TooltipComponent,
        ButtonComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("expect form invalid when empty", () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it("Email field validity", () => {
    let errors = {};
    const email = component.loginForm.controls["email"];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("Password field validity", () => {
    let errors = {};
    const password = component.loginForm.controls["password"];

    // Email field is required
    errors = password.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set passw to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();

    // Set passw to something correct
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors["required"]).toBeFalsy();
  });

  it("Should call submitted when user attemp to log in", () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls["email"].setValue("ernesto@credimarket.com");
    component.loginForm.controls["password"].setValue("12345678");
    component.loginForm.controls["role"].setValue("Agent");
    expect(component.loginForm.valid).toBeTruthy();
    // Trigger the login function
    component.login();
    fixture.detectChanges();

    expect(component.submitted).toBeTruthy();
  });

  it("Should return no error if user exists", () => {
    component.loginForm.controls["email"].setValue("ernesto@credimarket.com");
    component.loginForm.controls["password"].setValue("12345678");
    component.loginForm.controls["role"].setValue("Agent");
    // Trigger the login function
    component.login();
    fixture.detectChanges();

    expect(component.error).toBeUndefined();
  });

  it("Should call auth service login", () => {
    const service = TestBed.get(AuthService);
    component.loginForm.controls["email"].setValue("ernesto@credimarket.com");
    component.loginForm.controls["password"].setValue("12345678");
    component.loginForm.controls["role"].setValue("Agent");
    // Trigger the login function
    // Spy on component method

    const spy = spyOn(service, "login").and.callThrough();
    component.login();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
