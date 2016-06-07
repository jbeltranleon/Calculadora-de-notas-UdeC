
function inicio(){
  var botonTotal = document.getElementById("botonTotal");
  botonTotal.addEventListener("click", Calcular)
  var botonLimpiar = document.getElementById("botonLimpiar");
  botonLimpiar.addEventListener("click", Limpiar)
}

function Calcular() {
  var primerCorte = document.getElementById("primerCorte");
  primerCorte = (Number(primerCorte.value))*0.24;
  var segundoCorte = document.getElementById("segundoCorte");
  segundoCorte = (Number(segundoCorte.value))*0.24;
  var tercerCorte = document.getElementById("tercerCorte");
  tercerCorte = (Number(tercerCorte.value))*0.32;
  var cuartoCorte = document.getElementById("cuartoCorte");
  cuartoCorte = (Number(cuartoCorte.value))*0.1;
  var quintoCorte = document.getElementById("quintoCorte");
  quintoCorte = (Number(quintoCorte.value))*0.1;
  var total = primerCorte+segundoCorte+tercerCorte+cuartoCorte+quintoCorte;
  var textoTotal = document.getElementById("textoTotal");
  textoTotal.innerHTML+=total;
}

function Limpiar(){
  var primerCorte = document.getElementById("primerCorte");
  primerCorte.value = "";
  var segundoCorte = document.getElementById("segundoCorte");
  segundoCorte.value = "";
  var tercerCorte = document.getElementById("tercerCorte");
  tercerCorte.value = "";
  var cuartoCorte = document.getElementById("cuartoCorte");
  cuartoCorte.value = "";
  var quintoCorte = document.getElementById("quintoCorte");
  quintoCorte.value = "";
  var textoTotal = document.getElementById("textoTotal");
  textoTotal.innerHTML="Su nota es de:"


}