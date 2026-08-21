// ============================================================
// STRINGS EM JAVASCRIPT
// ============================================================

// Strings são utilizadas para representar textos.
// Podemos criar uma string utilizando:
// - aspas simples: 'texto'
// - aspas duplas: "texto"
// - template strings: `texto`

const estudante = "Caroline";
const docente = "Ana";


// ============================================================
// ASPAS DENTRO DE UMA STRING
// ============================================================

// Podemos utilizar aspas simples dentro de uma string
// criada com aspas duplas.

const cumprimento = "Nosso lema é 'estudar bastante!'";

console.log(cumprimento);


// Também podemos utilizar aspas duplas dentro de uma string
// criada com aspas simples.

const citacao = 'Ana diz: "nosso lema é estudar bastante!"';

console.log(citacao);


// ============================================================
// CONCATENAÇÃO DE STRINGS
// ============================================================

// Podemos juntar textos utilizando o operador +.

console.log("A estudante se chama " + estudante);


// ============================================================
// TEMPLATE STRING
// ============================================================

// Template strings utilizam crases (`).
//
// Uma das principais vantagens é poder inserir variáveis
// diretamente dentro do texto utilizando ${}.
//
// Isso é chamado de interpolação de strings.

console.log(`A estudante se chama ${estudante}`);


// Também podemos utilizar expressões dentro de ${}.

console.log(`A professora se chama ${docente}`);


// ============================================================
// MÉTODOS DE STRING
// ============================================================

// Strings possuem vários métodos que permitem manipular
// e consultar seus valores.
//
// toUpperCase() transforma todos os caracteres em maiúsculos.

const senha = "senhasegura123" + estudante.toUpperCase();

console.log(`A senha é ${senha}`);


// Exemplo:
//
// Caroline
// ↓
// CAROLINE

console.log(estudante.toUpperCase());


// toLowerCase() transforma todos os caracteres em minúsculos.

console.log(estudante.toLowerCase());


// length informa a quantidade de caracteres da string.

console.log(estudante.length);

// A documentação oficial da MDN:  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String