import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StepperComponent } from './standalone-components/stepper/stepper.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CustomErrorHandler } from './core/hander/custom-error.handler';
import { LoadFileComponent } from './load-file/load-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepperComponent,
    SharedModule,
    CoreModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
