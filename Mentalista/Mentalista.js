var dificuldade = prompt("Qual o nível de dificuldade você gostaria de jogar? Digite 1 para Fácil, 2 para Médio e 3 para Difícil")

if (dificuldade == "1"){
  
var numSecreto = parseInt(Math.random() * (10 - 0)+0)
  
var tentativas = 5

while (tentativas > 0) {
  
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numSecreto == chute) {
    alert("Acertou")
    break
    } else if (chute > numSecreto) {
  alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  } 
}

if (chute != numSecreto) {
  alert("Suas tentativas acabaram. O número secreto era " + numSecreto)
}
}

if (dificuldade == "2"){

  var numSecreto = parseInt(Math.random() * (15 - 0)+0)
  
  var tentativas = 3

while (tentativas > 0) {
  
  var chute = parseInt(prompt("Digite um número entre 0 e 15"))

  if (numSecreto == chute) {
    alert("Acertou")
    break
    } else if (chute > numSecreto) {
  alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  } 
}

if (chute != numSecreto) {
  alert("Suas tentativas acabaram. O número secreto era " + numSecreto)
}
}

if (dificuldade == "3"){

  var numSecreto = parseInt(Math.random() * (50 - 0)+0)
    
var tentativas = 2

while (tentativas > 0) {
  
  var chute = parseInt(prompt("Digite um número entre 0 e 20"))

  if (numSecreto == chute) {
    alert("Acertou")
    break
    } else if (chute > numSecreto) {
  alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  } 
}

if (chute != numSecreto) {
  alert("Suas tentativas acabaram. O número secreto era " + numSecreto)
}
}