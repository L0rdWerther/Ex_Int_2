export default class Pessoa {
    #nome;
    #email;

    setNome(nome) { this.#nome = nome; return true; }
    getNome() { return this.#nome; }
    
    setEmail(email) { this.#email = email; return true; }
    getEmail() { return this.#email; }
}
