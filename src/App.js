import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './components/Spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const _token = getTokenFromUrl();
    window.location.hash = '';
    
    if (_token){
      setToken(_token);
      spotify.setAccessToken(_token);
    }
  })

  return (
    <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>
  );
}

export default App;
