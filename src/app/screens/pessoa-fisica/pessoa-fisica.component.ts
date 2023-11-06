import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Field } from '../../components/dynamic-form/dynamic-form.component';
import { PessoaFisicaService } from '@services/pessoa-fisica.service';

@Component({
    selector: 'app-pessoa-fisica',
    templateUrl: './pessoa-fisica.component.html',
    styleUrls: ['./pessoa-fisica.component.scss']
})
export class PessoaFisicaComponent {

    pessoaFisicaForm = new FormGroup({
        'nome': new FormControl(null, Validators.required),
        'cpf': new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'telefone': new FormControl(null, Validators.required)
    });
    formFields: Field[] = [
        { type: 'text', name: 'nome', label: 'Nome' },
        { type: 'text', name: 'cpf', label: 'CPF' },
        { type: 'email', name: 'email', label: 'Email' },
        { type: 'text', name: 'telefone', label: 'Telefone' },
    ];
    tableData: any[] = [
        { nome: 'João', cpf: '12345678901', email: ''},
        { nome: 'Maria', cpf: '12345678901', email: ''},
        { nome: 'José', cpf: '12345678901', email: ''},
    ];

    // constructor(private pessoaService: PessoaFisicaService) { }

    onSubmit(): void {
        if (this.pessoaFisicaForm.valid) {
            // this.pessoaService.createPessoaFisica(this.pessoaFisicaForm.value).subscribe();
        }
    }

    editar(item: any): void {
        console.log('Editar', item);
    }

    excluir(item: any): void {
        console.log('Excluir', item);
    }
}