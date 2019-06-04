import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonComponent } from "./button.component";

describe("ButtonComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Should contain text and not disabled", () => {
    component.type = "button";
    component.disabled = false;
    component.text = "submit";
    const elem = fixture.nativeElement.querySelector("button.rl-button");
    fixture.detectChanges();
    expect(elem.innerHTML).toContain("submit");
    expect(elem.disabled).toBeFalsy();
  });
});
