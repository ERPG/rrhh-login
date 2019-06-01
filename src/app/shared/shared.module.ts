import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './presentationalComponents/input/input.component';
import { ButtonComponent } from './presentationalComponents/button/button.component';
import { TooltipErrorComponent } from './containerComponents/tooltip-error/tooltip-error.component';
import { CardComponent } from './presentationalComponents/card/card.component';
import { SuccessMessageComponent } from './containerComponents/success-message/success-message.component';
import { LabelComponent } from './presentationalComponents/label/label.component';
import { FormValidationsComponent } from './containerComponents/form-validations/form-validations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    TooltipErrorComponent,
    CardComponent,
    SuccessMessageComponent,
    LabelComponent,
    FormValidationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    TooltipErrorComponent,
    CardComponent,
    SuccessMessageComponent,
    LabelComponent,
    FormValidationsComponent
  ]
})
export class SharedModule { }
