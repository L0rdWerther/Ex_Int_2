import PJ from '../pessoas/PJ.mjs';

// Implementação 1: Classe
export default class IEclss {
    #numero; #estado; #dataRegistro; #pj;

    setNumero(numero) { this.#numero = numero; }
    getNumero() { return this.#numero; }
    setEstado(estado) { this.#estado = estado; }
    getEstado() { return this.#estado; }
    setDataRegistro(data) { this.#dataRegistro = data; }
    getDataRegistro() { return this.#dataRegistro; }

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }
        return false;
    }
    getPJ() { return this.#pj; }
}

// Implementação 2: Função Fábrica
export function IEfunc() {
    let numero, estado, dataRegistro, pj;

    return {
        setNumero: (n) => numero = n,
        getNumero: () => numero,
        setEstado: (e) => estado = e,
        getEstado: () => estado,
        setDataRegistro: (d) => dataRegistro = d,
        getDataRegistro: () => dataRegistro,
        
        setPJ: (novoPj) => {
            if (novoPj instanceof PJ) {
                pj = novoPj;
                return true;
            }
            return false;
        },
        getPJ: () => pj
    };
}

// Implementação 3: Objeto Literal
export const IEjson = {
    _numero: null,
    _estado: null,
    _dataRegistro: null,
    _pj: null,

    setNumero(n) { this._numero = n; },
    getNumero() { return this._numero; },
    setEstado(e) { this._estado = e; },
    getEstado() { return this._estado; },
    setDataRegistro(d) { this._dataRegistro = d; },
    getDataRegistro() { return this._dataRegistro; },

    setPJ(pj) {
        if (pj instanceof PJ) {
            this._pj = pj;
            return true;
        }
        return false;
    },
    getPJ() { return this._pj; }
};
