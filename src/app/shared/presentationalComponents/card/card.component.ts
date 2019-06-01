import { Component, OnInit, Input } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // public icons = fas.userShield;
  @Input() icon;
  @Input() title;
  @Input() text;
  constructor() { }

  ngOnInit() {

  }

}
