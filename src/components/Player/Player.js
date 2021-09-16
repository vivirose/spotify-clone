import React, {useEffect, useState} from "react";
import { spotify } from "../../api/spotify";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SongList from "../SongList/SongList";
import "./Player.css";
import Artist from "../Artist/Artist";

function Player() {
    const [query, setQuery] = useState("");
    const [playlistId, setPlaylistId] = useState("37i9dQZF1DWVmps5U8gHNv");
    const [artist, setArtist] = useState(null)
    const [data, setData] = useState({total: 1});
    const [songs, setSongs] = useState([]);
    const [trackId, setTrackId] = useState();
    console.log("songs", songs);


    // get tracks based on playlist id
    useEffect(() => {
        spotify.getPlaylistTracks(playlistId).then(function (PlaylistTracks){
            const { items, ...data } = PlaylistTracks;
            setSongs(items);
            setData(data);
        });
    },[playlistId]);

    // get tracks based on search results
    useEffect(() => {
        spotify.search(query, ["track", "artist"]).then(function (result){
            console.log("result", result)
            setSongs(result.tracks.items);
            setArtist(result.artists.items[0])
        });
    }, [query]);


    return(
        <div className="player">
            <Header 
                query={query}
                setQuery={setQuery}
            />
            <Sidebar onSelectPlaylist={setPlaylistId} />
             { artist ? 
                <div>
                    <Artist artist={artist}/>
                    <SongList 
                        songs={songs}
                        onSelectSong={setTrackId}
                    /> 
                </div> :
            <SongList 
                songs={songs}
                onSelectSong={setTrackId}
            />}
            <Footer trackId={trackId}/>
        </div>)
}

export default Player; 