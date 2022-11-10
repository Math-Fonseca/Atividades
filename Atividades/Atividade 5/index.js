//5.	Crie um programa que realize a conversão do real para o dólar.

let real = parseFloat(prompt("Digite o valor em Real (R$) que deseja converter: "))

dollar = real * 0.1886
euro = real * 0.1895

alert("O valor em Real convertido para Dólar é: $ " + dollar)
alert("O valor em Real convertido para Euro é: ¢ " + euro)