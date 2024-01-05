import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InfoStepsService } from '../core/services/info-steps.service';

@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.scss']
})
export class LoadFileComponent {
  steps: string[] = ['Step 1', 'Step 2', 'Step 3'];
  form: FormGroup = new FormGroup({});
  step$ = this.infoStepsService.currentStepAction$;

  constructor(
    private infoStepsService: InfoStepsService,
    ){
  }

}
