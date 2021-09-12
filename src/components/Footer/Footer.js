import React, {useEffect, useState} from "react";
import "./Footer.css"
import { spotify } from "../../api/spotify";


function Footer({trackId = '0iifbrIaoCheb4HbbH4bwP'}){

    const [track, setTrack] = useState({});
    console.log("track", track)
    console.log("trackid", trackId)
    
    useEffect(() => {
        spotify.getTrack(trackId).then(function (Track){
            console.log("track1", Track);
            setTrack(Track);
        });
        
    },[trackId]);


    var music = new Audio("http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3");
    var isPlaying = false;

    function togglePlay() {
        isPlaying ? music.pause() : music.play();
    };
    
    music.onplaying = function() {
        isPlaying = true;
    };
    music.onpause = function() {
        isPlaying = false;
    };
    
    return(
        <div className="footer">
            {
                !track.album ? (<p>'loading'</p>) : (
                <>
                    <div className="footer__left">
                    <img src={track.album.images[1].url}
                    className="footer__albumCover"
                    />
                    <div className="footer__songInfo">
                    <h4>{track.name}</h4>
                    <p>{track.artists[0].name}</p>
                    </div>
                    </div>
                    <div className="footer__center">
                        <button><i className="material-icons">skip_previous</i></button>
                        <button onClick={togglePlay}><i className="material-icons">play_circle_outline</i></button>
                        <button><i className="material-icons">skip_next</i></button>
                    </div>
                </>)

            }
        </div>
    )
}

export default Footer;