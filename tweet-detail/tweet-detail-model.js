export const getTweetById = async (tweetId) => {

  const url = `http://localhost:8000/api/tweets2/${tweetId}?_expand=user`;

  const response = await fetch(url);
  const data = await response.json()

  if (!response.ok) {
    throw new Error('El tweet no existe')
  }

  return data;
}

export const getLoggedUserInfo = async () => {
  const url = 'http://localhost:8000/auth/me';
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`,
    }
  })

  const data = await response.json();
  
  return data
}

export const removeTweet = async (tweetId) => {
  const url = `http://localhost:8000/api/tweets2/${tweetId}`;
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': `bearer ${token}`,
    }
  })

}

export const updateTweet = async (tweetId, content) => {
  const url = `http://localhost:8000/api/tweets2/${tweetId}`;
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`,
    },
    body: JSON.stringify({
      content
    })
  })

}