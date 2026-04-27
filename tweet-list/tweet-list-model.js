

export const getTweets = async () => {
  
  // fetch al endpoint de sparrest localhost:8000/api/tweets
  const response = await fetch('http://localhost:8000/api/tweets');
  const tweets = await response.json();
  
  // guardar la respuesta en una variable y devolverla
  return tweets;
}