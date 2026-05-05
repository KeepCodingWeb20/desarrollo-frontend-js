export const getTweetById = async (tweetId) => {

  const url = `http://localhost:8000/api/tweets2/${tweetId}?_expand=user`;

  const response = await fetch(url);
  const data = await response.json()

  if (!response.ok) {
    throw new Error('El tweet no existe')
  }

  return data;
}