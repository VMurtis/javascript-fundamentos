// arrow-function.js


// ============================================================
// ARROW FUNCTIONS
// ============================================================

// Arrow Function é uma forma mais curta de escrever funções.
//
// Uma função tradicional seria:
//
// function estudanteReprovou(notaFinal, faltas) {
//     // código
// }
//
// Com Arrow Function:
//
// const estudanteReprovou = (notaFinal, faltas) => {
//     // código
// }


// ============================================================
// 1. ARROW FUNCTION COM MAIS DE UMA INSTRUÇÃO
// ============================================================

// Os valores dentro dos parênteses são os PARÂMETROS.
//
// notaFinal -> recebe a nota final do estudante
// faltas    -> recebe o número de faltas

const estudanteReprovou = (notaFinal, faltas) => {

    // O operador && significa "E".
    //
    // As duas condições precisam ser verdadeiras:
    //
    // notaFinal < 7
    // E
    // faltas > 4

    if (notaFinal < 7 && faltas > 4) {

        // return devolve true para quem chamou a função.

        return true;

    } else {

        // Se a condição não for verdadeira,
        // retornamos false.

        return false;
    }
};


// ============================================================
// CHAMANDO A FUNÇÃO
// ============================================================

// "6" e "5" são os ARGUMENTOS.
//
// 6 < 7 -> true
// 5 > 4 -> true
//
// true && true -> true

console.log(estudanteReprovou(6, 5));
// true


// "8" e "2" são os argumentos.
//
// 8 < 7 -> false
// 2 > 4 -> false
//
// false && false -> false

console.log(estudanteReprovou(8, 2));
// false



// ============================================================
// 2. ARROW FUNCTION COM RETORNO IMPLÍCITO
// ============================================================

// Quando a função possui apenas uma expressão para retornar,
// podemos escrever a Arrow Function de forma ainda mais curta.
//
// Não precisamos utilizar:
// - chaves {}
// - return
//
// O resultado da expressão é retornado automaticamente.
//
// Esta função:
//
// const exibeNome = (nome) => nome;
//
// É equivalente a:
//
// function exibeNome(nome) {
//     return nome;
// }

const exibeNome = (nome) => nome;


// "Caroline" é o argumento passado para o parâmetro nome.
//
// A função recebe "Caroline" e retorna o mesmo valor.

console.log(exibeNome('Caroline'));
// Caroline