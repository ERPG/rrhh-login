import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormGroupDirective, ControlContainer } from '@angular/forms';
import { InputComponent } from './input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FontAwesomeModule, FormsModule, ReactiveFormsModule],
      providers: [FormGroupDirective]
      // { provide: ControlContainer, useExisting: FormGroupDirective }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
