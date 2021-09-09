import React, { useEffect, useState } from 'react';
import "./SongList.css";
import { spotify } from "../../api/spotify";

function SongList({playlistId}){

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        spotify.getPlaylistTracks(playlistId).then(function (PlaylistTracks){
            setSongs(PlaylistTracks.items)
        })
    },[])
    console.log(songs)
    return(
        <div className="songlist">
            <h1 className="songlist__title">My Favorite Songs</h1>
            <hr />
                {songs.map(item => <div className="songlist__songs">
                    <img className="songlist__cover" src={item.track.album.images[2].url}/>
                    <p className="songlist__track">{item.track.name}</p> 
                    <p className="songlist__artist">{item.track.artists[0].name}</p>
                    <hr />
                </div>)}
        </div>
    )
}

export default SongList;