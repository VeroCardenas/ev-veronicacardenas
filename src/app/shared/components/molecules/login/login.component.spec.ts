import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoStepsService } from 'src/app/core/services/info-steps.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: InfoStepsService;
  const email = 'prueba@domain.com';

  let mockInfoStep = {
    onValidEmail: jest.fn(),
    onNextStep: jest.fn(),
    getValidEmail: jest.fn().mockReturnValue(email)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: InfoStepsService, useValue: mockInfoStep },]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    service = TestBed.inject(InfoStepsService);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate login', () => {

  });

});
