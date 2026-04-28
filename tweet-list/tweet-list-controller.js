import { getTweets } from "./tweet-list-model.js"
import { buildTweet } from "./tweet-list-view.js";


export const tweetListController = async (tweetContainer) => {

  try {
    const tweetsLoadingEvent = new CustomEvent("loadTweetsStarted")
    tweetContainer.dispatchEvent(tweetsLoadingEvent)
    const tweets = await getTweets();
    showTweets(tweets, tweetContainer);
  } catch (error) {
    // alert('no ha sido posible obtener tweets')
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    const tweetsFailedEvent = new CustomEvent("loadTweetsFailed")
    tweetContainer.dispatchEvent(tweetsFailedEvent)
  } finally {
    const tweetsLoadedEvent = new CustomEvent("loadTweetsFinished")
    tweetContainer.dispatchEvent(tweetsLoadedEvent)
  }

  

}

const showTweets = (tweets, tweetContainer) => {
  tweets.forEach((tweet) => {
    const newTweetElement = buildTweet(tweet);
    tweetContainer.appendChild(newTweetElement)
  });
}
