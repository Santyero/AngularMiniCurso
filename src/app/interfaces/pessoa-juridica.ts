import { Pessoa } from "./pessoa";

export interface PessoaJuridica extends Pessoa {
  cnpj: string;
  razaoSocial: string;
}
