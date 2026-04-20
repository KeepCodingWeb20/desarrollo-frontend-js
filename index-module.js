//  MODULO JS
// las variables tienen un ámbito LOCAL a este módulo

console.log("hello world desde index.js! module");

console.log(a);

export const b = 3;


// Primer Ejercicio
// escribamos código JS para que modifiquemos el valor del input y pongamos nuestro nombre.
// pasados 5 segundos (setTimeout -> https://developer.mozilla.org/es/docs/Web/API/Window/setTimeout)
// actualizaremos el input para que pase a ser de tipo password en lugar de texto (setAttribute)

// 1- tengo que ir al DOM a por un input
const input = document.querySelector('input');

// 2- cambiar el contenido de ese input usando .value
input.value = 'Edu'

// 3- usar setTimeout para hacer algo tras 5 segs
setTimeout(() => {
  input.setAttribute('type', 'password')
}, 5000);

// 4- utilizar setAttribute sobre el input para pasarlo a pw



// Segundo ejercicio
// vamos a incluir una imagen aleatoria dentro de la primera sección.

// 1- crear elemento img
const newImage = document.createElement('img');

// 2- actualizar el valor de la propiedad src de la imagen
newImage.src = 'https://www.rodi.es/blog/wp-content/uploads/2016/04/coche-disney-cars-ayo-mc-queen.jpg';
// newImage.setAttribute('src', '')

// 3- obtener nodo de destino donde incluiremos nuestra imagen.
const firstSection = document.querySelector('.section-1');

// 4- incluir la imagen en el destino usando appendChild
firstSection.appendChild(newImage)