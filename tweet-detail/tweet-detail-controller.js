import { getLoggedUserInfo, getTweetById, removeTweet, updateTweet } from "./tweet-detail-model.js";
import { buildRemoveTweetButton, buildTweetDetail, buildEditTweetButton } from "./tweet-detail-view.js";

export const tweetDetailController = async (tweetDetailContainer) => {

  const searchParams = new URLSearchParams(window.location.search);
  const tweetId = searchParams.get("id")

  if (!tweetId) {
    window.location = '/'
  } else {
    try {
      const tweet = await getTweetById(tweetId);
      tweetDetailContainer.innerHTML = buildTweetDetail(tweet)
      handleUserActions(tweet, tweetDetailContainer)
    } catch (error) {
      alert(error.message)
      window.location = '/'
    }
  }

}

const handleEditTweetButton = (tweet, tweetDetailContainer) => {

  const editTweetButton = buildEditTweetButton();
  tweetDetailContainer.appendChild(editTweetButton);
  editTweetButton.addEventListener('click', async () => {
    const updatedContent = window.prompt("Editar tweet", tweet.content);
    if (updatedContent) {
      try {
        await updateTweet(tweet.id, updatedContent)
        window.location = '/'
      } catch (error) {
        
      }
    }
  })

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

const handleRemoveTweet = (tweet, tweetDetailContainer) => {
  const removeTweetButton = buildRemoveTweetButton()
  tweetDetailContainer.appendChild(removeTweetButton)
  removeTweetButton.addEventListener('click', (event) => {
    confirmRemoveTweet(tweet.id)
  })
}

const handleUserActions = async (tweet, tweetDetailContainer) => {
  const tweetUserId = tweet.userId;
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const loggedUser = await getLoggedUserInfo()
      if (loggedUser.id === tweetUserId) {
        handleRemoveTweet(tweet, tweetDetailContainer);
        handleEditTweetButton(tweet, tweetDetailContainer);
      }
    } catch (error) {
      alert('Error con los datos del usuario')
    }
  }
}