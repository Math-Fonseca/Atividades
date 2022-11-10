let veiculo = parseFloat(prompt("Digite o valor de fabrica do veículo: R$ "))

let distribuidor = veiculo * 0.12

let imposto = veiculo * 0.45

let valorFinal = veiculo + distribuidor + imposto

alert("Ao valor do veículo foram adicionadas as taxas dos impostos e do distribuidor")
alert("O valor final do carro é: R$" + valorFinal)