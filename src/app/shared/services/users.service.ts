import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/models';
import { first } from 'rxjs/internal/operators/first';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[];
  private apiUrl = 'http://localhost:4200';
  private user: any;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser() {
    return this.user;
  }

  async getUserByEmail(email: string) {
    const a = this.getAll().subscribe(elem => {
      elem.find(elem => (elem.email === email ? (this.user = elem) : ''));
      console.log(elem);
      this.getUser();
    });
    this.getUser();
    // console.log('users ======');
    // console.log(this.user);
    // this.user;
  }
}
