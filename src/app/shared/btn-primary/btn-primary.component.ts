// btn-primary.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent {
  @Input() text: string = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick(): void {
    this.buttonClick.emit();
  }
}
