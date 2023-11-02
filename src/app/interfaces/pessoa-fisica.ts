import { Pessoa } from "./pessoa";

export interface PessoaFisica extends Pessoa {
    cpf: string;
    rg: string;
    nome: string;
}