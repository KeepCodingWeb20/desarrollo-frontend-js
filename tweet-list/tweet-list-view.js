  

export const buildTweet = (tweet) => {

  const newTweet = document.createElement('div');
  newTweet.classList.add('tweet')

  newTweet.innerHTML = `
    <h4>${tweet.user.username} - ${tweet.updatedAt}</h4>
    <p>${tweet.content}</p>
    <p>${tweet.likes}</p>`;

  return newTweet;

  /**
   * 
   {
    "content": "prueba creación tweet",
    "userId": 1,
    "updatedAt": "2026-05-04T19:34:52.628Z",
    "id": 1
  }
   */
}