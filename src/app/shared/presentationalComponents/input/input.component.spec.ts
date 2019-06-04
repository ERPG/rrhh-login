import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroupDirective,
  ControlContainer
} from "@angular/forms";
import { InputComponent } from "./input.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("InputComponent", () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FontAwesomeModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: ControlContainer, useValue: FormGroupDirective }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
