import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  fileData = new BehaviorSubject<any[]>([]);
  fileDataChange$ = this.fileData.asObservable();

  header = new BehaviorSubject<string[]>([]);
  headerChange$ = this.header.asObservable();

  setFileData(fileData: any[]) {
    this.fileData.next(fileData.slice(1));
    this.setHeader(fileData[0]);
  }

  addNewFileData(row: string[]) {
    this.fileData.next([...this.fileData.value, row]);
  }

  setHeader(header: string[]) {
    this.header.next(header);
  }

  removeRow(index: number) {
    let data = [...this.fileData.value];
    data.splice(index, 1);
    this.fileData.next(data);
  }
}
