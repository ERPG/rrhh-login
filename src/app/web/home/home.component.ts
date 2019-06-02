import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: string;
  public text: string;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.user = this.AuthService.currentUserValue ? this.AuthService.currentUserValue.firstName : '';
    this.user ? (this.text = 'Do you wish to log out ??') : (this.text = 'Welcome to Credimarket');
  }

  logout(): void {
    this.AuthService.logout();
  }
}
