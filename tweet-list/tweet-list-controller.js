import { getTweets } from "./tweet-list-model.js"
import { buildTweet } from "./tweet-list-view.js";


export const tweetListController = async (tweetContainer) => {

  try {
    // mostrar ruleta
    const tweets = await getTweets();
    showTweets(tweets, tweetContainer);
  } catch (error) {
    alert('no ha sido posible obtener tweets')
  } finally {
    // ocultar ruleta
  }

  

}

const showTweets = (tweets, tweetContainer) => {
  tweets.forEach((tweet) => {
    const newTweetElement = buildTweet(tweet);
    tweetContainer.appendChild(newTweetElement)
  });
}
