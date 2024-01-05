import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = `http://localhost:4200`;

  constructor(
    private _http: HttpClient,
  ) { }

  login(user: User): Observable<boolean> {
    const url = `${this.url}/assets/users.json`;

    return this._http.get(url).pipe(
      map((users: any) => {
        return this.isUserValid(users, user);
      }),
      catchError((error: any) => {
        return throwError(() => error);
      })
    )
  }

  private isUserValid(users: User[], user: User): boolean {
    console.log(users, user)
    let userExist = users.find(item => item.userName === user.userName && item.password === user.password);
    return userExist ? true : false;
  }

}
