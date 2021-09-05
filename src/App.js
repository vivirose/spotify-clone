import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const _token = getTokenFromUrl();
    window.location.hash = '';
    
    if (_token){
      setToken(_token)
    }
  })

  return (
    <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>
  );
}

export default App;
