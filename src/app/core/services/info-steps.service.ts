import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoStepsService {

  private emailSubject = new BehaviorSubject<string>('');
  emailAction$ = this.emailSubject.asObservable();

  private validOtpSubject = new BehaviorSubject<boolean>(false);
  validOtpAction$ = this.validOtpSubject.asObservable();

  private currentStepSubject = new BehaviorSubject<number>(0);
  currentStepAction$ = this.currentStepSubject.asObservable();



  onValidEmail(email: string) {
    this.emailSubject.next(email)
  }

  getValidEmail() {
    return this.emailSubject.value;
  }

  onValidationOtp(valid: boolean) {
    this.validOtpSubject.next(valid)
  }

  onNextStep() {
    this.currentStepSubject.next(this.currentStepSubject.value + 1)
  }

  onPrevStep() {
    this.currentStepSubject.next(this.currentStepSubject.value - 1)
  }

}
