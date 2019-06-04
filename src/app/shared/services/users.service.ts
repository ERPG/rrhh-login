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

  async getUserByEmail(email: string): Promise<User> | undefined {
    let userData: any;
    const users = await this.getAll().toPromise();
    if (users) {
      users.find(
        (elem): any => {
          elem.email === email ? (userData = elem) : (userData = undefined);
        }
      );
      return userData;
    }
    return undefined;
  }
}
