import './CardsOfPodborka.css'; 
import React, { useState } from "react";   
import star from '/star.png';   
import MainButton2 from '../Button/MainButton2';
import  headphones from '/headphones.png'
 
export default function CardsOfPodborka({ mainPage }) {  
  const {title, duration, date, audio, description, img, author, sub} = mainPage;

  const [isHovered, setIsHovered] = useState(false);   
    
  const handleMouseEnter = () => {   
      setIsHovered(true);   
  };   
  
  const handleMouseLeave = () => {   
      setIsHovered(false);   
  };   
 
  return (     
    <div className="_card_of_podborka">     
        <div className="_blackblock" >    
          <div className="_whiteblock"> 
            <div className='testt'>


            <div className='content-wrapper'>
            <div className="text__for__name_release">    
              {title}    
            </div>    
            <div className="text__for__name_pod">    
              {title}    
            </div>  
            <div className="container8786">   
              <img src={star} className='st' alt="star" />   
              <div className="_text__time">   
                {duration}   
              </div> 
              <img src={star} className='st' alt="star" />   
              <div className="_text__time">  
                {audio} 
              </div> 
              <div className="_text__date">   
                {date}   
              </div>   
              <img src={star} className='st' alt="star" />   
            </div>  

            <div className="container87867">   
             
              <div className="_text__time">   
                {duration}   
              </div> 
              <img src={headphones} className='au' />     
              
             
              <div className="_text__time">  
                {audio} 
              </div>  
            </div> 

            <div className="_text__date2">   
                {date}   
              </div> 

            <div className="text__for__description__release">    
              {description}    
            </div>    
                     
            <div className="author_of_podbrka">
              <img 
              className="icon_of_podborka" 
              src="/Ellipse 196.png" 
              alt="Описание изображения" />
              <div className='col2'>
                 <div className="name_of_author_podborka">{author}</div>
              <div className="text_for_pod">{sub}</div>
              </div>
             
              
              </div>
          
            <div className='btnn1_of_podborka'> 
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
       
         
          <div className="_image_of_podborka">    
            <img className='imgpodborka' src={img} alt="Описание изображения" />
            </div>
          </div>   
          </div>  
        </div> 
    </div>     
  );      
}
