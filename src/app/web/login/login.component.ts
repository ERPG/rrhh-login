import { AuthService } from '../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidationsService } from 'src/app/shared/services/form-validations.service';
import { faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('visible', [
      state(
        '0',
        style({
          opacity: 0
        })
      ),
      state(
        '1',
        style({
          opacity: 1
        })
      ),
      transition('0 => 1', animate(300)),
      transition('1 => 0', animate(300))
    ])
  ]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public agent = faUser;
  public admin = faUserShield;
  public submitted: boolean;
  public loading: boolean;
  public error: string;
  public selected: string;
  public loadTooltip: number;
  public user: string;

  constructor(private formB: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formB.group({
      email: ['', [Validators.required, FormValidationsService.emailValidator]],
      password: ['', [Validators.required, FormValidationsService.passwordValidator]],
      role: ['', Validators.required]
    });
  }

  setRole(role: string): void {
    role !== null && role === 'Agente'
      ? (this.loginForm.controls['role'].setValue('Agent'), (this.selected = 'Agent'))
      : (this.loginForm.controls['role'].setValue('Admin'), (this.selected = 'Admin'));
  }

  getRole(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const parentElement = target.closest('div.rl-card');
    parentElement.classList.add('selected');
    const role = parentElement.querySelector('.rl-card__title').innerHTML;
    this.setRole(role);
  }

  resetForm() {
    setTimeout(() => {
      this.loginForm.reset();
      this.loadTooltip = 0;
    }, 3000);
  }

  login(): void {
    const { email, password, role } = this.loginForm.value;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(email, password, role).subscribe(
      (data: any) => {
        this.loadTooltip = 1;
        this.user = data.firstName;
        // Reset form
        this.resetForm();
      },
      (response: string) => {
        this.loadTooltip = 1;
        this.error = response['error']['message'];
        this.submitted = true;
        // Reset form
        this.resetForm();
      }
    );
  }
}
