const MINOMBRE="Jab";
const IVA=0.21;
let cantidad = 2;
let precio = 4;
// Pongo return en funcion y no hace falta
// let resultadoFinal;
// Llamo a la funcion

// Llamada a funciones
saludar();
escribir(calcularIVA(cantidad*precio,cantidad,precio,IVA));

function saludar(){
    escribir(`Hola ${MINOMBRE}`);
}

function calcularIVA(resultado,cantidad,precio,IVA){
    let result=resultado*IVA;
    let suma=cantidad*precio;
    // Ejemplo1
    // let valores={resultado:result,suma:suma}

    // return valores;
    // Ejemplo2:
    return {resultado:result,suma:suma};
}

function escribir(valor){
    let primerValor=valor.resultado;
    let segundoValor=valor.suma;
    // document.querySelector(".caja").innerHTML=valor;
    document.querySelector(".caja").innerHTML+=`<div>${primerValor} (${segundoValor})</div>`;
}