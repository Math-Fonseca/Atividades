//3.	Crie um programa que realize as quatro operações da matemática com 2 números

let number1 = parseFloat(prompt("Digite um número: "))
let number2 = parseFloat(prompt("Digite outro número: "))

soma = number1 + number2
sub = number1 - number2
div = number1 / number2
mult = number1 * number2
poten = number1 ** number2

alert("A soma dos números é: " + soma)
alert("A subtração dos números é: " + sub)
alert("A divisão dos números é: " + div)
alert("A multiplicação dos números é: " + mult)
alert("O número " + number1 + " elevado a " + number2 + " é: " + poten)