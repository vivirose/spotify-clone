import React, { useEffect, useState } from 'react';
import "./SongList.css";

function SongList({songs, onSelectSong}){ 

    return(
        <div className="songlist">
            <h1 className="songlist__title">Playlist Title</h1>
            <hr />
            {
                songs.map((item) =>  {
                    const { track } = item;

                    // depending on endpoint called, song information is in item or in item.track
                    const song = track ? track : item;

                    return (<div className="songlist__songs" onClick={() => onSelectSong(song.id)}>
                        <img className="songlist__cover" src={song.album.images[2].url}/>
                        <p className="songlist__track">{song.name}</p> 
                        <p className="songlist__artist">{song.artists[0].name}</p>
                        <hr />
                    </div>)
                })
            }
        </div>
    );
}

export default SongList;