import { Pessoa } from "./pessoa";

export interface PessoaJuridica extends Pessoa {
    id?:  number | null | undefined;
    cnpj: string;
    razaoSocial: string;
}
