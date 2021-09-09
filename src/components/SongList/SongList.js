import React, { useEffect, useState } from 'react';
import "./SongList.css";
import { spotify } from "../../api/spotify";

function SongList({playlistId = '37i9dQZF1DXcLDm348RRYK'}){
    const [data, setData] = useState({total: 1});
    const [songs, setSongs] = useState([]);
    console.log("data", data);

    useEffect(() => {
        spotify.getPlaylistTracks(playlistId).then(function (PlaylistTracks){
            const { items, ...data } = PlaylistTracks;
            setSongs(items);
            setData(data);
        });
    },[playlistId]);

    return(
        <div className="songlist">
            <h1 className="songlist__title">total playlist: {data.total}</h1>
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