import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { InfoStepsService } from 'src/app/core/services/info-steps.service';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, CoreModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  @Input() steps: string[] = [];
  currentStep$ = this.infoStepService.currentStepAction$;

  constructor(
    private infoStepService: InfoStepsService,
  ) {
  }

}
