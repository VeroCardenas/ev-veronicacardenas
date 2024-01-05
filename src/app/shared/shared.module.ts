import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/atoms/header/header.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { ValidationTextComponent } from './components/atoms/validation-text';
import { LoginComponent } from './components/molecules/login/login.component';
import { GridFileComponent } from './components/molecules/grid-file/grid-file.component';


@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    ButtonComponent,
    LoginComponent,
    ValidationTextComponent,
    GridFileComponent,
  ],
  exports:[
    InputComponent,
    HeaderComponent,
    ButtonComponent,
    LoginComponent,
    ValidationTextComponent,
    GridFileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
