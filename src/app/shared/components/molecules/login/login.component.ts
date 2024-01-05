import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

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
    private loginService: LoginService,
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      "userName": [null, [Validators.required]],
      "password": [null, [Validators.required]],
    });

  }

  login() {
    //TODO: validate login
    this.loginService.login(this.form.value).subscribe(res => {
      console.log(res)
      this.router.navigate(['load-file']);
    })

  }

}
