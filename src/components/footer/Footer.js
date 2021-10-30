import React from 'react';


import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css'




const Footer = () => {
    return (

        <footer className="footer d-flex bg-secondary" >
            <span className="span" > Repositório</span>
            <div className=' d-flex align-items-center justify-content-space-between'>
               

                <a href="https://github.com/Emnmoura/rentagameclient" target="_blank">
                    <FaGithub size="28" color="#edf2f4" />
                </a>
                <a href="https://github.com/Emnmoura/Rentagame-Api" target="_blank">
                    <FaGithub size="28" color="#22142b" />
                </a>
                <a href="https://pt-br.facebook.com/" target="_blank">
                    <FaFacebook size="28" color="#22142b" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <FaTwitter size="28" color="#22142b" />
                </a>
                
                
            </div>
        </footer >
    )
}
export default Footer;