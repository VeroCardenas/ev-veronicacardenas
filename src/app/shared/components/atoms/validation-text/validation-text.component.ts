import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-text',
  templateUrl: './validation-text.component.html',
  styleUrls: ['.//validation-text.component.scss']
})
export class ValidationTextComponent implements OnInit {
  @Input() form: FormGroup | any = new FormGroup({});
  @Input() controlName: string = 'field';

  ngOnInit(): void {
    if (!this.form.contains(this.controlName)) {
      this.form.addControl(this.controlName, new FormControl(null));
    }
  }

  get errors() {
    const formErrors = Object.keys(this.form.controls[this.controlName].errors);
    let errors: string[] = [];
    formErrors.forEach((error) => {
      switch (error) {
        case 'required':
          errors.push('El campo es requerido');
          break;
        case 'email':
          errors.push(
            `Debe ingresar un correo electrónico válido`
          );
          break;
        case 'otp':
          errors.push(
            `El código no coincide`
          );
          break;
      }
    });
    return errors;
  }
}
