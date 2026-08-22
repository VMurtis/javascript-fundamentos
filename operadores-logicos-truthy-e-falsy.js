// ============================================================
// 1. OPERADORES ARITMÉTICOS
// ============================================================

// Armazenamos as notas dos quatro bimestres.

const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;


// Calculamos a média somando todas as notas
// e dividindo o resultado por 4.
//
// + -> adição
// / -> divisão

let media = (
    notaPrimeiroBi +
    notaSegundoBi +
    notaTerceiroBi +
    notaQuartoBi
) / 4;


// ============================================================
// 2. OPERADOR DE COMPARAÇÃO
// ============================================================

// >= significa "maior ou igual a".
//
// Se a média for maior ou igual a 7,
// o estudante recebe um bônus de 10% na média.

if (media >= 7) {

    // O operador += adiciona um valor à própria variável.
    //
    // Isto:
    // media += media * 0.1;
    //
    // é equivalente a:
    // media = media + (media * 0.1);

    media += media * 0.1;
}


// toFixed(2) limita a exibição da média
// para duas casas decimais.

console.log(`A média é ${media.toFixed(2)}`);


// ============================================================
// 3. BOOLEAN E IF / ELSE
// ============================================================

// Booleanos possuem apenas dois valores:
//
// true  -> verdadeiro
// false -> falso

const estudante = 'Fernando';
const estaAprovado = true;


// Verificamos se estaAprovado é exatamente igual a true.
//
// === -> igualdade estrita

if (estaAprovado === true) {

    console.log('Parabéns, boas festas');

} else {

    console.log('Reprovado, boas festas');
}


// ============================================================
// 4. COMPARANDO STRINGS
// ============================================================

// Também podemos utilizar operadores de comparação
// para verificar textos.
//
// Aqui verificamos se estudante é exatamente igual
// à string "Fernando".

if (estudante === 'Fernando') {

    // ${estudante} insere o valor da variável
    // dentro da template string.

    console.log(`Olá, ${estudante}`);

} else {

    console.log('Quem é você?');
}


// ============================================================
// 5. OPERADOR LÓGICO && (E)
// ============================================================

// O operador && significa "E".
//
// Para o if ser executado, TODAS as condições
// precisam ser verdadeiras.

const notaFinal = 6;
const faltas = 5;


// Primeira condição:
//
// notaFinal < 7
//
// 6 < 7 -> true
//
// Segunda condição:
//
// faltas > 4
//
// 5 > 4 -> true
//
// Portanto:
//
// true && true -> true

if (notaFinal < 7 && faltas > 4) {

    console.log('Reprovado, boas festas');

} else {

    console.log('Não foi reprovado por falta');
}


// ============================================================
// 6. OPERADOR LÓGICO ! (NÃO)
// ============================================================

// O operador ! significa "NÃO".
//
// Ele inverte um valor booleano:
//
// !true  -> false
// !false -> true

const advertencias = 0;


// Verificamos duas condições:
//
// faltas <= 2
// !advertencias
//
// A primeira condição verifica se o número de faltas
// é menor ou igual a 2.
//
// 5 <= 2 -> false
//
// A segunda condição utiliza !.
//
// O número 0 é considerado um valor FALSY em JavaScript.
//
// Portanto:
//
// !0 -> true
//
// Porém:
//
// false && true -> false
//
// Como as duas condições precisam ser verdadeiras,
// o bloco do if não será executado.

if (faltas <= 2 && !advertencias) {

    console.log('Recebeu bônus');

} else {

    console.log('Não recebeu bônus');
}