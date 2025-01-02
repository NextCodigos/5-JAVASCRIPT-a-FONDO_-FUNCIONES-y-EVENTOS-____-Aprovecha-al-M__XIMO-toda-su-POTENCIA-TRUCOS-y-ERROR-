const MINOMBRE = "BENI Y OLEG";
const IVA = 0.21;
let Cantidad = 200;
let precio = 0.4;

// Llamada a funciones
saludar();
// saludar();
escribir(calcularIVA(Cantidad * precio, Cantidad, precio, IVA));

function saludar() {
  escribir(`Hola ${MINOMBRE}`);
}

function calcularIVA(resultado, Cantidad, precio, IVA) {
  let result = resultado * IVA;
  let suma = Cantidad * precio;

  // Ejemplo2:
  return { resultado: result, suma: suma };
}

function escribir(valor) {
  // Verifica si 'valor' es un objeto o un string
  if (typeof valor === "object") {
    let primerValor = valor.resultado;
    let segundoValor = valor.suma;
    document.querySelector(
      ".caja"
    ).innerHTML += `<div>${primerValor} (${segundoValor})</div>`;
  } else {
    // Si es un string, lo muestra directamente
    document.querySelector(".caja").innerHTML += `<div>${valor}</div>`;
  }
}
