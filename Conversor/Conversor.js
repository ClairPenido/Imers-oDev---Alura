// Criando o conversor de libra em dolar 22/03
var perg1 = prompt("Deseja utilizar 1- Conversor de Moedas ou 2 -Tempertura " )

if (perg1 == "1") {
var valorLibra = prompt ("Qual valor em Libras para a conversão em Dolar?")

var Libranum = parseFloat(valorLibra) 

valorDolar = Libranum *0.72

valorDolarFix = valorDolar.toFixed(2)

document.write(valorDolarFix + " " + "US"); // imprimir na tela

}
if (perg1 == "2") {

var valorTemp = prompt ("Qual a temperatura em Celsius para a conversão em Fahrenheit?")

var Tempnum = parseFloat(valorTemp) 

valorCelcius = (Tempnum * 9/5) + 32

valorFah = valorCelcius.toFixed(2)

document.write(valorFah+ " " + "F"); 
}
// imprimir na tela
