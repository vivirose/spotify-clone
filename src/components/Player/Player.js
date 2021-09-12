import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SongList from "../SongList/SongList";
import "./Player.css";

function Player() {

    const [playlistId, setPlaylistId] = React.useState();
    const [trackId, setTrackId] = React.useState();

    return(
        <div className="player">
            <Header />
            <Sidebar onSelectPlaylist={setPlaylistId} />
            <SongList playlistId={playlistId} onSelectSong={setTrackId}/>
            <Footer trackId={trackId}/>
        </div>)
}

export default Player; 