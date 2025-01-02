const MINOMBRE = "OLEG";
const MINOMBRE2 = "BENI";
const IVA = 0.21;
let cantidad = 2;
let precio = 4;

// Quien va dirigido
// que evento
// funcion que se va a ejecutar

// document.querySelector(".boton1").onclick = saludar;
document.querySelector(".boton1").onclick = calcularIVA;
document.querySelector(".boton2").addEventListener("click", saludarOleg);
// document.querySelector(".boton2").addEventListener("click", calcularIVA);
document.querySelector(".boton3").addEventListener("click", saludarBeni);

// MINUTO 28

function saludarOleg() {
  escribir(`Hola ${MINOMBRE}`);
}
function saludarBeni() {
  escribir(`Hola ${MINOMBRE2}`);
}

function calcularIVA() {
  escribir(`${precio} * ${cantidad} * ${IVA} = ${precio * cantidad * IVA}€`);
}


function escribir(valor) {
  // document.querySelector(".caja").innerHTML=valor;
  document.querySelector(".caja").innerHTML += `<div>${valor}</div>`;
}
