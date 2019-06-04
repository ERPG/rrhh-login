import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/models";
import { UsersService } from "src/app/shared/services/users.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private apiUrl = "http://localhost:4200";

  constructor(private http: HttpClient, private userService: UsersService) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string, role: string) {
    return this.http
      .post<any>(`${this.apiUrl}/users/authenticate`, { email, password, role })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }

  async sendEmail(email: string) {
    const user = await this.userService.getUserByEmail(email);
    console.log("user=====");
    console.log(user);
    return this.http.post<any>(`http://localhost:3000/sendmail`, user).pipe(
      map(data => {
        // login successful if there's a jwt token in the response
        console.log("data!!!!!!!");
        console.log(data);
        return data;
      })
    );
  }
}
