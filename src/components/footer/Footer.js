import React from 'react';


import { FaGithub } from 'react-icons/fa';
import './Footer.css'




const Footer = () => {
    return (

        <footer className="footer d-flex bg-secondary" >
            <span className="span" >REPOSITÓRIOS</span>
            <div className=' d-flex align-items-center justify-content-space-between'>
               

                <a href="https://github.com/Emnmoura/rentagameclient" target="_blank">
                    <FaGithub size="28" color="#edf2f4" />
                </a>

                
                
            </div>
        </footer >
    )
}
export default Footer;