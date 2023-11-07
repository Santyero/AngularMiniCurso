import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface Field {
  type: string;
  name: string;
  label: string;
  options?: string[];
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() fields: Field[] = [];
  @Input() title: string = '';
  
  @Output() onSalvar = new EventEmitter();

  constructor() { }

  onSaveClick(): void {
    this.onSalvar.emit()
  }
}