import { getTweetById } from "./tweet-detail-model.js";
import { buildTweetDetail } from "./tweet-detail-view.js";

export const tweetDetailController = async (tweetDetailContainer) => {

  const searchParams = new URLSearchParams(window.location.search);
  const tweetId = searchParams.get("id")

  if (!tweetId) {
    window.location = '/'
  } else {
    try {
      const tweet = await getTweetById(tweetId);
      tweetDetailContainer.innerHTML = buildTweetDetail(tweet)
    } catch (error) {
      alert(error.message)
      window.location = '/'
    }
  }
}