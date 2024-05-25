const MINOMBRE="Jab";
const IVA=0.21;
// Pongo return en funcion y no hace falta
// let resultadoFinal;
// Llamo a la funcion
saludar();

let cantidad = 2;
let precio = 4;
escribir(calcularIVA(cantidad*precio));

function saludar(){
    escribir(`Hola ${MINOMBRE}`);
}

function calcularIVA(resultado){
    return resultado*IVA;
}

function escribir(valor){
    // document.querySelector(".caja").innerHTML=valor;
    document.querySelector(".caja").innerHTML+=`<div>${valor}</div>`;
}