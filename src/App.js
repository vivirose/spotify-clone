import { useEffect, useState , useContext} from 'react';
import './App.css';
import Login from './components/Login/Login';
import { getTokenFromUrl } from './components/Spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/Player';
import { userValues } from "./context/auth";
import UserContext from "./context/auth";

const _token = getTokenFromUrl();


function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    console.log('token', _token);
    window.location.hash = '';
    
    if (_token){
      setToken(_token);
    
    }
  })

  return (
    <UserContext.Provider value={userValues}>
      <div className="app">{token ? <Player /> : <Login />}</div>
      </UserContext.Provider>
  );
}

export default App;
