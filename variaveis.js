// VAR
// Forma antiga de declarar variáveis.
// Atualmente, é recomendado evitar o uso de var,
// pois ela permite redeclarar a mesma variável,
// o que pode causar comportamentos inesperados.

// var estudante = "Caroline"
// var estudante = "Mariana" // Permitido com var


// LET
// Usamos let quando o valor da variável pode ser alterado.
//let estudante = "Caroline"

// CONST
// Usamos const quando o valor não será reatribuído.
const estudante = "Caroline"
let professora_ana = "Ana"
let professora_maria = "Maria"

// Não podemos alterar o valor de uma const:
// estudante = "Mariana" // Erro

console.log(estudante, professora_ana, professora_maria)