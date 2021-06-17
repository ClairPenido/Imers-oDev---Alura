var primValor = parseInt(prompt("Digite o primeiro valor:"))
var segValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt("Digite 1 para fazer divisão, 2 para multiplicação, 3 para soma e 4 para subtração:")

//if = se
//else = senão
//else if = senâo se
//document.write(__) -> escrever na tela
//contatenação -> juntar uma palavra com uma variavel

if (operacao == 1){
    var resultado = primValor/segValor
    document.write("<h2>" + primValor + " / " + segValor + " = " + resultado + "</h2>")
  
} else if (operacao == 2){
   var resultado = primValor*segValor
    document.write("<h2>" + primValor + " X " + segValor + " = " + resultado + "</h2>")
  
} else if (operacao == 3){
   var resultado = primValor+segValor
    document.write("<h2>" + primValor + " + " + segValor + " = " + resultado + "</h2>")
  
} else if (operacao == 4){
   var resultado = primValor-segValor
    document.write("<h2>" + primValor + " - " + segValor + " = " + resultado + "</h2>")
} else {
  document.write(" <h2> Opção inválida </h2>")
  
}
