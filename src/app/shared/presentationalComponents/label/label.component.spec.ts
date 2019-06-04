import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LabelComponent } from "./label.component";

describe("LabelComponent", () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LabelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Should show text passed as a parameter", () => {
    component.text = "fake text";
    const elem = fixture.debugElement.nativeElement.querySelector(
      ".rl-login__label"
    );
    fixture.detectChanges();
    expect(elem.innerText).toBe("fake text");
  });
});
