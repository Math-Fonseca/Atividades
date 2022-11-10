alert("Fonseca Software")

let data = new Date()

const mes = String(data.getMonth() + 1).padStart(2, '0')
const ano = data.getFullYear()
const dataAtual = `${mes} / ${ano}`
console.log(dataAtual)

let vendedor = prompt("Digite o nome do vendedor: ")

let quantCar = parseInt(prompt("Digite a quantidade de carros vendidos: "))

let valorMes = parseFloat(prompt("Digite o valor vendido no mês: R$"))

let comissao = quantCar * 50
let porcentagem = valorMes * 0.05
let salario = 500 + comissao + porcentagem

alert("O salário de " + vendedor + " em " + dataAtual + " é de: R$ " + salario)