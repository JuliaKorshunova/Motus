import'./CardsOfRelease.css';
import React, { useState } from "react";   
import star from '/star.png'; 
import phone from '/headphones.png'; 

import MainButton2 from '../Button/MainButton2';
 
export default function CardsOfRelease({ mainPage }) {  
  const {title, duration, date, description, number, author, sub} = mainPage;

  
  
  const [isHovered, setIsHovered] = useState(false);   
    
  const handleMouseEnter = () => {   
      setIsHovered(true);   
  };   
  
  const handleMouseLeave = () => {   
      setIsHovered(false);   
  };   
 
  return (     
    <div className="_card_of_podcast">     
        <div className="_blackblock" >    
          <div className="_whiteblock">
            <div className="testt_release">
              <div className="content-wrapper-release">
            <div className="text__for__name_release-1">    
              {title}    
            </div>    
            <div className="container8786-1">   
            
              <div className="_text__time-1">   
                {duration}   
              </div>   
               
              <div className="_text__date-1">   
                {date}   
              </div> 
              <img className = "star"  src={star} alt="star" />    
        
              <div className="_text__time-1">  
                Аудио  
              </div> 

              <img className = "phone"  src={phone} alt="star" /> 
              
            </div>  
            <div className="text__for__description__release-1">    
              {description}    
            </div>    
            <div className="_number">    
              {number}    
            </div>  

            <div className="author_of_podbrka-1">
              <img 
              className="icon_of_podborka-1" 
              src="/Ellipse 196.png" 
              alt="Описание изображения" />
              <div className='col2-1'>
                 <div className="name_of_author_podborka-1">{author}</div>
              <div className="text_for_pod-1">{sub}</div>
              </div>
             
              
              </div>
          
            <div className='btnn1-1'> 
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
        </div> 
    </div>     
  );      
}
