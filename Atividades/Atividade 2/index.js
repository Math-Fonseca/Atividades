//2.	Crie um programa que de a média de um aluno a partir de quatro notas digitadas

let aluno = prompt("Digite o Nome do Aluno: ")

let nota1 = parseFloat(prompt("Digite a Nota de Português: "))
let nota2 = parseFloat(prompt("Digite a Nota de Matemática: "))
let nota3 = parseFloat(prompt("Digite a Nota de T.I: "))
let nota4 = parseFloat(prompt("Digite a Nota de Comportamento: "))

let soma = nota1 + nota2 + nota3 + nota4
let media = soma / 4

alert("A média do aluno " + aluno + " é: " + media)