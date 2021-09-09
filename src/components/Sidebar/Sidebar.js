import React, { useContext, useEffect } from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import "./Sidebar.css";
import { spotify } from "../../api/spotify";



function Sidebar({onSelectPlaylist}) { 
    const [playlist, setPlaylist] = React.useState([]); 


    useEffect(() => {
        spotify.getUserPlaylists().then(function (userPlaylists){
             setPlaylist(userPlaylists.items);
            })
    }, []);
        

    return(
        <div className="sidebar">
        <img
          className="sidebar__logo"
          src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
          alt="Spotify logo"
        />
        <div className="sidebar__itemList">
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusic} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlist.map(item => <p onClick={() => onSelectPlaylist(item.id)}> {item.name}</p>)}
        </div>

        </div>
        
    )
}

export default Sidebar;