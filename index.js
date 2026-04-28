import { notificationsController } from "./notifications/notification-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";
import { tweetListController } from "./tweet-list/tweet-list-controller.js";

// el orquestador ejecutará el/los controlador/controladores

const tweetsContainer = document.querySelector('.tweets-container');
const spinnerContainer = document.querySelector('.spinner-container');
const notificationsContainer = document.querySelector('.notifications-container');


const { showSpinner, hideSpinner } = spinnerController(spinnerContainer)
tweetsContainer.addEventListener("loadTweetsStarted", showSpinner)
tweetsContainer.addEventListener("loadTweetsFinished", hideSpinner)

const { showNotification } = notificationsController(notificationsContainer)

tweetsContainer.addEventListener("loadTweetsFailed", (event) => {
  showNotification(event.detail.message, event.detail.type)

  setTimeout(() => {
    showNotification("segunda notificación", "success")
  }, 1500);
  setTimeout(() => {
    showNotification("tercera notificación", "success")
  }, 3500);
})

tweetListController(tweetsContainer);
