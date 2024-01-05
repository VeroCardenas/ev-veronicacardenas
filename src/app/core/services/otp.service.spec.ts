import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OtpService } from './otp.service';
import { CustomErrorHandler } from '../hander/custom-error.handler';
import { InfoStepsService } from './info-steps.service';

describe('OtpService', () => {
  let service: OtpService;
  let httpTestingController: HttpTestingController;
  let url = `http://localhost:3100`;
  let infoStepsService: InfoStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        OtpService,
        CustomErrorHandler,
        InfoStepsService
      ],
    });
    service = TestBed.inject(OtpService);
    infoStepsService = TestBed.inject(InfoStepsService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('get otp', () => {
    const OTP = 'A3X4F-2'
    service.getOtp().subscribe((otp) => {
      expect(otp).toEqual(OTP)
    })

    const urlApi = `${url}/code`;
    const req = httpTestingController.expectOne(urlApi);
    expect(req.request.method).toEqual('GET');
    req.flush(OTP);
  })

  it('valid otp', () => {
    const OTP = 'A3X4F-2';
    jest.spyOn(infoStepsService, 'getValidEmail').mockReturnValue('prueba@domain.com')
    service.validateOtp(OTP).subscribe((valid) => {
      expect(valid).toEqual(true)
    })

    const urlApi = `${url}/validate`;
    const req = httpTestingController.expectOne(urlApi);
    expect(req.request.method).toEqual('POST');
    req.flush(true);
  })

});
