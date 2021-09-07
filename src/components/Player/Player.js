import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Player.css";

function Player() {
    return(
        <div className="player">
            <Header />
            <Sidebar />
            <Footer/>
        </div>)
}

export default Player; 