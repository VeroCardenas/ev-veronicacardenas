import { AbstractControl, ValidatorFn } from '@angular/forms';
import { OtpService } from 'src/app/core/services/otp.service';


export class CustomValidations {

  static otp(otpService: OtpService): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

      let value: string = control.value;
      if (value) {

        if (otpService.otpValueSubject.value !== value) {
          return { otp: true };
        }

      }
      return null;
    };
  }

}
