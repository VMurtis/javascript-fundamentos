// ============================================================
// ESTRUTURAS CONDICIONAIS - IF / ELSE
// ============================================================

// Uma string é um tipo de dado utilizado para representar textos.
const estudante = 'Fernando';

// Um booleano pode ter apenas dois valores:
// true  -> verdadeiro
// false -> falso
const estaAprovado = true;


// ============================================================
// VERIFICANDO SE O ESTUDANTE FOI APROVADO
// ============================================================

// O if executa um bloco de código quando uma condição
// é verdadeira.
//
// === é o operador de igualdade estrita.
// Ele verifica o valor E o tipo do dado.
//
// Aqui estamos verificando:
// "estaAprovado é exatamente igual a true?"

if (estaAprovado === true) {
    console.log('Parabéns, boas festas');
} else {
    // O else é executado quando a condição do if
    // é falsa.
    console.log('REPROVADO, boas festas');
}


// ============================================================
// VERIFICANDO O NOME DO ESTUDANTE
// ============================================================

// Também podemos utilizar o if para comparar strings.
//
// Aqui verificamos se o valor da variável estudante
// é exatamente igual à string 'Fernando'.

if (estudante === 'Fernando') {

    // Podemos utilizar uma template string para inserir
    // o valor de uma variável dentro do texto.
    console.log(`Olá, ${estudante}`);

} else {

    // Se estudante não for igual a 'Fernando',
    // este bloco será executado.
    console.log('Quem é você?');
}