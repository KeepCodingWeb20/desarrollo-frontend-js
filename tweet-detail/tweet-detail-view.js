export const buildTweetDetail = (tweet) => {
  const readableDate = new Date(tweet.updatedAt);

  const likes = `<p>Este tweet le ha gustado a ${tweet.likes} personas</p>`

  return `
    <div>
      <h3>El usuario ${tweet.user.username} escribió el ${readableDate.toLocaleDateString()} lo siguiente:</h3>
      <h4>${tweet.content}</h4>
      ${tweet.likes > 0 ? likes : ''}
    </div>
  `
}

export const buildRemoveTweetButton = () => {
  const removeTweetButton = document.createElement('button')
  removeTweetButton.textContent = 'Eliminar tweet';

  return removeTweetButton
}


// "content": "prueba creación tweet",
//     "userId": 1,
//     "updatedAt": "2026-05-04T19:34:52.628Z",
//     "id": 1
//  "likes": 1
//  "user": { "username": "email@email.com" }