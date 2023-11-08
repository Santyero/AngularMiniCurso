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
        'id': new FormControl(null),
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

    tableData: PessoaJuridica[] = [];

    constructor(private service: PessoaJuricaService) { }

    ngOnInit(): void {
        this.buscar();
    }

    onSubmit(): void {
        if (this.pessoaJuridicaForm.invalid) {
            return;
        }

        const pessoaJuridica = this.getPessoaJuridicaForm();

        if (!pessoaJuridica?.id) {
            this.criar(pessoaJuridica);
        } else {
            this.editar(pessoaJuridica, pessoaJuridica.id);
        }

        this.pessoaJuridicaForm.reset();
    }

    getPessoaJuridicaForm(): PessoaJuridica {
        return {
          id: this.pessoaJuridicaForm.get('id')?.value,
          razaoSocial: this.pessoaJuridicaForm.get('razaoSocial')?.value || '',
          cnpj: this.pessoaJuridicaForm.get('cnpj')?.value || '',
          email: this.pessoaJuridicaForm.get('email')?.value || '',
          telefone: this.pessoaJuridicaForm.get('telefone')?.value || '',
        };
    }

    criar(pessoaJuridica: PessoaJuridica): void {
        this.service.create(pessoaJuridica).subscribe({
            next: () => {
                this.buscar();
            }
        });
    }

    editar(pessoaJuridica: PessoaJuridica, id: number): void {
        this.service.update(pessoaJuridica, id).subscribe({
            next: () => {
                this.buscar();
            }
        });
    }

    buscar(): void {
        this.service.findAll().subscribe({
            next: (response) => {
                this.tableData = response;
            }
        });
    }

    iniciarEdicao(item: any): void {
        this.pessoaJuridicaForm.patchValue(item);
    }

    excluir(item: any): void {
        this.service.delete(item).subscribe({
            next: (response) => {
                this.buscar();
            }
        });
    }
}