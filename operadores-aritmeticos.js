// ============================================================
// OPERADORES ARITMÉTICOS
// ============================================================

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

// Os operadores aritméticos são utilizados para realizar
// operações matemáticas em JavaScript.
//
// +   -> adição
// -   -> subtração
// *   -> multiplicação
// /   -> divisão
// %   -> resto da divisão


// ============================================================
// NOTAS DOS BIMESTRES
// ============================================================

const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;


// ============================================================
// CALCULANDO A MÉDIA
// ============================================================

// O operador + é utilizado para somar as notas.
//
// Depois utilizamos / para dividir a soma por 4.
//
// Os parênteses garantem que a soma seja realizada
// antes da divisão.

let media = (
    notaPrimeiroBi +
    notaSegundoBi +
    notaTerceiroBi +
    notaQuartoBi
) / 4;


// ============================================================
// VERIFICANDO A MÉDIA
// ============================================================

// O operador >= significa:
// "maior ou igual a"
//
// Aqui verificamos se a média é maior ou igual a 7.

if (media >= 7) {

    // O operador * realiza uma multiplicação.
    //
    // media * 0.1 calcula 10% da média.
    //
    // O operador += adiciona o resultado à própria variável.
    //
    // Isto:
    // media += media * 0.1;
    //
    // é equivalente a:
    // media = media + (media * 0.1);

    media += media * 0.1;
}


// ============================================================
// EXIBINDO O RESULTADO
// ============================================================

// toFixed(2) limita o resultado para duas casas decimais.
//
// A crase (`) permite utilizar uma template string.
// ${media} insere o valor da variável dentro do texto.

console.log(`A média é ${media.toFixed(2)}`);