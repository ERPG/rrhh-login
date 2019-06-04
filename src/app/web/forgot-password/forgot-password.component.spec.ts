import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";
import { ForgotPasswordComponent } from "./forgot-password.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
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
@Component({ selector: "app-button", template: "" })
class ButtonComponent {
  @Input() type: string;
  @Input() disabled: string;
  @Input() text: string;
}

describe("ForgotPasswordComponent", () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForgotPasswordComponent,
        InputComponent,
        FormValidationsComponent,
        LabelComponent,
        ButtonComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("expect form invalid when empty", () => {
    expect(component.forgotPassword.valid).toBeFalsy();
  });
  it("Email field validity", () => {
    let errors = {};
    const email = component.forgotPassword.controls["email"];
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
});
