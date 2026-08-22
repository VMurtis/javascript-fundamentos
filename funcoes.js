// ============================================================
// FUNÇÕES
// ============================================================

// Uma função é um bloco de código criado para executar
// uma determinada tarefa.
//
// Podemos passar informações para uma função através
// de parâmetros e receber um resultado através do return.
//
// Neste exemplo, vamos trabalhar com:
// - função
// - parâmetros
// - argumentos
// - retorno


// ============================================================
// PARÂMETROS
// ============================================================

// Os valores dentro dos parênteses da declaração da função
// são chamados de PARÂMETROS.
//
// nome e nota são os parâmetros da função.
//
// Eles funcionam como "espaços reservados" para receber
// valores quando a função for chamada.

function exibeInfosEstudante(nome, nota) {

    // ========================================================
    // RETORNO
    // ========================================================

    // A palavra-chave return define o valor que a função
    // vai devolver para quem a chamou.
    //
    // Aqui estamos retornando uma template string
    // contendo o nome e a nota recebidos.

    return `O nome é ${nome} e a nota é ${nota}`;
}


// ============================================================
// ARGUMENTOS
// ============================================================

// Quando chamamos uma função e passamos valores para ela,
// esses valores são chamados de ARGUMENTOS.
//
// Aqui:
// 'Caroline' -> argumento para o parâmetro nome
// 10         -> argumento para o parâmetro nota

console.log(exibeInfosEstudante('Caroline', 10));


// Nesta chamada:
// 'Ana' -> argumento para o parâmetro nome
// 7     -> argumento para o parâmetro nota

console.log(exibeInfosEstudante('Ana', 7));