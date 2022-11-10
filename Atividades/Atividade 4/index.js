//4.	Calcule o imposto ICMS de uma compra: Use como referência o imposto de 18%

let valor = parseFloat(prompt("Digite o valor do produto: R$"))

let mult = valor * 0.18
let soma = mult + valor

alert("O valor que sará pago de ICMS é de: R$ " + mult)
alert("O valor total com imposto é de: R$ " + soma)