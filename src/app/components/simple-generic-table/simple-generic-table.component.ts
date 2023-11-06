import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../../components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-simple-generic-table',
  templateUrl: './simple-generic-table.component.html',
  styleUrls: ['./simple-generic-table.component.scss']
})
export class SimpleGenericTableComponent {
    @Input() data:any[] = [];
    @Input() fields:Field[] = [];
    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();
    
    editar(item: any): void {
        this.edit.emit(item);
    }

    excluir(item: any): void {
        this.delete.emit(item);
    }
}
