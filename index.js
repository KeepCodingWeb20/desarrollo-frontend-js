const tweets = [{
   handler: '@usuario1',
   createdAt: new Date().toISOString(),
   message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
   likes: 40,
 },
 {
   handler: '@usuario2',
   createdAt: new Date().toISOString(),
   message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
   likes: 3,
   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1n_mfMKBHqSNMvn1dP_hChhGkmGblbArRaw&s"
 },
 {
   handler: '@usuario3',
   createdAt: new Date().toISOString(),
   message: 'Ayer estuve en le parque y me lo pasé genial',
   likes: 34,
   image: "https://cdn.aarp.net/content/dam/aarp/entertainment/television/2017/07/1140-world-cup-trophy-ball-trivia-esp.jpg"
 },
 {
   handler: '@usuario4',
   createdAt: new Date().toISOString(),
   message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
   likes: 400,
 }];

// 1- Crear un nodo de destino para mis tweets

  const container = document.querySelector('.tweets-container');

// 2- iterar sobre el array de tweets
tweets.forEach((tweet) => {

  // 3- por cada tweet, crear una estructura HTML con los datos del tweet
  const newTweet = document.createElement('div');
  newTweet.classList.add('tweet')

  // const header = document.createElement('h4');
  // header.textContent = `${tweet.handler} - ${tweet.createdAt}`;

  // const p1 = document.createElement('p')
  // p1.textContent = tweet.message

  // const p2 = document.createElement('p')
  // p2.textContent = tweet.likes

  // newTweet.appendChild(header)
  // newTweet.appendChild(p1)
  // newTweet.appendChild(p2)

  newTweet.innerHTML = `
    <h4>${tweet.handler} - ${tweet.createdAt}</h4>
    <p>${tweet.message}</p>
    <p>${tweet.likes}</p>
  `

  container.appendChild(newTweet)

})


// 4- añadir cada nodo creado al DOM