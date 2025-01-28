import './OneAuthor.css'
import ellipse from '/Ellipse 196.png'
import white from '/white.jpg'
import picture from '/image 293.png'
import MainButton2 from '../../Button/MainButton2';
import SecondButtonBlack from '../../Button/SecondButtonBlack';
import React, { useState, useRef, useEffect } from 'react';

export default function OneAuthor({ name, subscribers, episodes, image2, image3, image4, count }) {   

  const [hashtagData, sethashtagData] = useState([]);



  const[isHovered, setIsHovered]=useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const testDeisabled=false;



  const [overlappingHashtags, setOverlappingHashtags] = useState([]); 

const [isGradient, setIsGradient] = useState(false);  
  const hashtagsRef = useRef(null);  
  const imageRef = useRef(null);

const checkCollision = () => { 
  if (hashtagsRef.current && imageRef.current) { 
      const hashtags = hashtagsRef.current.children; 
      const imageRect = imageRef.current.getBoundingClientRect(); 
      const overlaps = []; 

      for (let i = 0; i < hashtags.length; i++) { 
          const hashtagRect = hashtags[i].getBoundingClientRect(); 
          const isOverlapping = !(hashtagRect.bottom < imageRect.top || 
                                  hashtagRect.top > imageRect.bottom || 
                                  hashtagRect.right < imageRect.left || 
                                  hashtagRect.left > imageRect.right); 
          if (isOverlapping) overlaps.push(i); 
      } 

      console.log('Перекрывающиеся хэштеги:', overlaps); // Вывод в консоль 
      setOverlappingHashtags(overlaps); 
  } 
}; 
useEffect(() => { 
  checkCollision(); // Проверяем наложение при монтировании 
  window.addEventListener('resize', checkCollision); // Проверяем при изменении размера окна 
  return () => { 
      window.removeEventListener('resize', checkCollision); // Очищаем обработчики 
  }; 
  }, []);
  
  const [pressed, setPressed]=useState(false)
  function ispressed(){
    return(
      setPressed(prevPressed => !prevPressed)),
      setIsHoveredb(false)
    
  }

    const[isHoveredb2, setIsHoveredb2]=useState(false)
    const handleMouseEnterb2 = () => {
      setIsHoveredb2(true);
    };
  
    const handleMouseLeaveb2 = () => {
      setIsHoveredb2(false);
    };
    const[isHoveredb, setIsHoveredb]=useState(false)
    const handleMouseEnterb = () => {
      setIsHoveredb(true);
    };
  
    const handleMouseLeaveb = () => {
      setIsHoveredb(false);
    };


    // console.log(props);   
    return (    
      <div className='sectionsubForAuthor'>
      <div  className="cardsub">    
        <div className="blackblocksub">    
          <div className="whiteblocksub1">
            {/* <div className="container1sub">    */}
            <h2 className='zagalovokauthors'>{ name}</h2> 
            {/* </div>     */}
            <h6 className='subtitlesub1'>{subscribers}</h6>  
            <div className="content">{episodes}</div>  
             
          
            <img src={image3} alt='logo' className='picturesubForAuthor' />    
            <img src={image2} alt='logo' className='picturesub1ForAuthor' ref={imageRef} />    
            <div className="containersub">    
            
              {/* {props.button}    */}
            </div>    
            <div className='vstokuForAuthor1'>
              <div className='btnnpod'>
              
             
              <div className='kn1'>
                            {pressed ? (
                                <div className={isHoveredb ? '' : 'bggfornosub'} id='1'>
                                    <SecondButtonBlack
                                        children='Отменить подписку'
                                        onClick={ispressed}
                                        onMouseEnter={handleMouseEnterb}
                                        onMouseLeave={handleMouseLeaveb} />
                                </div>
                            ) : (
                                <div className={isHoveredb2 ? 'bggforsub' : ''}>
                                    <MainButton2
                                        onMouseEnter={handleMouseEnterb2}
                                        onClick={ispressed}
                                        onMouseLeave={handleMouseLeaveb2}
                                    >
                                        Подписаться
                                    </MainButton2>
                                </div>
                            )}</div>
                   
              </div>

           </div>
          </div>    
        </div>    
      </div>    </div>
    );      
}