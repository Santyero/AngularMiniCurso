import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoaJuridica } from '@interfaces/pessoaJuridica';
import { GenericService } from '@services/generic.service';

@Injectable({
    providedIn: 'root'
})
export class PessoaJuricaService extends GenericService<PessoaJuridica> {
    
    constructor(http: HttpClient) {
        super(http);
        this.baseUrl = 'http://localhost:3000/pessoa-juridica';
    }
}
