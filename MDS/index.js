alert("Matéria MDS")

let aluno = prompt("Escreva o nome do aluno")

let notaProva = parseFloat(prompt("Digite a nota da prova"))

let notaQualit = parseFloat(prompt("Digite a nota qualitativa"))

let media = (notaProva * 2 + notaQualit) / 3

alert("A média do aluno " + aluno + " é: " + media)