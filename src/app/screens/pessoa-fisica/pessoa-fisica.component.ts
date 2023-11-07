import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Field } from '../../components/dynamic-form/dynamic-form.component';
import { PessoaFisicaService } from '@services/pessoa-fisica.service';
import { PessoaFisica } from '@interfaces/pessoaFisica';

@Component({
    selector: 'app-pessoa-fisica',
    templateUrl: './pessoa-fisica.component.html',
    styleUrls: ['./pessoa-fisica.component.scss']
})
export class PessoaFisicaComponent implements OnInit {

    pessoaFisicaForm = new FormGroup({
        'nome': new FormControl('', Validators.required),
        'cpf': new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
        'rg': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'telefone': new FormControl('', Validators.required)
    });
    formFields: Field[] = [
        { type: 'text', name: 'nome', label: 'Nome' },
        { type: 'text', name: 'cpf', label: 'CPF' },
        { type: 'text', name: 'rg', label: 'RG' },
        { type: 'email', name: 'email', label: 'Email' },
        { type: 'text', name: 'telefone', label: 'Telefone' },
    ];
    tableData: any[] = [
        { nome: 'João', cpf: '12345678901', email: '' },
        { nome: 'Maria', cpf: '12345678901', email: '' },
        { nome: 'José', cpf: '12345678901', email: '' },
    ];

    constructor(private service: PessoaFisicaService) { }

    ngOnInit(): void {
        this.buscar();
    }

    onSubmit(): void {
        if (this.pessoaFisicaForm.invalid) {
            return;
        }

        const pessoaFisica: PessoaFisica = {
            nome: this.pessoaFisicaForm.get('nome')?.value || '',
            cpf: this.pessoaFisicaForm.get('cpf')?.value || '',
            rg: this.pessoaFisicaForm.get('rg')?.value || '',
            email: this.pessoaFisicaForm.get('email')?.value || '',
            telefone: this.pessoaFisicaForm.get('telefone')?.value || '',
        };

        this.service.create(pessoaFisica).subscribe({
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