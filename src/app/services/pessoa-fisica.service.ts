import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoaFisica } from '@interfaces/pessoa-fisica';
import { GenericService } from '@services/generic.service';

@Injectable({
    providedIn: 'root'
})
export class PessoaFisicaService extends GenericService<PessoaFisica> {
    
    constructor(http: HttpClient) {
        super(http);
        this.baseUrl = 'http://localhost:3000/pessoa-fisica';
    }
}
