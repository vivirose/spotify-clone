import React from "react";
import cover from "./barbiegirl-cover.jpeg";
import "./Footer.css"
import ReactAudioPlayer from 'react-audio-player';

function Footer(){

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
            <div className="footer__left">
                <img src={cover}
                className="footer__albumCover"
                />
                <div className="footer__songInfo">
                <h4>Barbie Girl</h4>
                <p>Aqua</p>
                </div>
            </div>
        <div className="footer__center">
            <button><i className="material-icons">skip_previous</i></button>
            <button onClick={togglePlay}><i className="material-icons">play_circle_outline</i></button>
            <button><i className="material-icons">skip_next</i></button>
        </div>
        </div>
    )
}

export default Footer;