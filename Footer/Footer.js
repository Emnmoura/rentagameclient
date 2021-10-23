import React from 'react';

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import  './style.css';




const Footer = () => {
    return (

        <footer className="footer" >
            <span className="span" >MÍDIAS SOCIAIS</span>
            <div>
                <a href="https://twitter.com/">
                    <FaTwitter size="40" color="#00BFFF" />
                </a>
                <a href="https://www.linkedin.com/speak.up.tech/">
                    <FaLinkedin size="40" color="#8d99ae" />
                </a>
                <a href="https://www.instagram.com/speak.up.tech/">
                    <FaInstagram size="40" color="#edf2f4" />
                </a>
                <a href="https://www.youtube.com/c/SpeakupTech">
                    <FaYoutube size="40" color="#ef233c" />
                </a>
                <a href="https://www.Facebook.com/c/SpeakupTech">
                    <FaFacebook size="41" color="#fca311" />
                </a>
                
            </div>
        </footer >
    )
}
export default Footer;