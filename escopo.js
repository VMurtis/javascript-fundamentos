// ============================================================
// 1. VAR - NÃO RESPEITA O ESCOPO DE BLOCO
// ============================================================

// A variável estudante é criada dentro do if,
// mas como usamos "var", ela pode ser acessada
// fora do bloco.

if (1 > 0) {
    var estudante = "Caroline";
    console.log(estudante); // Caroline
}

// A variável ainda existe fora do if.
// Podemos alterar o seu valor.
estudante = "Patricia";
console.log(estudante); // Patricia

// ============================================================
// 2. LET - RESPEITA O ESCOPO DE BLOCO
// ============================================================

// A variável estudante existe somente dentro do if.
// Fora do bloco, ela não pode ser acessada.

if (1 > 0) {
    let estudante = "Ana";

    console.log(estudante); // Ana
}

// Aqui NÃO estamos alterando a variável criada dentro do if.
// Como ela só existe dentro do bloco, esta atribuição
// cria uma nova variável no escopo global.
estudante = "Renata";

console.log(estudante); // Renata


// ============================================================
// 3. LET - VARIÁVEL NO ESCOPO GLOBAL
// ============================================================

// Aqui criamos uma variável estudante fora do if.
// Portanto, ela pertence ao escopo externo/global.

let estudante_let;

// Essa variável pertence somente ao bloco do if.
if (1 > 0) {
    estudante_let = "Carol";
    console.log(estudante_let); // Carol
}

// Aqui estamos acessando a variável estudante
// que foi criada fora do if.
console.log(estudante_let); // Ana