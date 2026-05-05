import { getLoggedUserInfo, getTweetById, removeTweet } from "./tweet-detail-model.js";
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
      handleRemoveTweetButton(tweet, tweetDetailContainer)
    } catch (error) {
      alert(error.message)
      window.location = '/'
    }
  }

}

const confirmRemoveTweet = async (tweetId) => {
  const shouldRemove = window.confirm('¿Realmente quieres eliminar el tweet?');

  if (shouldRemove) {
    try {
      await removeTweet(tweetId);
      window.location = '/'
    } catch (error) {
      
    }
  }
}


const handleRemoveTweetButton = async (tweet, tweetDetailContainer) => {
  const tweetUserId = tweet.userId;
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const loggedUser = await getLoggedUserInfo()
      if (loggedUser.id === tweetUserId) {
        const removeTweetButton = buildRemoveTweetButton()
        tweetDetailContainer.appendChild(removeTweetButton)
        removeTweetButton.addEventListener('click', (event) => {
          confirmRemoveTweet(tweet.id)
        })
      }
    } catch (error) {
      
    }
  }
}