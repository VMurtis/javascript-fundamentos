// ============================================================
// OPERADORES DE COMPARAÇÃO
// ============================================================

// Os operadores de comparação são utilizados para
// comparar valores e sempre retornam:
// true  -> verdadeiro
// false -> falso
//
// Principais operadores:
//
// === -> igualdade estrita
// !== -> diferença estrita
// ==  -> igualdade com conversão de tipo
// !=  -> diferença com conversão de tipo
// >   -> maior que
// <   -> menor que
// >=  -> maior ou igual a
// <=  -> menor ou igual a


// ============================================================
// 1. COMPARANDO UM BOOLEAN
// ============================================================

const estudante = 'Fernando';
const estaAprovado = true;


// Aqui verificamos se estaAprovado é exatamente igual a true.
//
// === compara o valor E o tipo.
//
// true === true
// resultado: true

if (estaAprovado === true) {

    console.log('Parabéns, boas festas');

} else {

    console.log('Reprovado, boas festas');
}


// ============================================================
// 2. COMPARANDO STRINGS
// ============================================================

// Também podemos comparar textos.
//
// Aqui verificamos se o nome do estudante é exatamente
// igual à string 'Fernando'.

if (estudante === 'Fernando') {

    console.log(`Olá, ${estudante}`);

} else {

    console.log('Quem é você?');
}


// ============================================================
// 3. COMPARAÇÃO DE BOOLEAN
// ============================================================

// Podemos armazenar o resultado de uma comparação
// em uma variável.

const estaAprovadoComparacao = true;

if (estaAprovadoComparacao === true) {

    console.log('Aprovado');

}


// ============================================================
// 4. DIFERENÇA ENTRE == E ===
// ============================================================

// O operador == realiza uma comparação com conversão
// de tipo quando necessário.
//
// Aqui temos:
//
// "0" -> string
// 0   -> number
//
// Mesmo sendo tipos diferentes, o == converte os valores
// para tentar realizar a comparação.

if ("0" == 0) {

    console.log('Passou na comparação com ==');

} else {

    console.log('Não passou na comparação com ==');
}


// ============================================================
// 5. IGUALDADE ESTRITA ===
// ============================================================

// O operador === NÃO faz conversão de tipo.
//
// Para a comparação ser verdadeira, o valor E o tipo
// precisam ser iguais.
//
// "0" -> string
// 0   -> number
//
// Os valores representam 0, mas os tipos são diferentes.
//
// Portanto:
//
// "0" === 0
// resultado: false

if ("0" === 0) {

    console.log('Passou na comparação com ===');

} else {

    console.log('Não passou na comparação com ===');
}


// ============================================================
// 6. COMPARANDO NÚMEROS
// ============================================================

// Agora vamos utilizar os operadores >= e <.
//
// >= significa "maior ou igual a".
// <  significa "menor que".

const idadeMinima = 18;
const idadeEstudante = 16;


// Verificamos se a idade do estudante é maior
// ou igual à idade mínima.
//
// 16 >= 18
//
// resultado: false
//
// Como a condição é falsa, o else será executado.

if (idadeEstudante >= idadeMinima) {

    console.log('Não precisa de autorização');

} else {

    console.log('Precisa de autorização');

}