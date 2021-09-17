import React from 'react';
import "./Artist.css";


function Artist({artist}){
    return(
        <div className="artist">
            <img className="artist__photo" src={artist.images[1].url}></img>
            <h1 className="artist__name">{artist.name}</h1>
            <h5>ARTIST</h5>
        </div>
    )
};


export default Artist;