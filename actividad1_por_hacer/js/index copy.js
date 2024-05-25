// Declaración de la variable contador e inicialización en 1
let contador = 1;

// Añadiendo un event listener al botón con la clase "boton1", que llama a la función empezar cuando se hace clic en él
document.querySelector(".boton1").addEventListener("click", empezar);

// Definición de la función empezar
function empezar() {
  // Cambiando el contenido HTML de la clase "caja" con botones y un div para mostrar el contador
  document.querySelector(".caja").innerHTML = `
    <button class="boton2">Añadir 1</button>
    <button class="boton3">Reiniciar</button>
    <div class="contador"></div>
    `;
  // Llamando a la función actualizar para mostrar el contador inicial
  actualizar();
  // Añadiendo event listeners a los botones recién creados para llamar a las funciones correspondientes cuando se haga clic en ellos
  document.querySelector(".boton2").addEventListener("click", incrementar);
  document.querySelector(".boton3").addEventListener("click", reiniciar);
}

// Definición de la función incrementar
function incrementar() {
  // Incrementando el contador en 1
  ++contador;
  // Llamando a la función actualizar para reflejar el nuevo valor del contador en el HTML
  actualizar();
}

// Definición de la función reiniciar
function reiniciar() {
  // Reiniciando el contador a 1
  contador = 1;
  // Llamando a la función actualizar para reflejar el reinicio del contador en el HTML
  actualizar();
}

// Definición de la función actualizar
function actualizar() {
  // Actualizando el contenido del div con la clase "contador" para mostrar el valor actualizado del contador
  document.querySelector(".contador").innerHTML = contador;
}
