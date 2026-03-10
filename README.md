# Cookie Clicker — Civilization Edition

Ejercicio voluntario de JavaScript para practicar manipulación del DOM.

---

## Ramas del repositorio

| Rama | Descripción |
|------|-------------|
| `main` | Código de partida — el `script.js` está vacío para que lo implementes tú |
| `develop` | Solución propuesta — implementación completa como referencia |

---

## ¿Qué es esto?

Un **Cookie Clicker** es un juego incremental muy sencillo: haces click en algo, ganas puntos, y con esos puntos compras mejoras que hacen el juego más fácil o más interesante.

En esta versión, la galleta es nuestra moneda y las mejoras van desbloqueando citas célebres de líderes históricos al estilo de **Civilization IV**, el videojuego de estrategia por turnos de Sid Meier.

El HTML y el CSS ya están hechos. **Tu tarea es implementar todo el JavaScript** en el archivo `script.js`.

---

## Mecánicas del juego

### Contador y click

Cada click en la galleta suma **1 galleta** al contador (al principio). El valor puede aumentar con la mejora de tamaño.

### Botón de reinicio

Vuelve el juego a su estado inicial: contador a cero, mejoras a nivel cero, citas borradas.

### Mejora: Galleta Gigante

- **Efecto:** duplica el valor de cada click (1 → 2 → 4 → 8...).
- **Visual:** la galleta crece en pantalla modificando su tamaño desde JavaScript.
- **Coste exponencial:** primer nivel 10 galletas, luego 20, 40, 80...
- El botón aparece deshabilitado si no tienes suficientes galletas.

### Mejora: Galletita de la Suerte

- **Efecto:** desbloquea una cita célebre y la añade a la lista.
- **Coste exponencial:** empieza en 50 galletas, luego 100, 200, 400...
- El botón aparece deshabilitado si no tienes suficientes galletas.

### Banner de era

Al pie de la página hay un banner con una ilustración que cambia automáticamente cuando se agotan todas las citas de una era y el juego avanza a la siguiente.

---

## El sistema de citas por eras

Las citas están organizadas en **6 eras históricas** inspiradas en Civilization IV:

1. Era Antigua
2. Era Clásica
3. Era Medieval
4. Renacimiento
5. Era Industrial
6. Era Moderna

Cada era tiene sus citas.

- Al comprar una galletita de la suerte, se elige **al azar** una cita de las que quedan en la **era actual**.
- Cuando se agotan todas las citas de una era, el juego **avanza** a la siguiente y cambia el banner.
- Las citas ya mostradas no se repiten dentro de la misma partida.

Los datos ya están en `script.js` como un array de objetos llamado `eras`. En clase ya hemos visto cómo acceder a propiedades de objetos y recorrer arrays, así que no debería pillarte de sorpresa.

---

## Por dónde empezar

El propio `script.js` está dividido en 5 pasos con comentarios que te guían. Síguelos en orden:

1. Seleccionar los elementos del DOM con `getElementById`
2. Entender las variables de estado (ya están declaradas, léelas)
3. Implementar las funciones una a una
4. Conectar cada función a su evento con `addEventListener`
5. Completar `inicializar` para que el juego arranque bien

No hace falta hacerlo todo de golpe. Empieza por hacer que la galleta cuente clicks y ve añadiendo cosas poco a poco.

---

## Cómo abrir el proyecto

Abre `index.html` directamente en el navegador (doble click o arrastrando el archivo). No necesita ninguna configuración especial.

---

## Estructura de archivos

```text
basic-cookie-clicker-civilization/
├── index.html       — estructura HTML (no es necesario modificar)
├── style.css        — estilos (no es necesario modificar)
├── script.js        — aquí está tu trabajo
└── assets/          — imágenes del banner por era
```

Por supuesto, siendo una práctica voluntaria, siéntete libre de modificar el HTML o el CSS para personalizar tu juego. Pero el objetivo principal es practicar JavaScript, así que no es obligatorio. Tiene muchas cosas horribles como el scroll, y la posición de los paneles, pero escapa al objetivo de esta práctica.
