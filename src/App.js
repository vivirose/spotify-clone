import { useEffect, useState , useContext} from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './components/Spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { userValues } from "./context/auth";
import UserContext from "./context/auth";

const spotify = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const _token = getTokenFromUrl();
    console.log('token', _token);
    window.location.hash = '';
    
    if (_token){
      setToken(_token);
      spotify.setAccessToken(_token);
    }
  })

  return (
    <UserContext.Provider value={userValues}>
      <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>
      </UserContext.Provider>
  );
}

export default App;
