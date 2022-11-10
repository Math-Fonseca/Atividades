let aluno = prompt("Digite o nome do aluno")

let disc1 = prompt("Digite a Matéria")
let nota1 = parseFloat(prompt("Digite a nota de " + disc1))
let disc2 = prompt("Digite a Matéria")
let nota2 = parseFloat(prompt("Digite a nota de " + disc2))
let disc3 = prompt("Digite a Matéria")
let nota3 = parseFloat(prompt("Digite a nota de " + disc3))
let disc4 = prompt("Digite a Matéria")
let nota4 = parseFloat(prompt("Digite a nota de " + disc4))

let soma = nota1 + nota2 + nota3 + nota4

let div = soma / 4

let resultado = div

alert("A média do aluno " + aluno + " é: " + resultado + ".")