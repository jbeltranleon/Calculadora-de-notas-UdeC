
function inicio(){
	var primerCorte, segundoCorte, tercerCorte, cuartoCorte, quintoCorte, primerPorcentaje, segundoPorcentaje, tercerPorcentaje, cuartoPorcentaje, quintoPorcentaje;
	var primerTotal, segundoTotal, tercerTotal, cuartoTotal, quintoTotal;
	;
function Calcular1() {
  primerCorte = document.getElementById("primerCorte");
  primerCorte = Number(primerCorte.value);
  primerPorcentaje = document.getElementById("primerPorcentaje");
  primerPorcentaje = Number(primerPorcentaje.value);
  primerTexto = document.getElementById("primerTexto");
  primerTotal= primerCorte*primerPorcentaje;
  primerTexto.innerHTML+=primerTotal;
}

function Calcular2() {
  segundoCorte = document.getElementById("segundoCorte");
  segundoCorte = Number(segundoCorte.value);
  segundoPorcentaje = document.getElementById("segundoPorcentaje");
  segundoPorcentaje = Number(segundoPorcentaje.value);
  segundoTexto = document.getElementById("segundoTexto");
  segundoTotal= segundoCorte*segundoPorcentaje;
  segundoTexto.innerHTML+=segundoTotal;
}

function Calcular3() {
  tercerCorte = document.getElementById("tercerCorte");
  tercerCorte = Number(tercerCorte.value);
  tercerPorcentaje = document.getElementById("tercerPorcentaje");
  tercerPorcentaje = Number(tercerPorcentaje.value);
  tercerTexto = document.getElementById("tercerTexto");
  tercerTotal= tercerCorte*tercerPorcentaje;
  tercerTexto.innerHTML+=tercerTotal;
}

function CalcularAuto() {
  cuartoCorte = document.getElementById("cuartoCorte");
  cuartoCorte = Number(cuartoCorte.value);
  cuartoPorcentaje = document.getElementById("cuartoPorcentaje");
  cuartoPorcentaje = Number(cuartoPorcentaje.value);
  cuartoTexto = document.getElementById("cuartoTexto");
  cuartoTotal= cuartoCorte*cuartoPorcentaje;
  cuartoTexto.innerHTML+=cuartoTotal;
}

function CalcularCoe() {
  quintoCorte = document.getElementById("quintoCorte");
  quintoCorte = Number(quintoCorte.value);
  quintoPorcentaje = document.getElementById("quintoPorcentaje");
  quintoPorcentaje = Number(quintoPorcentaje.value);
  quintoTexto = document.getElementById("quintoTexto");
  quintoTotal= quintoCorte*quintoPorcentaje;
  quintoTexto.innerHTML+=quintoTotal;
}

function Total(){

	var total = primerTotal+segundoTotal+tercerTotal+cuartoTotal+quintoTotal;
	var textoTotal = document.getElementById("textoTotal");
	textoTotal.innerHTML+=total;
}



function Load() { 
  var primerBoton = document.getElementById("primerBoton"); 
  primerBoton.addEventListener("click", Calcular1, false); 
  var segundoBoton = document.getElementById("segundoBoton"); 
  segundoBoton.addEventListener("click", Calcular2, false);
  var tercerBoton = document.getElementById("tercerBoton"); 
  tercerBoton.addEventListener("click", Calcular3, false);
  var cuartoBoton = document.getElementById("cuartoBoton"); 
  cuartoBoton.addEventListener("click", CalcularAuto, false);
  var quintoBoton = document.getElementById("quintoBoton"); 
  quintoBoton.addEventListener("click", CalcularCoe, false);
  var botonTotal = document.getElementById("botonTotal");
  botonTotal.addEventListener("click", Total, false)
} 

document.addEventListener("DOMContentLoaded", Load, false);
}