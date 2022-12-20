import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Postview from './Postview/postview';
import Landing_page from './LandingPage/landing_page'
import Form from './Postview/form';

 
function App() {
 
  return (
    <div className="wrapper">
      {/* <h1>Landing Page</h1> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing_page/>}/>
            <Route path='/Postview' element={<Postview/>}/>
            <Route path='/form' element={<Form/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}
 
export default App;