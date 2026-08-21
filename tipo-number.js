// ============================================================
// NOTAS DOS BIMESTRES
// ============================================================

// const cria uma variável que não será reatribuída.
// Aqui estamos armazenando números.
const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;


// ============================================================
// CONVERTENDO TEXTO PARA NÚMERO
// ============================================================

// Strings também podem representar números, mas são textos.
// Por exemplo:
// const notaQuartoBi = '5';

// Para transformar a string "5" em um número inteiro,
// podemos utilizar Number.parseInt().
const notaQuartoBi = Number.parseInt('5');


// ============================================================
// CALCULANDO A MÉDIA
// ============================================================

// Somamos as quatro notas e dividimos por 4.
const total = (
    notaPrimeiroBi +
    notaSegundoBi +
    notaTerceiroBi +
    notaQuartoBi
) / 4;


// toFixed(2) limita o resultado a 2 casas decimais.
// Exemplo: 4.075 -> "4.08"
console.log('A média é: ' + total.toFixed(2));


// ============================================================
// STRING
// ============================================================

// Strings são utilizadas para representar textos.
const nome = 'Vinicius';

console.log('Meu nome é ' + nome);