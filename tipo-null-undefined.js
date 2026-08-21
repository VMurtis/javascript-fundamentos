// ============================================================
// UNDEFINED E NULL
// ============================================================


// ============================================================
// UNDEFINED
// ============================================================

// Criamos uma variável utilizando let,
// mas não atribuímos nenhum valor a ela.
//
// Quando uma variável é declarada, mas ainda não recebeu
// um valor, seu valor é undefined.

let nomeEstudante;

console.log(nomeEstudante);
// undefined


// ============================================================
// TYPEOF
// ============================================================

// O operador typeof é utilizado para descobrir
// o tipo de um valor.

console.log(typeof nomeEstudante);
// "undefined"


// Criamos uma variável contendo uma string.

const professora = 'Ana';

console.log(typeof professora);
// "string"


// ============================================================
// NULL
// ============================================================

// null representa a ausência intencional de um valor.
//
// Aqui estamos dizendo que, neste momento,
// o estudante não possui um telefone cadastrado.

let telefoneEstudante = null;

console.log(telefoneEstudante);
// null


// ============================================================
// NULL EM UMA OPERAÇÃO MATEMÁTICA
// ============================================================

// Quando null é utilizado em uma operação matemática,
// o JavaScript o converte para o número 0.
//
// Portanto:
//
// null + 3
// 0 + 3
// 3

console.log(telefoneEstudante + 3);
// 3


// ============================================================
// UNDEFINED EM UMA OPERAÇÃO MATEMÁTICA
// ============================================================

// Diferente do null, undefined não é convertido para 0.
//
// Ao tentar fazer uma operação matemática com undefined,
// o resultado será NaN.
//
// NaN significa "Not a Number"
// (não é um número válido).

console.log(nomeEstudante + 3);
// NaN


// ============================================================
// TYPEOF NULL
// ============================================================

// Aqui existe uma particularidade do JavaScript:
//
// typeof null retorna "object".
//
// Isso é considerado um comportamento histórico da linguagem
// e não significa que null seja realmente um objeto.

console.log(typeof telefoneEstudante);
// "object"