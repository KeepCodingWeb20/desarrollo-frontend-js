import { getLoggedUserInfo, getTweetById } from "./tweet-detail-model.js";
import { buildRemoveTweetButton, buildTweetDetail } from "./tweet-detail-view.js";

export const tweetDetailController = async (tweetDetailContainer) => {

  const searchParams = new URLSearchParams(window.location.search);
  const tweetId = searchParams.get("id")

  if (!tweetId) {
    window.location = '/'
  } else {
    try {
      const tweet = await getTweetById(tweetId);
      tweetDetailContainer.innerHTML = buildTweetDetail(tweet)
      handleRemoveTweetButton(tweet.userId, tweetDetailContainer)
    } catch (error) {
      alert(error.message)
      window.location = '/'
    }
  }

}

const handleRemoveTweetButton = async (tweetUserId, tweetDetailContainer) => {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const loggedUser = await getLoggedUserInfo()
      if (loggedUser.id === tweetUserId) {
        const removeTweetButton = buildRemoveTweetButton()
        tweetDetailContainer.appendChild(removeTweetButton)
      }
    } catch (error) {
      
    }
  }
}