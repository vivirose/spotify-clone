import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SongList from "../SongList/SongList";
import "./Player.css";

function Player() {

    const [playlistId, setPlaylistId] = React.useState();

    return(
        <div className="player">
            <Header />
            <Sidebar onSelectPlaylist={setPlaylistId} />
            <SongList playlistId={playlistId} />
            <Footer/>
        </div>)
}

export default Player; 