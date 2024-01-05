import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { InfoStepsService } from 'src/app/core/services/info-steps.service';
import { OtpService } from 'src/app/core/services/otp.service';
import { CustomValidations } from 'src/app/shared/utils/validators/otp-validator';

@Component({
  selector: 'app-grid-file',
  templateUrl: './grid-file.component.html',
  styleUrls: ['./grid-file.component.scss']
})
export class GridFileComponent {
  form: FormGroup = new FormGroup({});
  otp$ = this.otpService.getOtpValue$;
  private _onDestroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private otpService: OtpService,
    private infoStepsService: InfoStepsService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {
    this.removeListeners();
  }

  removeListeners() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  initForm() {
    this.form = this.fb.group({
      "otp": ['', [Validators.required, CustomValidations.otp(this.otpService)]],
    });

  }

  prevStep() {
    this.infoStepsService.onPrevStep();
  }

  nextStep() {
    this.otpService.validateOtp(this.form.value.otp)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(res => {
        this.infoStepsService.onValidationOtp(res);
        this.infoStepsService.onNextStep();
      })
  }
}
