import React from "react";
import profilePhoto from "./vivien.png";
import "./Header.css";
import { spotify } from "../../api/spotify";

function Header(){

    const [query, setQuery] = React.useState("");
    spotify.search(query, ["track"]).then(function (result){
        console.log(result)
    })

    return(
        <div className="header">
            <input 
                className="header__search"
                type="search"
                placeholder="Artists, songs, or podcasts"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />    
            <div className="header__profile">
                <img 
                    className="header__profilePicture"
                    src={profilePhoto}
                    alt="profile photo"
                />
                <p>Vivien Rose</p>
            </div>
        </div>
    )
}

export default Header;