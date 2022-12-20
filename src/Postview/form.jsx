import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./postheader";
import './form.css'


const Form=()=>{
    // const navigate=useNavigate()
    const [img,setimg]=useState("");
    const [Author,setauthor]=useState("");
    const [Location,setloc]=useState("");
    const [Description,setdes]=useState("");
    
    const navigate=useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file',img)
        formData.append('Author',Author)
        formData.append('Location',Location)
        formData.append('Description',Description);
		//useEffect(()=>{fetch("https://instaclone-backened-api.onrender.com/api/posts").then((res)=>res.json()).then((data)=>{setPosts(data);console.log(posts)}).catch((e)=>console.log(e))},[])
        //useEffect(()=>{fetch('https://instaclone-backened-api.onrender.com/api/posts', {method:'post',body:formData}).then((res)=>res.json()).then((data)=>{setResponse(data);console.log(data)}).catch((e)=>console.log(e))},[]);	
		await fetch('https://backend-e4vr.onrender.com/form', {method:'post',body:formData}).then((res)=>res.json()).then((data)=>{console.log(data);}).catch((e)=>console.log(e))
        navigate('/postview')
	}

    
    // const handleroute=(e)=>{
    //     e.preventDefault();
    //     navigate('/postview')
    // }
    return(
        <>
            <Header/>
            <center id="border" >
            <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
                
                <input type="file" name="file" accept='image/*' onChange={(e)=>{setimg(e.target.files[0])}} /> <br />
                <div className="auth">
                <input type="text" placeholder="Author" name="Author"  onChange={(e)=>{setauthor(e.target.value)}}/> 
                <input type="text" placeholder="Location" name="Location" onChange={(e)=>{setloc(e.target.value)}}/>
                </div> 
               <textarea name="Description" placeholder="Description" cols="30" rows="5" onChange={(e)=>{setdes(e.target.value)}}></textarea> <br />
               <button type="submit">Post</button>
            </form>
            </center>
            
        </>
    )
}
export default Form;