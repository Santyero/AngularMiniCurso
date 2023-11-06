import { Component, Input } from '@angular/core';
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
  @Input() formSubmitted: boolean = false;
  @Input() title: string = '';

  constructor() { }

  onSaveClick(): void {
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }
}