import { spinnerController } from "./spinner/spinner-controller.js";
import { tweetListController } from "./tweet-list/tweet-list-controller.js";

// el orquestador ejecutará el/los controlador/controladores

const tweetsContainer = document.querySelector('.tweets-container');
const spinnerContainer = document.querySelector('.spinner-container');


const { showSpinner, hideSpinner } = spinnerController(spinnerContainer)
tweetsContainer.addEventListener("loadTweetsStarted", showSpinner)
tweetsContainer.addEventListener("loadTweetsFinished", hideSpinner)


tweetListController(tweetsContainer);



// el Modelo se encarga de obtención de datos
// la vista se encarga de la generación de código HTML que usaremos
// el controlador hace de intermediario entre el modelo y la vista.
// Gestiona un único nodo del DOM.


/*

// create custom events
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});
const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});

const element = document.createElement("div"); // create a <div> element

// add an appropriate event listener
element.addEventListener("animalfound", (e) => console.log(e.detail.name));

// dispatch the events
element.dispatchEvent(catFound);
element.dispatchEvent(dogFound);

// "cat" and "dog" logged in the console

*/
