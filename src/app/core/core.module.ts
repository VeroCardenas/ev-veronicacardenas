import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomErrorHandler } from './hander/custom-error.handler';
import { InfoStepsService } from './services/info-steps.service';
import { FileService } from './services/file.service';
import { LoginService } from './services/login.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    CustomErrorHandler,
    InfoStepsService,
    FileService,
  ]
})
export class CoreModule { }
