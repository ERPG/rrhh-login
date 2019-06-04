import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponent } from "./card.component";
import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [FontAwesomeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Card should text and title passed as parameters", () => {
    component.icon = "checkIcon";
    component.title = "Agente";
    component.text = "fake text";
    component.checkIcon = faCheckCircle;
    const elemTitle = fixture.nativeElement.querySelector("h5.rl-card__title");
    const elemText = fixture.nativeElement.querySelector("p.rl-card__text");
    fixture.detectChanges();
    expect(elemTitle.innerHTML).toContain("Agente");
    expect(elemText.innerHTML).toContain("fake text");
  });

  it("Should add color when element is selected", () => {
    component.selected = "selected";
    const elem = fixture.debugElement.nativeElement.querySelector(
      "div.rl-card"
    );
    const styles = window.getComputedStyle(elem);
    fixture.detectChanges();
    expect(styles.background).toContain("rgb(213, 253, 213)");
  });

  it("Should contain child element is icon is defined", () => {
    component.icon = "checkIcon";
    component.checkIcon = faCheckCircle;
    const elem = fixture.debugElement.nativeElement.querySelector(
      ".rl-card__icon"
    );
    fixture.detectChanges();
    expect(elem.firstChild).toBeDefined();
  });
});
