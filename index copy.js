const MINOMBRE="Jab";
const IVA=0.21;
let resultadoFinal;
// Llamo a la funcion
saludar();

let cantidad = 2;
let precio = 4;
calcularIVA(cantidad*precio)

function saludar(){
    // alert("Hola Mundo");
    // Escribir en caja de html 
    // document.getElementById("caja").innerHTML = "Hola Mundo";
    document.querySelector(".caja").innerHTML=`Hola ${MINOMBRE}`;
}

function calcularIVA(resultado){
    // let precio = parseFloat(document.getElementById("precio").value);
    // let iva = precio * 0.21;
    // document.getElementById("iva").innerHTML = iva;
    resultadoFinal=resultado*IVA;
}