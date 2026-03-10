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
  {
    era: "Era Clásica",
    imagen: "assets/galleta-clasica.jpg",
    citas: [
      { tecnologia: "Alfabeto",
        texto: "Las palabras tienen el poder de destruir y sanar. Cuando las palabras son verdaderas y amables, pueden cambiar nuestro mundo.",
        autor: "Buda" },
      { tecnologia: "Brújula",
        texto: "Los hombres más sabios siguen su propia dirección.",
        autor: "Eurípides" },
      { tecnologia: "Construcción",
        texto: "Y en el pedestal aparecen estas palabras: 'Mi nombre es Ozymandias, rey de reyes: ¡Contemplad mis obras, oh Poderosos, y desesperad!'. No queda nada más.",
        autor: "Percy Bysshe Shelley" },
      { tecnologia: "Moneda",
        texto: "Todo vale lo que su comprador esté dispuesto a pagar por ello.",
        autor: "Publilio Siro" },
      { tecnologia: "Literatura",
        texto: "Algunos libros son para ser probados, otros para ser tragados, y algunos para ser masticados y digeridos.",
        autor: "Sir Francis Bacon" },
      { tecnologia: "Matemáticas",
        texto: "Si en otras ciencias llegamos a la certeza sin duda y a la verdad sin error, nos incumbe poner los cimientos del conocimiento en las matemáticas.",
        autor: "Roger Bacon" }
    ]
  },
  { era: "Era Medieval",
    imagen: "assets/galleta-medieval.jpg",
    citas: [
      { tecnologia: "Banca",
      texto: "Los establecimientos bancarios son más peligrosos que los ejércitos permanentes.",
      autor: "Thomas Jefferson" },
      { tecnologia: "Ingeniería",
        texto: "Un diseñador sabe que ha alcanzado la perfección no cuando ya no queda nada que añadir, sino cuando ya no queda nada que quitar.",
        autor: "Antoine de Saint-Exupéry" },
      { tecnologia: "Óptica",
        texto: "Uno no descubre nuevas tierras sin perder de vista la orilla.",
        autor: "André Gide" },
      { tecnologia: "Filosofía",
        texto: "He ganado esto por la filosofía: que hago sin que me lo manden lo que otros hacen solo por miedo a la ley.",
        autor: "Aristóteles" }
    ]
  },
  {
    era: "Era Renacentista",
    imagen: "assets/galleta-renacentista.jpg",
    citas: [
      { tecnologia: "Astronomía",
      texto: "La astronomía obliga al alma a mirar hacia arriba y nos lleva de este mundo a otro.",
      autor: "Platón" },
      { tecnologia: "Pólvora",
      texto: "Puedes conseguir más de lo que quieres con una palabra amable y un arma que solo con una palabra amable.",
      autor: "Al Capone" },
      { tecnologia: "Nacionalismo",
      texto: "Un hombre no se hace matar por medio penique al día o por una pequeña distinción. Debes hablarle al alma para electrificarlo.",
      autor: "Napoleón Bonaparte" },
      { tecnologia: "Imprenta",
      texto: "Lo que la pólvora hizo por la guerra, la imprenta lo ha hecho por la mente.",
      autor: "Wendell Phillips" }
    ]
  },
  { era: "Era Industrial",
    imagen: "assets/galleta-industrial.jpg",
    citas: [
      { tecnologia: "Biología",
      texto: "No es la más fuerte de las especies la que sobrevive, sino la que mejor responde al cambio.",
      autor: "Charles Darwin" },
      { tecnologia: "Comunismo",
      texto: "Cuando doy comida a los pobres, me llaman santo. Cuando pregunto por qué los pobres no tienen comida, me llaman comunista.",
      autor: "Dom Helder Camara" },
      { tecnologia: "Fisión",
      texto: "Si el resplandor de mil soles estallara de una vez en el cielo, sería como el esplendor del Todopoderoso... Me he convertido en la Muerte, el Destructor de Mundos.",
      autor: "J. Robert Oppenheimer, citando el \"Bhagavad Gita\"" },
      { tecnologia: "Medicina",
      texto: "En cuanto a las enfermedades, adquiere el hábito de dos cosas: ayudar, o al menos, no hacer daño.",
      autor: "Hipócrates" }
    ]
  },
  { era: "Era Industrial",
    imagen: "assets/galleta-industrial.jpg",
    citas: [
      { tecnologia: "Ordenadores",
      texto: "Nunca confíes en un ordenador que no puedas tirar por la ventana.",
      autor: "Steve Wozniak" },
      { tecnologia: "Ecología",
      texto: "No heredamos la tierra de nuestros antepasados, la tomamos prestada de nuestros hijos.",
      autor: "Canción nativa americana" },
      { tecnologia: "Vuelo",
      texto: "Una vez que hayas probado el vuelo, caminarás por la tierra con los ojos mirando al cielo, porque allí has estado y allí anhelarás volver.",
      autor: "Leonardo Da Vinci" },
      { tecnologia: "Radio",
      texto: "Entonces una hermosa mañana ella sintoniza una emisora de Nueva York. Sabes que su vida fue salvada por el Rock 'n' Roll.",
      autor: "The Velvet Underground, \"Rock And Roll\"" },
      { tecnologia: "Robótica",
      texto: "El verdadero problema no es si las máquinas piensan, sino si los hombres lo hacen.",
      autor: "B.F. Skinner" },
      { tecnologia: "Láser",
      texto: "Nada viaja más rápido que la velocidad de la luz, con la posible excepción de las malas noticias, que obedecen a sus propias leyes especiales.",
      autor: "Douglas Adams" }
    ]
  }
];


// ------------------------------------------------------------
// PASO 1 - REFERENCIAS AL DOM
// Usa document.getElementById() para guardar en variables
// los elementos HTML que vamos a necesitar.
// ------------------------------------------------------------

// DONE: Obtén el elemento con id "btn-galleta" y guárdalo en btnGalleta
const btnGalleta = document.getElementById("btn-galleta");

// DONE: Obtén el elemento del contador (id "contador")
const elContador = document.getElementById("contador");

// DONE: Obtén el botón de reset (id "btn-reset")
const btnReset = document.getElementById("btn-reset");

// DONE: Obtén los botones de mejora
const btnTamano = document.getElementById("btn-tamano");   // id "btn-tamano"
const btnSuerte = document.getElementById("btn-suerte");   // id "btn-suerte"

// DONE: Obtén los spans donde se muestra el coste de cada mejora
const elCosteTamano = document.getElementById("coste-tamano");   // id "coste-tamano"
const elCosteSuerte = document.getElementById("coste-suerte");   // id "coste-suerte"

// DONE: Obtén el span que muestra el nivel de la mejora de tamano (id "nivel-tamano")
const elNivelTamano = document.getElementById("nivel-tamano");

// DONE: Obtén el span con el numero de citas desbloqueadas (id "num-citas")
const elNumCitas = document.getElementById("num-citas");

// DONE: Obtén el <ul> donde añadiremos las citas (id "lista-citas")
const listaCitas = document.getElementById("lista-citas");

// DONE: Obtén el parrafo de mensaje "sin citas" (id "msg-sin-citas")
const msgSinCitas = document.getElementById("msg-sin-citas");

// DONE: Obtén la imagen del banner (id "banner-img")
const bannerImg = document.getElementById("banner-img");

// DONE: Obtén el span con el nombre de la era del banner (id "banner-nombre-era")
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
  // DONE: deshabilita btnTamano si galletas < costeTamano
  btnTamano.disabled = galletas < costeTamano;
  // DONE: deshabilita btnSuerte si galletas < costeSuerte o no quedan citas
  btnSuerte.disabled = galletas < costeSuerte || citasDisponibles.length === 0;
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
  citasDisponibles = eras[indiceEra].citas.slice();
  actualizarContador();
  actualizarBotones();
  btnGalleta.style.fontSize = TAMANOS_GALLETA[0] + "rem";
  elNivelTamano.textContent = nivelTamano;
  elNumCitas.textContent = numCitas;
  listaCitas.innerHTML = "";
  msgSinCitas.style.display = "block";
  elCosteTamano.textContent = costeTamano;
  elCosteSuerte.textContent = costeSuerte;
  bannerImg.src = eras[indiceEra].imagen;
  bannerNombreEra.textContent = eras[indiceEra].era;
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

    actualizarContador();
    actualizarBotones();
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
  // DONE
  if (galletas < costeSuerte || citasDisponibles.length === 0) {
    return; // No se puede comprar. Esta es otra manera de programar para no tener que anidar todo dentro del if.
  }
  galletas -= costeSuerte;
  const indiceAleatorio = Math.floor(Math.random() * citasDisponibles.length);
  const citaElegida = citasDisponibles.splice(indiceAleatorio, 1)[0]; // splice devuelve un array con los elementos eliminados, por eso [0]

  const nuevoLi = document.createElement("li");
  nuevoLi.classList.add("cita-item");
  nuevoLi.innerHTML = `
    <span class="cita-texto">"${citaElegida.texto}"</span>
    <span class="cita-autor">- ${citaElegida.autor} · ${eras[indiceEra].era}</span>
  `;
  listaCitas.prepend(nuevoLi);

  if (citasDisponibles.length === 0) {
    indiceEra++;
    if (indiceEra < eras.length) {
      citasDisponibles = eras[indiceEra].citas.slice();
      bannerImg.src = eras[indiceEra].imagen;
      bannerNombreEra.textContent = eras[indiceEra].era;
    }
  }

  numCitas++;
  elNumCitas.textContent = numCitas;
  costeSuerte *= 2;
  elCosteSuerte.textContent = costeSuerte;
  msgSinCitas.style.display = "none";
  actualizarContador();
  actualizarBotones();
}

// ------------------------------------------------------------
// PASO 4 - EVENTOS
// Conecta cada funcion con su elemento del DOM usando addEventListener.
// El evento de click se llama "click".
// ------------------------------------------------------------

// DONE: cuando se haga click en btnGalleta, ejecutar clickGalleta
// DONE: cuando se haga click en btnReset, ejecutar resetear
// DONE: cuando se haga click en btnTamano, ejecutar comprarTamano
// DONE: cuando se haga click en btnSuerte, ejecutar comprarSuerte

btnGalleta.addEventListener("click", clickGalleta);
btnReset.addEventListener("click", resetear);
btnTamano.addEventListener("click", comprarTamano);
btnSuerte.addEventListener("click", comprarSuerte);
// ------------------------------------------------------------
// PASO 5 - INICIALIZACION
// Carga las citas de la primera era y arranca el DOM.
// ------------------------------------------------------------
function inicializar() {
  // DONE: copia las citas de eras[0] en citasDisponibles usando .slice()
  citasDisponibles = eras[0].citas.slice();
  // DONE: llama a actualizarContador() y actualizarBotones()
  actualizarContador();
  actualizarBotones();
}

inicializar();
