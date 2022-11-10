document.write("Bem-vindo a Jova York Hamburgueria" + "</br></br></br>")

document.write(
  "Cardápio: " + "</br></br></br>" +
  " Hambúrguer................. R$ 3,00 " + "</br></br>" +
  " Cheeseburger............... R$ 2,50 " + "</br></br>" +
  " Fritas..................... R$ 2,50 " + "</br></br>" +
  " Refrigerante............... R$ 1,00 " + "</br></br>" +
  " Milkshake.................. R$ 3,00 "
)

let hamb = confirm("Deseja pedir Hambúrguer?")
if (hamb == true) {
  var quantHamb = parseInt(prompt("Digite a quantidade: "))
} else {
  var quantHamb = 0
}

let cheese = confirm("Deseja pedir Cheeseburger?")
if (cheese == true) {
  var quantCheese = parseInt(prompt("Digite a quantidade: "))
} else {
  var quantCheese = 0
}

let fritas = confirm("Deseja pedir Fritas?")
if (fritas == true) {
  var quantFritas = parseInt(prompt("Digite a quantidade: "))
} else {
  var quantFritas = 0
}

let refri = confirm("Deseja pedir Refrigerante?")
if (refri == true) {
  var quantRefri = parseInt(prompt("Digite a quantidade: "))
} else {
  var quantRefri = 0
}

let milk = confirm("Deseja pedir Milkshake?")
if (milk == true) {
  var quantMilk = parseInt(prompt("Digite a quantidade: "))
} else {
  var quantMilk = 0
}

let totalBurguer = parseFloat(quantHamb * 3)
let totalCheese = parseFloat(quantCheese * 2.5)
let totalFritras = parseFloat(quantFritas * 2.5)
let totalRefri = parseFloat(quantRefri * 1)
let totalMilk = parseFloat(quantMilk * 3)


let conta = totalBurguer + totalCheese + totalFritras + totalRefri + totalMilk

document.write("</br></br></br>" + "Sua conta deu o valor de: R$ " + conta)