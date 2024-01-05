import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  onButtonClick() {
    this.onClick.emit();
  }
}
