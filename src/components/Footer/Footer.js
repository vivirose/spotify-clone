import React from "react";
import {
    PlayCircleOutline,
    SkipPrevious,
    SkipNext,
    PlaylistPlay,
    Shuffle,
    Repeat,
    VolumeDown,
  } from "@material-ui/icons";
  import { Grid, Slider } from "@material-ui/core";
  import cover from "./barbiegirl-cover.jpeg";
  import "./Footer.css"

  function Footer(){
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

          </div>
      )
  }

  export default Footer;