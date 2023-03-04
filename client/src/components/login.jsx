import React from 'react'
import bgImage from '../imgs/login-bg.jpg'

import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=6c3198a53fac4098ad2067196e71b282&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-private%20playlist-modify-public%20ugc-image-upload"

const Login = () => {

  return (
    <Container className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', minWidth: '100vw',backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
      <a href={AUTH_URL} className='btn btn-success btn-light btn-lg' >
        Login with Spotify
      </a>
    </Container>
  )
}

export default Login