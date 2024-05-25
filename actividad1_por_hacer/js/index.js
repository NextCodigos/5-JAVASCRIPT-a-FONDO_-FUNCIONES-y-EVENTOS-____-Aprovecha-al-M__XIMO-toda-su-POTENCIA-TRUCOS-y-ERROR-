// Declaración de la variable contador e inicialización en 1
let contador = 1;

// Añadiendo un event listener al botón con la clase "boton1", que llama a la función empezar cuando se hace clic en él
document.querySelector(".boton1").addEventListener("click", empezar);

// Definición de la función empezar
function empezar() {
  // Cambiando el contenido HTML de la clase "caja" con botones y un div para mostrar el contador
  document.querySelector(".caja").innerHTML = `
    <button class="boton2">Añadir 1</button>
    <button class="boton5">Restar 1</button> <!-- Nuevo botón para restar 1 -->
    <button class="boton3">Reiniciar</button>
    <div class="contador"></div>
    <button class="boton4">Empezar de nuevo</button>
    `;
  // Llamando a la función actualizar para mostrar el contador inicial
  actualizar();
  // Añadiendo event listeners a los botones recién creados para llamar a las funciones correspondientes cuando se haga clic en ellos
  document.querySelector(".boton2").addEventListener("click", incrementar);
  document.querySelector(".boton5").addEventListener("click", decrementar); // Event listener para el botón de restar 1
  document.querySelector(".boton3").addEventListener("click", reiniciar);
  document.querySelector(".boton4").addEventListener("click", empezarDeNuevo);

  // Añadiendo un event listener al círculo blanco con clase "circulo" que llama a la función crearSelect cuando se hace clic en él
  document.querySelector(".circulo").addEventListener("click", crearSelect);
}

// Definición de la función incrementar
function incrementar() {
  // Incrementando el contador en 1
  ++contador;
  // Llamando a la función actualizar para reflejar el nuevo valor del contador en el HTML
  actualizar();
}

// Definición de la función decrementar
function decrementar() {
  // Decrementando el contador en 1
  --contador;
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

// Definición de la función empezarDeNuevo
function empezarDeNuevo() {
  // Restaurando el contenido HTML original con solo el botón "Empezar"
  document.querySelector(".caja").innerHTML = `
    <button class="boton1">Empezar</button>
  `;
  // Añadiendo el event listener al botón "Empezar" para llamar a la función empezar cuando se haga clic en él
  document.querySelector(".boton1").addEventListener("click", empezar);
}

// Definición de la función actualizar
function actualizar() {
  // Actualizando el contenido del div con la clase "contador" para mostrar el valor actualizado del contador
  document.querySelector(".contador").innerHTML = contador;
}

// Definición de la función para crear el select y mostrar el precio
function crearSelect() {
  // Creando un elemento input de tipo número
  let inputElement = document.createElement("input");
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("min", "1"); // Estableciendo el valor mínimo
  inputElement.setAttribute("placeholder", "Cantidad");

  // Añadiendo el input al DOM dentro de la clase "caja"
  document.querySelector(".caja").appendChild(inputElement);

  // Creando un elemento div para mostrar el precio
  let precioDiv = document.createElement("div");
  precioDiv.classList.add("precio");
  document.querySelector(".caja").appendChild(precioDiv);

  // Añadiendo event listener para actualizar el precio cuando se cambia la cantidad
  inputElement.addEventListener("input", actualizarPrecio);
}

// Definición de la función para actualizar el precio según la cantidad introducida
function actualizarPrecio() {
  let cantidad = parseInt(this.value); // Obteniendo la cantidad introducida
  let precio; // Variable para almacenar el precio

  // Determinando el precio según la cantidad introducida
  if (cantidad >= 1 && cantidad <= 4) {
    precio = cantidad * 10; // Precio para 1 a 4 unidades
  } else if (cantidad >= 5 && cantidad <= 99) {
    precio = cantidad * 8; // Precio para 5 a 99 unidades
  } else if (cantidad >= 100 && cantidad <= 500) {
    precio = cantidad * 5; // Precio para 100 a 500 unidades
  } else {
    precio = "Precio no disponible"; // Mensaje de precio no disponible para otras cantidades
  }

  // Actualizando el contenido del div con la clase "precio" para mostrar el precio
  document.querySelector(".precio").innerHTML = "Precio total: $" + precio;
}
