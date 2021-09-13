import React, {useEffect, useState} from "react";
import "./Footer.css"
import { spotify } from "../../api/spotify";


function Footer({trackId = '0iifbrIaoCheb4HbbH4bwP'}){

    const [track, setTrack] = useState({});
    const [infoTrack, setInfoTrack] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    console.log("track", track)
    console.log("trackid", trackId)
    
    useEffect(() => {
        spotify.getTrack(trackId).then(function (Track){
            setTrack(Track);
        });
        
    },[trackId]);

    

    async function togglePlay() {
        if (isPlaying) {
            setIsPlaying(false);
            spotify.pause();
            const info = await spotify.getMyCurrentPlayingTrack();
            console.log('info', info);
            setInfoTrack(info);

         } else {
             spotify.play({
            "context_uri": track.album.uri,
            "offset": {
              "position": track.track_number - 1
            },
            "position_ms": infoTrack?.progress_ms || 0
          });
          setIsPlaying(true);
        }
    };

    async function nextSong() {
        await spotify.skipToNext();
        const newTrack = await spotify.getMyCurrentPlayingTrack();
        setTrack(newTrack.item)
    };

    async function previousSong() {
        await spotify.skipToPrevious();
        const newTrack = await spotify.getMyCurrentPlayingTrack();
        setTrack(newTrack.item)
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
                        <button onClick={previousSong}><i className="material-icons">skip_previous</i></button>
                        <button onClick={togglePlay}> 
                        {isPlaying ? <i className="material-icons">pause_circle</i> :
                         <i className="material-icons">play_circle_outline</i>}
                        </button>
                        <button onClick={nextSong}><i className="material-icons">skip_next</i></button>
                    </div>
                </>)

            }
        </div>
    )
}

export default Footer;