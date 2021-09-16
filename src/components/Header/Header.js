import React, { useEffect, useState } from "react";
import profilePhoto from "./vivien.png";
import "./Header.css";
import { spotify } from "../../api/spotify";

function Search({ query, setQuery }) {

    return <input 
                className="header__search"
                type="search"
                placeholder="Artists, songs, or podcasts"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />   

}

function Header({ query, setQuery }){
  

    return(
        <div className="header">
            <Search query={query} setQuery={setQuery} />
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