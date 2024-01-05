import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Otp } from 'src/app/shared/models/otp.model';
import { CustomErrorHandler } from '../hander/custom-error.handler';
import { InfoStepsService } from './info-steps.service';


@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private url = `http://localhost:3100`;

  otpValueSubject = new BehaviorSubject<string>("");
  getOtpValue$ = this.otpValueSubject.asObservable();


  constructor(
    private _http: HttpClient,
    private infoStepsService: InfoStepsService,
  ) { }

  getOtp(): Observable<string> {
    const url = `${this.url}/code`;
    if (this.otpValueSubject.value) {
      return of(this.otpValueSubject.value)
    }
    return this._http.get(url, { responseType: 'text' }).pipe(
      map(res => {
        const otp = res.split('"')[1];
        this.otpValueSubject.next(otp)
        return otp;
      }),
      catchError((error: any) => {
        return throwError(() => error);
      })
    )
  }

  validateOtp(otp: string): Observable<boolean> {
    const url = `${this.url}/validate`
    const data: Otp = {
      email: this.infoStepsService.getValidEmail(),
      code: otp
    }
    return this._http.post(url, data).pipe(
      map(res => res as boolean),
      catchError((error: any) => {
        return throwError(() => error);
      })
    )
  }

}
