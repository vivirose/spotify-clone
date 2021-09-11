import React from "react";
import cover from "./barbiegirl-cover.jpeg";
import "./Footer.css"
import ReactAudioPlayer from 'react-audio-player';

  function Footer(){
      const audioTag = React.useRef();
      return(
          <div className="footer">
              <div className="footerLeft">
                  <img src={cover}
                  className="footer__albumCover"
                  />
                  <div className="footer__songInfo">
                  <h4>Barbie Girl</h4>
                  <p>Aqua</p>
                  </div>
              </div>
            <div className="footerCenter">
                <i className="material-icons">skip_previous</i>
                <i className="material-icons">play_circle_outline</i>
                <i className="material-icons">skip_next</i>
                <ReactAudioPlayer
                src="http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
                autoPlay
                controls
                />  
            </div>
          </div>
      )
  }

  export default Footer;