const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

if (media >= 7) {
 media += media * 0.1;
}

console.log(`a média é ${media.toFixed(2)}`);

const estudante = 'Fernando';
const estaAprovado = true;

if (estaAprovado === true) { 
  console.log('parabéns, boas festas');
} else {
  console.log('REPROVADO, boas festas');
}

if (estudante === 'Fernando') {
  console.log(`olá, ${estudante}`);
} else {
  console.log('quem é vc');
}

const notaFinal = 6;
const faltas = 5; 
const advertencias = 0;

if (notaFinal < 7 && faltas > 4) {
  console.log('reprovado, boas festas');
} else {
  console.log('não foi reprovado por falta');
}

if (faltas <=2 && !advertencias) {
  console.log('recebeu bônus');
} else {
  console.log('não recebeu bônus');
}