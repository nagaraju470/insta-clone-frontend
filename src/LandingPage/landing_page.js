import React from 'react';
import { Link } from 'react-router-dom';

import './land.css'

 
export default function Landing_page() {
    const brow= {key:"Enter",path:'/Postview'}
  return (
   
    <div id='container'>
        <section className='half1'>
            <img id='image' src='./images/home.jpg' alt='Eye'></img>
        </section>
        <section className='half2'>
            <center>
                <div style={{color:"green",fontFamily:'-moz-initial',fontSize:"50px"}}><b>10x Team 04</b></div> 
                
            
            <Link to={brow.path}><button id='btn'>{brow.key}</button></Link>
            </center>
          

        </section>


         
    </div>
   

  )
 
}
