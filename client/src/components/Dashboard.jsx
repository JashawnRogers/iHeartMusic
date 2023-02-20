import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import TrackSearchResult from './TrackSearchResult'
import SpotifyWebApi from 'spotify-web-api-node'

import { Container, Form } from 'react-bootstrap'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
})



const Dashboard = ({ code }) => {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults)
  
  // console.log(accessToken)
  //Set access token on Spotify api whenever it changes
  useEffect(() => {
    if(!accessToken) return 
    // console.log('Access Token: ',accessToken)
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return console.log('Access Token: ',accessToken);
    
    // cancel to only make a request once done typing
    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
          if (image.height < smallest.height) return image 
          return smallest
        }, track.album.images[0])

        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url
        }
      }))
    }).catch(err => {
      console.log(err);
    })

    return () => cancel = true
  }, [search, accessToken])
  
  return (
  <Container className='d-flex flex-column py-3' style={{ height: "100vh" }}>
     <Form.Control 
     type="search"
     placeholder="Search Songs or Artists..." 
     value={search}
     onChange={e => setSearch(e.target.value)}
     />

     <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
     {searchResults.map(track => (
        <TrackSearchResult track={track} key={track.uri} />
      ))}
     </div>
     <div className="">
      Bottom
     </div>
  </Container>
  )
}

export default Dashboard