import { tweets } from "./tweet-list-model.js"
import { buildTweet } from "./tweet-list-view.js";


export const tweetListController = (tweetContainer) => {
  
  tweets.forEach((tweet) => {
    const newTweetElement = buildTweet(tweet);
    tweetContainer.appendChild(newTweetElement)
  });
}


// los controladores recibirán e
//  nodo del DOM que tienen que gestionar 
