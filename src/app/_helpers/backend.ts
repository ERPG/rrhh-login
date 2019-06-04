import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

import { User, Role } from "../core/models/models";

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const users: User[] = [
      {
        id: 1,
        email: "oriol@credimarket.com",
        password: "12345678",
        firstName: "Oriol",
        lastName: "Cardona",
        role: Role.Admin || Role.Agent
      },
      {
        id: 2,
        email: "noreplyernesto@gmail.com",
        password: "12345678",
        firstName: "Ernesto",
        lastName: "Parra",
        role: Role.Agent
      }
    ];

    const authHeader = request.headers.get("Authorization");
    const isLoggedIn =
      authHeader && authHeader.startsWith("Bearer fake-jwt-token");
    const roleString = isLoggedIn && authHeader.split(".")[1];
    const role = roleString ? Role[roleString] : null;

    // Api call Simulation
    return (
      of(null)
        .pipe(
          mergeMap(() => {
            // authentication
            if (
              request.url.endsWith("/users/authenticate") &&
              request.method === "POST"
            ) {
              let role: boolean;
              let userData: boolean;
              const user = users.find((x: any) => {
                userData =
                  x.email === request.body.email &&
                  x.password === request.body.password;
                role = x.role === request.body.role;
                return userData && role;
              });
              if (!userData) return error("email o contraseña incorrecta");
              if (!role) return error("No tienes permiso con este Rol");
              return ok({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: `fake-jwt-token.${user.role}`
              });
            }
            // get all users
            if (request.url.endsWith("/users") && request.method === "GET") {
              return ok(users);
            }
            // pass through any requests not handled above
            return next.handle(request);
          })
        )
        // call materialize and dematerialize to ensure delay even if an error is thrown
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
    );

    // private helper functions

    function ok(body) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorised() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function error(message) {
      return throwError({ status: 400, error: { message } });
    }
  }
}

export let BackendProvider = {
  // use fake backend
  provide: HTTP_INTERCEPTORS,
  useClass: BackendInterceptor,
  multi: true
};
