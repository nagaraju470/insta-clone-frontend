import React from "react";
import { Link } from "react-router-dom";
import './post.css'
const Header=()=>{
    return(
        <div className='header'>
            
            <nav className='navbar'>
                
                <img id="logo" src="./images/logo.png" alt="Logo" />
                <h1 id="logo_heading" >Instaclone</h1>
               <Link to="/form">
               <img id='cam' src="./images/camera.png" alt="camera"></img>
               </Link>
                
            </nav>
        </div>
        
    )
}
export default Header;