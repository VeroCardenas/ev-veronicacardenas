import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpStepComponent } from './otp-step.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OtpService } from 'src/app/core/services/otp.service';
import { InfoStepsService } from 'src/app/core/services/info-steps.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('OtpStepComponent', () => {
  let component: OtpStepComponent;
  let fixture: ComponentFixture<OtpStepComponent>;
  let otpService: OtpService;
  let infoStepsService: InfoStepsService;
  const OTP_MOCK = 'Y4K1A-4';

  let mockOtpService = {
    getOtp: jest.fn().mockReturnValue(of(OTP_MOCK)),
    validateOtp: jest.fn().mockReturnValue(of(true)),
    otpValueSubject: jest.fn(),
    getOtpValue: jest.fn(),
  };

  let mockInfoStep = {
    onPrevStep: jest.fn(),
    onNextStep: jest.fn(),
    onValidationOtp: jest.fn()
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [OtpStepComponent],
      providers: [
        { provide: OtpService, useValue: mockOtpService },
        { provide: InfoStepsService, useValue: mockInfoStep },
      ]
    })
      .compileComponents();


  });


  beforeEach(() => {
    otpService = TestBed.inject(OtpService);
    infoStepsService = TestBed.inject(InfoStepsService);
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('call prevStep', () => {
    component.prevStep();
    expect(infoStepsService.onPrevStep).toHaveBeenCalled();
  });


  it('call nextStep', () => {

    component.form.setValue({ otp: OTP_MOCK })
    component.nextStep();
    expect(otpService.validateOtp).toHaveBeenCalledWith(OTP_MOCK);
    expect(infoStepsService.onValidationOtp).toHaveBeenCalledWith(true);
    expect(infoStepsService.onNextStep).toHaveBeenCalled();
  });

});
