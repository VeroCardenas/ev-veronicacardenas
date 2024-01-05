import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { FileService } from 'src/app/core/services/file.service';
import { InfoStepsService } from 'src/app/core/services/info-steps.service';
import { AOA2SheetOpts, WorkBook, WorkSheet, read, utils } from 'xlsx';

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.scss']
})
export class ReadFileComponent {
  form: FormGroup = new FormGroup({});
  data: any;
  private _onDestroy$ = new Subject<void>();

  constructor(
    private infoStepsService: InfoStepsService,
    private file: FileService,
  ) {
  }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {
    this.removeListeners();
  }

  removeListeners() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  prevStep() {
    this.infoStepsService.onPrevStep();
  }


  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const ab: ArrayBuffer = e.target.result;
      const wb: WorkBook = read(ab);

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA2SheetOpts>(utils.sheet_to_json(ws, {header: 1}));
      console.log(this.data)
      this.file.setFileData(this.data);
    };
    reader.readAsArrayBuffer(target.files[0]);
  }
}
