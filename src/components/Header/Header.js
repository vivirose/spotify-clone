import React from "react";
import profilePhoto from "./vivien.png";
import "./Header.css";

function Header(){
    return(
        <div className="header">
            <input 
                className="header__search"
                type="search"
                placeholder="Artists, songs, or podcasts"
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