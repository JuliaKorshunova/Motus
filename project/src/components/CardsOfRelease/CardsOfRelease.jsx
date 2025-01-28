import './CardsOfRelease.css'; 
import React, { useState } from "react";   
import star from '/star.png';   
import MainButton2 from '../Button/MainButton2';
 
export default function CardsOfRelease({ mainPage }) {  
  const {title, duration, date, description, number} = mainPage;

  
  
  const [isHovered, setIsHovered] = useState(false);   
    
  const handleMouseEnter = () => {   
      setIsHovered(true);   
  };   
  
  const handleMouseLeave = () => {   
      setIsHovered(false);   
  };   
 
  return (     
    <div className="_card">     
        <div className="_blackblock" >    
          <div className="_whiteblock">    
            <div className="text__for__name_release">    
              {title}    
            </div>    
            <div className="container8786">   
            <img src={star} alt="star" /> 
              <div className="_text__time">   
                {duration}   
              </div>   
               
              <div className="_text__date">   
                {date}   
              </div> 
              <img className="star-icon" src={star} alt="star" />    
        
              <div className="text__for__audio">  
                Аудио  
              </div> 
              
            </div>  
            <div className="text__for__description__release">    
              {description}    
            </div>    
            <div className="_number">    
              {number}    
            </div>  
          
            <div className='btnn1'> 
                      {mainPage.testDeisabled === true ? ( 
                          <div className='pocastdis'> 
                              <MainButton2 disabled={true}>Слушать</MainButton2> 
                          </div> 
                      ) : isHovered ? ( 
                          <div className='bgforbtn1'> 
                              <MainButton2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={mainPage.testDeisabled}> 
                                  Слушать 
                              </MainButton2> 
                          </div>) : ( 
                          <MainButton2 onClick={mainPage.ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={mainPage.testDeisabled}> 
                              Слушать 
                          </MainButton2>
                      )} 
              </div>

          </div>    
        </div> 
    </div>     
  );      
}
