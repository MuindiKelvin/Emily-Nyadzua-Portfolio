import React from 'react';
import './Footer.css';
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className="footer">
        
      <div className="app__left"> 
                  {/* Header */} {/* Title + Select input dropdown field */}
              <div className="app__footer">
                    <h1>Designed & Developed by MuindiKelvin </h1>    
                   <p> <Facebook className="ml-4" color="royalblue" /> 
                    <Twitter className="ml-4" color="royalblue" />
                    <Instagram className="ml-4" color="royalblue" />
                    @smartprince_kevoh
                    </p> 
              </div>         
      </div>
      
    </div>
  );
}

export default Footer;
