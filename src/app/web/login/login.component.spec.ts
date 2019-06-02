import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

@Component({ selector: 'app-card', template: '' })
class CardComponent {
  @Input() icon: any;
  @Input() title: string;
  @Input() text: string;
  @Input() selected: string;
}
@Component({ selector: 'app-input', template: '' })
class InputComponent {
  @Input() type: string;
  @Input() id: string;
  @Input() name: string;
  @Input() control: string;
  @Input() placeholder: string;
}
@Component({ selector: 'app-form-validations', template: '' })
class FormValidationsComponent {
  @Input() control: string;
}
@Component({ selector: 'app-label', template: '' })
class LabelComponent {
  @Input() text: string;
}

@Component({ selector: 'app-tooltip', template: '' })
class TooltipComponent {
  @Input() error: string;
}
@Component({ selector: 'app-button', template: '' })
class ButtonComponent {
  @Input() type: string;
  @Input() disabled: string;
  @Input() text: string;
}

describe('LoginComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('expect form invalid when empty', () => {
  //   expect(component.loginForm.valid).toBeFalsy();
  // });
});
