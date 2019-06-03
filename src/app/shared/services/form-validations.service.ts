import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {
  constructor() {}

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'Requerido',
      invalidEmailAddress: 'Direccion de email invalida',
      invalidPassword: 'Contraseña invalida, debe contener al menos 6 caracteres y uno nuéerico',
      minlength: `minimo requerido ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (
      control &&
      control.value &&
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control && control.value && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
}
