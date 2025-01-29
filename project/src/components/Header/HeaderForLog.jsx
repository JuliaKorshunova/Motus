import React, { useState } from 'react';  
import './header.css';  
import gradient from '/Градиент.png'; 


export default function HeaderForLog({ onSearchTermChange }) {    
     

    return (     
        <header className="header1">
            <div className="logo">
                <div className='motusforheader'>Motus</div>
                <img  className="logo2" src={gradient} alt='logo' />
            </div>
           
        
        </header>
    );
};