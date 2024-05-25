const MINOMBRE="Jab";
const IVA=0.21;
// Pongo return en funcion y no hace falta
// let resultadoFinal;
// Llamo a la funcion
saludar();

let cantidad = 2;
let precio = 4;
let resultadoFinal=calcularIVA(cantidad*precio);
document.querySelector(".caja").innerHTML=resultadoFinal;

function saludar(){
    // alert("Hola Mundo");
    // Escribir en caja de html 
    // document.getElementById("caja").innerHTML = "Hola Mundo";
    // document.querySelector(".caja").innerHTML=`Hola ${MINOMBRE}`;
    escribir(`Hola ${MINOMBRE}`);
}

function calcularIVA(resultado){
    // let precio = parseFloat(document.getElementById("precio").value);
    // let iva = precio * 0.21;
    // document.getElementById("iva").innerHTML = iva;
    return resultado*IVA;
}

function escribir(valor){
    document.querySelector(".caja").innerHTML=valor;
}