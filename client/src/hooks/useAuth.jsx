import { useState, useEffect } from 'react'
import axios from 'axios'

const useAuth = (code) => {
 const [accessToken, setAccessToken] = useState();
 const [refreshToken, setRefreshToken] = useState();
 const [expriresIn, setExpiresIn] = useState();


 //Makes request to get tokens from server 
 useEffect(() => {
  axios
    .post('http://localhost:3001/login', {code})
    .then(res => {
      setAccessToken(res.data.access_token);
      setRefreshToken(res.data.refresh_token);
      setExpiresIn(res.data.expires_in);

      // clear code parameter from url on successful login
      window.history.pushState({}, null, '/');
    })
    .catch(err => {
      console.log(err);
      window.location = "/";
    })
 }, [code])

 //Automatically refresh token if access token expires
 useEffect(() => {
  // Otherwise, this useEffect will run before the tokens are retrieved which will cause a bad request to server.  
  if (!refreshToken || !expriresIn) return;
  const interval = setInterval(() => {
    axios
    .post('http://localhost:3001/refresh', {
      refreshToken,
    })
    .then(res => {
      setAccessToken(res.data.accessToken);
      setExpiresIn(res.data.expiresIn);
    })
    .catch(err => {
      console.log('client: ',err);
      window.location = "/";
    })
  }, (expriresIn - 60) * 1000)
  
  // Fail safe for if tokens prematurely change before setTimeout function is called
  return () => clearInterval(interval)
 },[refreshToken, expriresIn])

 return accessToken;
}

export default useAuth