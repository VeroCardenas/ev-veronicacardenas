import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      "user": [null, [Validators.required]],
      "password": [null, [Validators.required]],
    });

  }

  login() {
    //TODO: validate login

    this.router.navigate(['load-file']);
  }

}
