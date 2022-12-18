import React from "react";
import Home from '../img/Home.png';
import Saved from '../img/Saved.png';
import SearchBottom from '../img/search.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <div className="footer-container">    
                <ul>
                    <a href=""><li><img src={Home} id='home' alt='home'></img></li></a>
                    <a href=""><li><img src={Saved} id='save' alt='save'></img></li></a>
                    <a href=""><li><img src={SearchBottom} id='search' alt='search'></img></li></a>
                </ul>
            </div>
        </div>
    );
};

export default Footer;