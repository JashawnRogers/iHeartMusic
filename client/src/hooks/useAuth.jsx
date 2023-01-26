import { useState, useEffect } from 'react'
import axios from 'axios'

const useAuth = (code) => {
 const [accessToken, setAccessToken] = useState();
 const [refreshToken, setRefreshToken] = useState();
 const [expriresIn, setExpiresIn] = useState();


 useEffect(() => {
  axios
    .post('http://localhost:3001/login', {code})
    .then(res => {
      
      console.log(res.data)
      // setAccessToken(res.data.accessToken);
      // setRefreshToken(res.data.accessToken);
      // setExpiresIn(res.data.accessToken);
      // clear code parameter from url on successful login
      window.history.pushState({}, null, '/');
    })
    .catch(err => {
      console.log(err);
      window.location = "/";
    })

 }, [code])
}

export default useAuth