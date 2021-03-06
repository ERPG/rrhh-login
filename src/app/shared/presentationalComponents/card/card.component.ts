import { Component, OnInit, Input } from "@angular/core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() icon;
  @Input() title;
  @Input() text;
  @Input() selected;
  public checkIcon = faCheckCircle;

  constructor() {}

  ngOnInit() {}
}
