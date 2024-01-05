import { TestBed } from '@angular/core/testing';

import { InfoStepsService } from './info-steps.service';

describe('InfoStepsService', () => {
  let service: InfoStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('set new value of email', (done) => {
    const email = 'prueba@domain.com';
    service.emailAction$.subscribe(res => {
      expect(res).toBe(email)
      expect(service.getValidEmail()).toBe(email);
      done();
    })
    service.onValidEmail(email);

  });

  it('set new ValidationOtp', (done) => {
    const valid = true;
    service.validOtpAction$.subscribe(res => {
      expect(res).toBe(valid)
      done();
    })
    service.onValidationOtp(valid);
  });

  it('set new step', (done) => {

    service.currentStepAction$.subscribe(res => {
      expect(res).toBe(1)
      done();
    })
    service.onNextStep();
  });

  it('set prev step', (done) => {

    service.currentStepAction$.subscribe(res => {
      expect(res).toBe(-1)
      done();
    })
    service.onPrevStep();
  });



});
