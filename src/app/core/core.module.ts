import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OtpService } from './services/otp.service';
import { CustomErrorHandler } from './hander/custom-error.handler';
import { InfoStepsService } from './services/info-steps.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    OtpService,
    CustomErrorHandler,
    InfoStepsService,
  ]
})
export class CoreModule { }
