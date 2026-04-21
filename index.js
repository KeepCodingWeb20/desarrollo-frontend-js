import { tweetListController } from "./tweet-list/tweet-list-controller.js";

// el orquestador ejecutará el/los controlador/controladores

const container = document.querySelector('.tweets-container');

tweetListController(container)

// el Modelo se encarga de obtención de datos
// la vista se encarga de la generación de código HTML que usaremos
// el controlador hace de intermediario entre el modelo y la vista.
// Gestiona un único nodo del DOM.