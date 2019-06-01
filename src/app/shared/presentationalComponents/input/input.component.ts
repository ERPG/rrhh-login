import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor } from './models/models';
import { FormControl, ControlContainer, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class InputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() id;
  @Input() type;
  @Input() placeholder;
  @Input() name;

  constructor() { }

  ngOnInit() { }

  onKey(e: KeyboardEvent) { }

}
