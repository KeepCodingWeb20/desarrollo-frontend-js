import { getTweets } from "./tweet-list-model.js"
import { buildTweet } from "./tweet-list-view.js";


export const tweetListController = async (tweetContainer) => {
  
  try {
    const tweets = await getTweets();
    showTweets(tweets);
  } catch (error) {
    alert('no ha sido posible obtener tweets')
  }


  const showTweets = (tweets) => {
    tweets.forEach((tweet) => {
      const newTweetElement = buildTweet(tweet);
      tweetContainer.appendChild(newTweetElement)
    });
  }
}




// los controladores recibirán e
//  nodo del DOM que tienen que gestionar 
