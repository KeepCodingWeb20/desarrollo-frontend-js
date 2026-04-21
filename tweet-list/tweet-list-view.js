  const newTweet = document.createElement('div');
  newTweet.classList.add('tweet')

  newTweet.innerHTML = `
    <h4>${tweet.handler} - ${tweet.createdAt}</h4>
    <p>${tweet.message}</p>
    <p>${tweet.likes}</p>