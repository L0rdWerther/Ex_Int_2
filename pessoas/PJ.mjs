import Pessoa from './Pessoa.mjs';

export default class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    setCNPJ(cnpj) {
        // Desafio Extra 1: Validação de caracteres
        if (typeof cnpj === 'string' && cnpj.length === 14) {
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ() { return this.#cnpj; }

    setRazaoSocial(razaoSocial) {
        this.#razaoSocial = razaoSocial;
        return true;
    }

    getRazaoSocial() { return this.#razaoSocial; }
}
