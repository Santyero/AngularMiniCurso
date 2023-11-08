import { Pessoa } from "./pessoa";

export interface PessoaFisica extends Pessoa {
    id?: number | null | undefined;
    cpf: string;
    rg: string;
    nome: string;
}