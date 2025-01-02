const MINOMBRE="BENI Y OLEG; CANTIDAD BERRS:EN UN MES EN";
let simbolo="€";
const IVA=0.21;
// Pongo return en funcion y no hace falta
// let resultadoFinal;
// Llamo a la funcion
saludar();

let cantidad = 2000;
let precio = 4;
// Cantidad * iva guarda en funcion calcularIva en variable resultado
escribir(calcularIVA(cantidad*precio));

function saludar(){
    escribir(`Hola ${MINOMBRE}`);
}

function calcularIVA(resultado){
    // Para ver € despues del resultado
    // document.querySelector(".caja").innerHTML=resultado;
    // document.querySelector(".caja").innerHTML+=`<div>${resultado}</div>`;
    document.querySelector(".caja").innerHTML+=`<div>${resultado} €</div>`;
    return resultado*IVA;
    
}

function escribir(valor){
    // document.querySelector(".caja").innerHTML=valor;
    document.querySelector(".caja").innerHTML+=`<div>${valor} ${simbolo}</div>`;
}