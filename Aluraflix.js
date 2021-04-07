var imFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomFilmes = ["Toy Story", "Star Wars", "InterStellar"]

 for (var i=0; i < nomFilmes.length; i++){
document.write("<h3>" + nomFilmes [i] + "</h3>" )

 }
function escolha () {
 var selecFilme = document.getElementById('valor').value;
 var tituloFilme = document.getElementById('titulo');
  var imagem = document.getElementById('imagem');
  

  for (var i=0; i < nomFilmes.length; i++){
  if (selecFilme == nomFilmes[i]){
    imagem.src=imFilmes[i];
    tituloFilme.innerHTML = nomFilmes[i];
    
      
 }
} 
  
}
