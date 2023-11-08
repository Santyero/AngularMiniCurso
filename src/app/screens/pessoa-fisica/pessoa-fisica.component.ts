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
        'id': new FormControl(null),
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
    tableData: PessoaFisica[] = [];

    constructor(private service: PessoaFisicaService) { }

    ngOnInit(): void {
        this.buscar();
    }

    onSubmit(): void {
        if (this.pessoaFisicaForm.invalid) {
            return;
        }

        const pessoaFisica = this.getPessoaFisicaFormulario();

        if (!pessoaFisica?.id) {
            this.criar(pessoaFisica);
        } else {
            this.editar(pessoaFisica, pessoaFisica.id);
        }

        this.pessoaFisicaForm.reset();
    }

    getPessoaFisicaFormulario(): PessoaFisica {
        return {
          id: this.pessoaFisicaForm.get('id')?.value,
          nome: this.pessoaFisicaForm.get('nome')?.value || '',
          cpf: this.pessoaFisicaForm.get('cpf')?.value || '',
          rg: this.pessoaFisicaForm.get('rg')?.value || '',
          email: this.pessoaFisicaForm.get('email')?.value || '',
          telefone: this.pessoaFisicaForm.get('telefone')?.value || '',
        };
      }

    criar(pessoaFisica: PessoaFisica): void {
        this.service.create(pessoaFisica).subscribe({
            next: () => {
                this.buscar();
            }
        });
    }

    editar(pessoaFisica: PessoaFisica, id: number): void {
        this.service.update(pessoaFisica, id).subscribe({
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
        this.pessoaFisicaForm.patchValue(item);
    }

    excluir(item: any): void {
        this.service.delete(item).subscribe({next: (response) => {
            this.buscar();
        }});
    }
}