import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/core/services/file.service';
@Component({
  selector: 'app-grid-file',
  templateUrl: './grid-file.component.html',
  styleUrls: ['./grid-file.component.scss']
})
export class GridFileComponent {

  fileData$ = this.file.fileDataChange$;
  header$ = this.file.headerChange$;
  isAddElement: boolean = false;
  form: FormGroup = new FormGroup({});

  constructor(
    private file: FileService,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.subscribeHeader();
  }

  subscribeHeader() {
    this.header$.subscribe(header => {
      this.initForm(header);
    })
  }

  onSave() {

  }

  remove(index: number) {
    this.file.removeRow(index);
  }

  addElement() {
    this.isAddElement = true;
  }

  initForm(header: string[]) {
    this.form = this.fb.group({});
    header.forEach(item => {
      this.form.addControl(item, new FormControl(null, [Validators.required]));
    })

  }

  closeIsAdd() {
    this.isAddElement = false;
  }

  saveNewElement() {
    console.log(this.form.value);
    let values = Object.entries(this.form.value).map(([_key, value]) => String(value))
    this.file.addNewFileData(values);
    this.closeIsAdd();
  }
}
