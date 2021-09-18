import React, {useEffect, useState} from "react";
import { spotify } from "../../api/spotify";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SongList from "../SongList/SongList";
import "./Player.css";
import Artist from "../Artist/Artist";

function Player() {
    let [query, setQuery] = useState("");
    const [playlistId, setPlaylistId] = useState("37i9dQZF1DWVmps5U8gHNv");
    const [artist, setArtist] = useState("")
    const [songs, setSongs] = useState([]);
    const [trackId, setTrackId] = useState();
    const [playlistName, setPlaylistName] = useState("Essential Folk");
    console.log("songs", songs);
    console.log("bla")

    // get tracks based on playlist id
    useEffect(() => {
        spotify.getPlaylistTracks(playlistId).then(function (PlaylistTracks){
            const { items } = PlaylistTracks;
            setSongs(items);
        });
    },[playlistId]);

    // get tracks based on search results
    useEffect(() => {
        if (query != "") {
            spotify.search(query, ["track", "artist"]).then(function (result){
                console.log("result", result)
                setSongs(result.tracks.items.slice(0, 5));
                setArtist(result.artists.items[0])}
                )
            } else {setArtist("")}
       
    }, [query]);

    const onSelectPlaylist = (id, name) => {
        setPlaylistId(id);
        setPlaylistName(name);
        setArtist("");
    }


    return(
        <div className="player">
            <Header 
                query={query}
                setQuery={setQuery}
            />
            <Sidebar 
            onSelectPlaylist={onSelectPlaylist} />
             { artist ? 
                <div className="searchResults">
                    <Artist artist={artist}/>
                    <SongList 
                        styleName="searchResults__songlist"
                        songs={songs}
                        onSelectSong={setTrackId}
                        /> 
                </div> : <SongList 
                    styleName="songlist"
                    playlistName={playlistName}
                    songs={songs}
                    onSelectSong={setTrackId}
                />}
            <Footer trackId={trackId}/>
        </div>)
}

export default Player; 