//6.	Digite um número de 1 a 10 que o sistema mostre a sua tabuada completa.

let number = parseInt(prompt("Digite um número para formar a tabuada: "))

for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + (number * i) + "</br>")
}