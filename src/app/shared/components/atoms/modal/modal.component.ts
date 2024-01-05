import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title = 'Title';
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();


  closeDialog() {
    this.close.emit();
  }

}
