import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Field } from '../../components/dynamic-form/dynamic-form.component';
import { PessoaJuricaService } from '@services/pessoa-juridica.service';
import { PessoaJuridica } from '@interfaces/pessoaJuridica';

@Component({
    selector: 'app-pessoa-juridica',
    templateUrl: './pessoa-juridica.component.html',
    styleUrls: ['./pessoa-juridica.component.scss']
})
export class PessoaJuridicaComponent implements OnInit {

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
        { razaoSocial: 'Empresa 1LTDA', cnpj: '12345678901234', email: '' },
        { razaoSocial: 'Empresa 2LTDA', cnpj: '12345678901234', email: '' },
    ];

    constructor(private service: PessoaJuricaService) { }

    ngOnInit(): void {
        this.buscar();
    }

    onSubmit(): void {
        if (this.pessoaJuridicaForm.invalid) {
            return;
        }

        const pessoaJuridica: PessoaJuridica = {
            razaoSocial: this.pessoaJuridicaForm.get('razaoSocial')?.value || '',
            cnpj: this.pessoaJuridicaForm.get('cnpj')?.value || '',
            email: this.pessoaJuridicaForm.get('email')?.value || '',
            telefone: this.pessoaJuridicaForm.get('telefone')?.value || '',
        };

        this.service.create(pessoaJuridica).subscribe({
            next: (response) => {
                this.buscar();
            }
        });
    }

    buscar(): void {
        this.service.findAll().subscribe((response) => {
            this.tableData = response;
        });
    }

    editar(item: any): void {
        // this.service.update(item).subscribe((response) => {
        //     console.log('Response', response);
        // });
    }

    excluir(item: any): void {
        this.service.delete(item).subscribe({next: (response) => {
            this.buscar();
        }});
    }
}