import { AuthService } from '../../core/auth/auth.service';
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
  public submitted: boolean;
  public loading: boolean;
  public error: string;
  public selected: string;

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

  login(): void {
    this.submitted = true;
    const { email, password, role } = this.loginForm.value;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(email, password, role).subscribe(
      (data: any) => {
        // console.log('success DATA');
        // console.log(data);
        // Reset form
        this.loginForm.reset();
      },
      (response: string) => {
        // console.log('error DATA');
        this.error = response['error']['message'];
        console.log(this.error);
        this.loading = false;
      }
    );
  }
}
