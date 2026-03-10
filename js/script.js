// ============================================================
//  COOKIE CLICKER - CIVILIZATION EDITION
//  Practica de JavaScript: Manipulacion del DOM y Eventos
// ============================================================

// ------------------------------------------------------------
// DATOS: Citas organizadas por eras (ya estan aqui, no las toques)
//
// "eras" es un array de objetos. Cada objeto tiene:
//   - era:   string con el nombre de la era (ej: "Era Antigua")
//   - citas: array de objetos, cada uno con "tecnologia", "texto" y "autor"
//
// Ejemplo de acceso:
//   eras[0].era              --> "Era Antigua"
//   eras[0].citas[1].texto   --> "I think, therefore I am."
//   eras[0].citas[1].autor   --> "René Descartes"
// ------------------------------------------------------------
const eras = [
  {
    era: "Era Antigua",
    imagen: "assets/galleta-antigua.jpg",
    citas: [
      { tecnologia: "Agricultura", 
        texto: "Oh, granjeros, rezad para que vuestros veranos sean húmedos y vuestros inviernos claros.", 
        autor: "Virgilio" },
      { tecnologia: "Ganadería", 
        texto: "Bendito sea el fruto de tu ganado, el aumento de tus vacas y los rebaños de tus ovejas.", 
        autor: "La Biblia, Deut. 28:4" },
      { tecnologia: "Tiro con arco", 
        texto: "No lances la flecha que se volverá contra ti.", 
        autor: "Proverbio kurdo" },
      { tecnologia: "Forja del bronce", 
        texto: "Es del todo decoroso para un joven muerto en la batalla yacer destrozado por la lanza de bronce. En su muerte todo parece hermoso.", 
        autor: "Homero" },
      { tecnologia: "Pesca", 
        texto: "Dale un pez a un hombre y comerá un día. Enséñale a pescar y comerá toda la vida.", 
        autor: "Lao Tsé" },
      { tecnologia: "Equitación", 
        texto: "Si dices la verdad, ten un pie en el estribo.", 
        autor: "Proverbio turco" },
      { tecnologia: "Caza", 
        texto: "Si persigues dos conejos, perderás a ambos.", 
        autor: "Dicho nativo americano" },
      { tecnologia: "Albañilería", 
        texto: "Es de sus enemigos, no de sus amigos, de quienes las ciudades aprenden la lección de construir altos muros.", 
        autor: "Aristófanes" },
      { tecnologia: "Meditación", 
        texto: "La meditación trae sabiduría; la falta de meditación deja ignorancia. Conoce bien qué te lleva hacia adelante y qué te frena.", 
        autor: "Buda" },
      { tecnologia: "Minería", 
        texto: "El hombre que mueve una montaña comienza llevándose pequeñas piedras.", 
        autor: "Confucio" },
      { tecnologia: "Navegación a vela", 
        texto: "No puedes dirigir el viento, pero puedes ajustar tus velas.", 
        autor: "Desconocido" }  
     ]
  },
  //Completa tu el resto
];


// ------------------------------------------------------------
// PASO 1 - REFERENCIAS AL DOM
// Usa document.getElementById() para guardar en variables
// los elementos HTML que vamos a necesitar.
// ------------------------------------------------------------

// TODO: Obtén el elemento con id "btn-galleta" y guárdalo en btnGalleta
const btnGalleta = document.getElementById("btn-galleta");

// TODO: Obtén el elemento del contador (id "contador")
const elContador = document.getElementById("contador");

// TODO: Obtén el botón de reset (id "btn-reset")
const btnReset = document.getElementById("btn-reset");

// TODO: Obtén los botones de mejora
const btnTamano = document.getElementById("btn-tamano");   // id "btn-tamano"
const btnSuerte = document.getElementById("btn-suerte");   // id "btn-suerte"

// TODO: Obtén los spans donde se muestra el coste de cada mejora
const elCosteTamano = document.getElementById("coste-tamano");   // id "coste-tamano"
const elCosteSuerte = document.getElementById("coste-suerte");   // id "coste-suerte"

// TODO: Obtén el span que muestra el nivel de la mejora de tamano (id "nivel-tamano")
const elNivelTamano = document.getElementById("nivel-tamano");

// TODO: Obtén el span con el numero de citas desbloqueadas (id "num-citas")
const elNumCitas = document.getElementById("num-citas");

// TODO: Obtén el <ul> donde añadiremos las citas (id "lista-citas")
const listaCitas = document.getElementById("lista-citas");

// TODO: Obtén el parrafo de mensaje "sin citas" (id "msg-sin-citas")
const msgSinCitas = document.getElementById("msg-sin-citas");

// TODO: Obtén la imagen del banner (id "banner-img")
const bannerImg = document.getElementById("banner-img");

// TODO: Obtén el span con el nombre de la era del banner (id "banner-nombre-era")
const bannerNombreEra = document.getElementById("banner-nombre-era");


// ------------------------------------------------------------
// PASO 2 - VARIABLES DE ESTADO DEL JUEGO
// Aqui guardamos los datos que cambian mientras juegas.
// ------------------------------------------------------------

let galletas = 0;           // Galletas actuales del jugador
let valorClick = 1;         // Cuanto vale cada click (empieza en 1)
let nivelTamano = 0;        // Cuantas veces se ha comprado la mejora de tamano
let numCitas = 0;           // Cuantas citas se han desbloqueado

// Costes actuales de cada mejora (cambian cada vez que se compra)
let costeTamano = 10;
let costeSuerte = 50;

// Tamanos del emoji de la galleta segun nivel (en rem). Ya estan definidos.
const TAMANOS_GALLETA = [7, 9, 11, 13, 15, 17];   // eras 1-6

// --- Estado de las citas por eras ---
// indiceEra: en que era estamos ahora mismo (empieza en 0 = Era Antigua)
let indiceEra = 0;

// citasDisponibles: copia de las citas de la era actual que aun no se han mostrado.
// Se rellena en inicializar() y cada vez que se agota una era.
// Pista: usa el metodo .slice() para copiar el array sin modificar el original.
let citasDisponibles = [];


// ------------------------------------------------------------
// PASO 3 - FUNCIONES
// Implementa cada funcion. Lee los comentarios con atencion.
// ------------------------------------------------------------

/**
 * Actualiza el texto del contador en el HTML con el valor actual
 * de la variable "galletas".
 * Pista: modifica la propiedad textContent del elemento elContador.
 */
function actualizarContador() {
  elContador.textContent = galletas;
}

/**
 * Comprueba si el jugador puede permitirse cada mejora y activa
 * o desactiva (disabled) los botones correspondientes.
 * Pista: un boton tiene la propiedad .disabled = true / false
 */
function actualizarBotones() {
  // TODO: deshabilita btnTamano si galletas < costeTamano
  btnTamano.disabled = galletas < costeTamano;
  // TODO: deshabilita btnSuerte si galletas < costeSuerte
  btnSuerte.disabled = galletas < costeSuerte;
}

/**
 * Se ejecuta cada vez que el jugador hace click en la galleta.
 * Debe:
 *   1. Sumar "valorClick" a "galletas"
 *   2. Llamar a actualizarContador()
 *   3. Llamar a actualizarBotones()
 */
function clickGalleta() {
  galletas += valorClick;
  actualizarContador();
  actualizarBotones();
}

/**
 * Resetea el juego al estado inicial:
 *   - galletas = 0, valorClick = 1, nivelTamano = 0, numCitas = 0
 *   - costeTamano = 10, costeSuerte = 50
 *   - indiceEra = 0
 *   - Recarga citasDisponibles con las citas de la era 0
 *   - Actualiza el contador y los botones en el DOM
 *   - Devuelve el tamano de la galleta al inicial (TAMANOS_GALLETA[0])
 *   - Actualiza elNivelTamano y elNumCitas a 0
 *   - Vacia la lista de citas (listaCitas.innerHTML = "")
 *   - Muestra el mensaje "sin citas" (msgSinCitas.style.display = "block")
 *   - Actualiza los costes mostrados en elCosteTamano y elCosteSuerte
 *   - Vuelve el banner a la imagen y nombre de la era 0
 */
function resetear() {
  // TODO
  galletas = 0;
  valorClick = 1;
  nivelTamano = 0;
  numCitas = 0;
  costeTamano = 10;
  costeSuerte = 50;
  indiceEra = 0;
}

/**
 * Compra la mejora "Galleta gigante" si el jugador puede pagarla.
 *   1. Resta costeTamano de galletas
 *   2. Duplica valorClick
 *   3. Incrementa nivelTamano
 *   4. Calcula el nuevo coste: costeTamano = costeTamano * 2
 *   5. Actualiza el tamano visual de btnGalleta.style.fontSize
 *      Usa TAMANOS_GALLETA[nivelTamano] si existe, o el ultimo si ya no hay mas
 *      El valor debe ser una string con la unidad: por ejemplo "9rem"
 *   6. Actualiza elNivelTamano.textContent
 *   7. Actualiza elCosteTamano.textContent con el nuevo coste
 *   8. Llama a actualizarContador() y actualizarBotones()
 */
function comprarTamano() {
  // TODO: primero comprueba que galletas >= costeTamano (aunque el boton
  //       ya estara deshabilitado, es buena practica comprobarlo igual)

  if (galletas >= costeTamano) {
    galletas -= costeTamano;
    valorClick *= 2;
    nivelTamano++;
    costeTamano *= 2;

    const nuevoTamanio = TAMANOS_GALLETA[Math.min(nivelTamano, TAMANOS_GALLETA.length - 1)];
    btnGalleta.style.fontSize = nuevoTamanio + "rem";
    
    elNivelTamano.textContent = nivelTamano;
    elCosteTamano.textContent = costeTamano;
  }

}

/**
 * Compra la mejora "Galletita de la suerte" si el jugador puede pagarla.
 *
 * La cita debe salir de la ERA ACTUAL (indiceEra), eligiendo al azar
 * entre las que quedan en citasDisponibles.
 * Cuando se agoten todas las citas de una era, se pasa automaticamente
 * a la siguiente (indiceEra++) y se recarga citasDisponibles.
 * Si ya no hay mas eras, no se hace nada.
 *
 * Pasos:
 *   1. Comprueba que galletas >= costeSuerte
 *   2. Resta costeSuerte de galletas
 *   3. Elige un indice aleatorio dentro de citasDisponibles
 *      Pista: Math.floor(Math.random() * citasDisponibles.length)
 *   4. Guarda la cita elegida y elimínala de citasDisponibles
 *      Pista: splice(indice, 1) elimina un elemento de un array y lo devuelve
 *   5. Crea un nuevo <li> con clase "cita-item" y con el HTML:
 *        <span class="cita-texto">"[texto de la cita]"</span>
 *        <span class="cita-autor">- [autor] · [nombre de la era actual]</span>
 *      Pista: document.createElement("li") e innerHTML
 *   6. Anade el <li> al principio de listaCitas con prepend()
 *   7. Si citasDisponibles quedo vacia, avanza a la siguiente era:
 *        indiceEra++
 *        Si aun hay mas eras (indiceEra < eras.length):
 *          - recarga citasDisponibles
 *          - actualiza bannerImg.src con eras[indiceEra].imagen
 *          - actualiza bannerNombreEra.textContent con eras[indiceEra].era
 *   8. Incrementa numCitas y actualiza elNumCitas.textContent
 *   9. Dobla el coste: costeSuerte = costeSuerte * 2
 *  10. Actualiza elCosteSuerte.textContent
 *  11. Oculta msgSinCitas (style.display = "none")
 *  12. Llama a actualizarContador() y actualizarBotones()
 */
function comprarSuerte() {
  // TODO
}


// ------------------------------------------------------------
// PASO 4 - EVENTOS
// Conecta cada funcion con su elemento del DOM usando addEventListener.
// El evento de click se llama "click".
// ------------------------------------------------------------

// TODO: cuando se haga click en btnGalleta, ejecutar clickGalleta
// TODO: cuando se haga click en btnReset, ejecutar resetear
// TODO: cuando se haga click en btnTamano, ejecutar comprarTamano
// TODO: cuando se haga click en btnSuerte, ejecutar comprarSuerte

btnGalleta.addEventListener("click", clickGalleta);

// ------------------------------------------------------------
// PASO 5 - INICIALIZACION
// Carga las citas de la primera era y arranca el DOM.
// ------------------------------------------------------------
function inicializar() {
  // TODO: copia las citas de eras[0] en citasDisponibles usando .slice()
  // TODO: llama a actualizarContador() y actualizarBotones()
  actualizarContador();
  actualizarBotones();
}

inicializar();
