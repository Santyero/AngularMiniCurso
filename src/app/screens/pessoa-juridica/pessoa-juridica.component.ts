import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Field } from '../../components/dynamic-form/dynamic-form.component';

@Component({
    selector: 'app-pessoa-juridica',
    templateUrl: './pessoa-juridica.component.html',
    styleUrls: ['./pessoa-juridica.component.scss']
})
export class PessoaJuridicaComponent {

    pessoaJuridicaForm = new FormGroup({
        'razaoSocial': new FormControl(null, Validators.required),
        'cnpj': new FormControl(null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'telefone': new FormControl(null, Validators.required),
    });
    formFields: Field[] = [
        { type: 'text', name: 'razaoSocial', label: 'Razão Social' },
        { type: 'text', name: 'cnpj', label: 'CNPJ' },
        { type: 'email', name: 'email', label: 'Email' },
        { type: 'text', name: 'telefone', label: 'Telefone' },
    ];

    tableData: any[] = [
        { razaoSocial: 'Empresa 1LTDA', cnpj: '12345678901234', email: ''},
        { razaoSocial: 'Empresa 2LTDA', cnpj: '12345678901234', email: ''},
    ];

    onSubmit(): void {
        if (this.pessoaJuridicaForm.valid) {
            // this.pessoaService.createPessoaJuridica(this.pessoaJuridicaForm.value).subscribe();
        }
    }

    editar(item: any): void {
        console.log('Editar', item);
    }

    excluir(item: any): void {
        console.log('Excluir', item);
    }
}