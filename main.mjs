import PJ from './pessoas/PJ.mjs';
import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';

// 1 e 2. Criar e atribuir dados PJs
const pj1 = new PJ();
pj1.setNome("Empresa XYZ Contatos");
pj1.setEmail("contato@xyz.com");
pj1.setCNPJ("12345678000199");
pj1.setRazaoSocial("XYZ Soluções Tecnológicas LTDA");

const pj2 = new PJ();
pj2.setNome("Comercial ABC");
pj2.setEmail("vendas@abc.com.br");
pj2.setCNPJ("98765432000111");
pj2.setRazaoSocial("ABC Comércio Geral SA");

// 3, 4, 5 e 6. Criar objetos Date e IE
const dataAtual = new Date();

const ieClass = new IEclss();
ieClass.setNumero("111.222.333.444");
ieClass.setEstado("SP");
ieClass.setDataRegistro(dataAtual);

const ieFactory = IEfunc();
ieFactory.setNumero("555.666.777.888");
ieFactory.setEstado("RJ");
ieFactory.setDataRegistro(dataAtual);

IEjson.setNumero("999.888.777.666");
IEjson.setEstado("MG");
IEjson.setDataRegistro(dataAtual);

// 8 (Testando instanceof)
const objetoInvalido = { nome: 'Empresa Inválida' };
console.log("Teste objeto inválido IEclss:", ieClass.setPJ(objetoInvalido)); // false
console.log("Teste objeto válido IEclss:", ieClass.setPJ(pj1)); // true

ieFactory.setPJ(pj2);
IEjson.setPJ(pj1);

// Desafio Avançado: mostrarIE
function mostrarIE(ie) {
    const pj = ie.getPJ();
    console.log(`\n=== Pessoa Jurídica ===`);
    console.log(`Nome: ${pj.getNome()}`);
    console.log(`E-mail: ${pj.getEmail()}`);
    console.log(`CNPJ: ${pj.getCNPJ()}`);
    console.log(`Razão Social: ${pj.getRazaoSocial()}`);

    console.log(`\n=== Inscrição Estadual ===`);
    console.log(`Número: ${ie.getNumero()}`);
    console.log(`Estado: ${ie.getEstado()}`);
    console.log(`Data de Registro: ${ie.getDataRegistro().toLocaleString('pt-BR')}`);
    console.log(`Pessoa Jurídica Relacionada: ${pj.getRazaoSocial()}`);
}

// 9. Relatórios
console.log("\n--- Relatório IEclss ---");
mostrarIE(ieClass);

console.log("\n--- Relatório IEfunc ---");
mostrarIE(ieFactory);

console.log("\n--- Relatório IEjson ---");
mostrarIE(IEjson);
