// ============================================================
// OPERADORES LÓGICOS
// ============================================================

// Os operadores lógicos permitem combinar duas ou mais
// condições.

// || -> OU
// && -> E
// !  -> NÃO


const notaFinal = 6;
const faltas = 5;


// ============================================================
// OPERADOR || (OU)
// ============================================================

// O operador || significa "OU".
//
// Basta UMA das condições ser verdadeira para o if ser
// executado.
//
// Condição 1:
// notaFinal < 7
//
// 6 < 7 -> true
//
// Condição 2:
// faltas > 4
//
// 5 > 4 -> true
//
// Como temos:
// true || true
//
// O resultado é:
// true

if (notaFinal < 7 || faltas > 4) {

    console.log('Reprovado, boas festas');

} else {

    console.log('Não foi reprovado por falta');
}


// ============================================================
// OPERADOR && (E)
// ============================================================

// O operador && significa "E".
//
// Nesse caso, TODAS as condições precisam ser verdadeiras
// para o if ser executado.
//
// Condição 1:
// notaFinal < 7
//
// 6 < 7 -> true
//
// Condição 2:
// faltas > 4
//
// 5 > 4 -> true
//
// Como temos:
// true && true
//
// O resultado é:
// true

if (notaFinal < 7 && faltas > 4) {

    console.log('Reprovado, boas festas');

} else {

    console.log('Não foi reprovado por falta');
}