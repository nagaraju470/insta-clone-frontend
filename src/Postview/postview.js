import React from 'react';
// import data from "./../Mock-data/data.json"
import { useState } from 'react';
import { useEffect } from 'react';
import './post.css';
import Header from './postheader';


export default function Postview() {
    const [dataobj,setdata]=useState([])
    
    useEffect(()=>{
      fetch('https://backend-e4vr.onrender.com/data').then(res=>{ return res.json()} )
      .then((data)=>{
          setdata(data.result)
          console.log(data.result)
      })
    },[])
//     let details=props.user
//    let data=details.result;
  return (
  <>
    <div className='container'>
        <Header/>
        
        {
                dataobj.map((value,index)=>{
                    return (

                        <div key={`value.name-${index}`} className='post_contain'>
        
                        <div className='name'>
                            <div style={{margin:'10px'}}>
                                <div><b>{value.Author}</b></div>
                                <div className='graystring'>{value.Location}</div>
                            </div>
                            <div style={{margin:'0 0 1rem 25rem'}}>
                                <h2>...</h2>
                            </div>
                        </div>
                        
                        <div className='imgcontain'>
                        
                        <img id='imagepost' src={value.file} alt={`picture-${index}`} />
                        </div>
            
                        <div className='name'>
                            <div>
                            <img className='heart_share' src='./images/heart.png' alt='heart-symbol'/>
                            <img className='heart_share' src='./images/share.png' alt='share-symbol'/>
                            <div className='graystring'  style={{ marginLeft:'2rem'}}>{value.Likes} likes</div>
                            </div>
                            
                            <div className='graystring' style={{margin:'0 0 1rem 20rem'}}>
                                {value.Date.split("T")[0]}
                            </div>
            
            
                        </div>
                       
                                <h3 >{value.Description}</h3>
                        
                          
                       
            
                    </div>
                        
                    )
                })
        }
        
     
        

    </div>
  </>
  )
}
