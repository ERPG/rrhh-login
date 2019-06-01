import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationsService } from 'src/app/shared/services/form-validations.service';
import { faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public agent = faUser;
  public admin = faUserShield;

  constructor(private formB: FormBuilder) {
    this.loginForm = this.formB.group({
      email: ['', [Validators.required, FormValidationsService.emailValidator]],
      password: ['', [Validators.required, FormValidationsService.passwordValidator]],
    });
  }

  ngOnInit() { }

  login() {
    const { email, passwork } = this.loginForm.value;
  }

}
