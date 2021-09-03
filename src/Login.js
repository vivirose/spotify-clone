import React from "react";
import './Login.css';


function Login(){
    return (
    <div className='Login'>
        <img
            className='Login__logo'
            src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
            alt="Spotify logo"
        />
        <a className='Login__link' href='#'>LOGIN WITH SPOTIFY</a>
    </div>
    )
}

export default Login;