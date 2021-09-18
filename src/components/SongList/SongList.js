import React from 'react';
import "./SongList.css";

function SongList({styleName, songs, onSelectSong, playlistName}){ 

    return(
        <div className={styleName}>
            <h1 className="songlist__title">{playlistName ? playlistName : "Songs"}</h1>
            {
                songs.map((item) =>  {
                    const { track } = item;

                    // depending on endpoint called, song information is in item or in item.track
                    const song = track ? track : item;

                    return (<div className="songlist__songs" onClick={() => onSelectSong(song.id)}>
                        <img className="songlist__cover" src={song.album.images[2].url}/>
                        <div className="songlist__info">
                            <p className="songlist__track">{song.name}</p> 
                            <p className="songlist__artist">{song.artists[0].name}</p>
                        </div>
                        <p className="songlist__album">{song.album.name}</p>
                    </div>)
                })
            }
        </div>
    );
}

export default SongList;