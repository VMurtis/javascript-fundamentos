// ============================================================
// FUNÇÕES
// ============================================================
//
// Neste exemplo vamos aprender duas formas de criar funções:
//
// 1. Function Declaration
// 2. Function Expression
//
// Também vamos utilizar:
// - parâmetros
// - argumentos
// - return
// - operadores lógicos


// ============================================================
// 1. FUNCTION DECLARATION
// ============================================================

// Function Declaration é uma forma de declarar uma função
// utilizando a palavra-chave "function".
//
// notaFinal e faltas são os PARÂMETROS da função.
// Eles são os valores que a função espera receber.

function estudanteReprovou(notaFinal, faltas) {

    // Verificamos duas condições:
    //
    // notaFinal < 7
    // A nota precisa ser menor que 7.
    //
    // faltas > 4
    // O número de faltas precisa ser maior que 4.
    //
    // O operador && significa "E".
    // Portanto, as duas condições precisam ser verdadeiras.

    if (notaFinal < 7 && faltas > 4) {

        // return devolve um valor para quem chamou
        // a função.
        //
        // Neste caso, estamos retornando true.

        return true;

    } else {

        // Se alguma das condições for falsa,
        // retornamos false.

        return false;
    }
}


// ============================================================
// CHAMANDO A FUNÇÃO
// ============================================================

// Os valores passados quando chamamos uma função
// são chamados de ARGUMENTOS.
//
// 6 -> argumento para notaFinal
// 5 -> argumento para faltas
//
// 6 < 7 -> true
// 5 > 4 -> true
//
// true && true -> true

console.log(estudanteReprovou(6, 5));
// true


// 8 -> argumento para notaFinal
// 3 -> argumento para faltas
//
// 8 < 7 -> false
// 3 > 4 -> false
//
// false && false -> false

console.log(estudanteReprovou(8, 3));
// false



// ============================================================
// 2. FUNCTION EXPRESSION
// ============================================================

// Outra maneira de criar uma função é armazená-la
// dentro de uma variável.
//
// Neste exemplo, a função é armazenada na constante
// estudanteReprovouExpressao.
//
// Isso é chamado de Function Expression.

const estudanteReprovouExpressao = function (notaFinal, faltas) {

    // Verificamos novamente se a nota é menor que 7
    // E se o número de faltas é maior que 4.

    if (notaFinal < 7 && faltas > 4) {

        return true;

    } else {

        return false;
    }
};


// ============================================================
// CHAMANDO A FUNCTION EXPRESSION
// ============================================================

console.log(estudanteReprovouExpressao(6, 5));
// true

console.log(estudanteReprovouExpressao(8, 3));
// false