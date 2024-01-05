import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationTextComponent } from './validation-text.component';


describe('ValidationTextComponent', () => {
  let component: ValidationTextComponent;
  let fixture: ComponentFixture<ValidationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ValidationTextComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show error required', () => {
    component.controlName = 'identification';
    component.form = new FormGroup({
      identification: new FormControl(null, [Validators.required]),
    });
    expect(component.errors.length).toBe(1);
  });

  it('show error email', () => {
    component.controlName = 'email';
    component.form = new FormGroup({
      email: new FormControl('vero', [
        Validators.email,
      ]),
    });
    expect(component.errors.length).toBe(1);
  });
});
