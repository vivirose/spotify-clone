import React from 'react';
import "./Artist.css";


function Artist({artist}){
    return(
        <div className="artist">
            <img className="artist__photo" src={artist.images[1].url}></img>
            <h2 className="artist__name">{artist.name}</h2>
        </div>
    )
};


export default Artist;