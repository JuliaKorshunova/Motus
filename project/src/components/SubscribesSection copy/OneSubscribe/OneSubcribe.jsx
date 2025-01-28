import './OneSubcribe.css'
import ellipse from '/Ellipse 196.png'
import white from '/white.jpg'
import picture from '/image 293.png'
import MainButton2 from '../../Button/MainButton2';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function OneSubcribe({ name, descriptionn, time, author, sub,  image1, image2, image3, hashtags }) {   

  const navigate = useNavigate();

  const handleButtonClick = () => {
   // Переход на другую страницу, с передачей email
   navigate('/podcastEmpty'); 
  };

  const [subscribeData, setSubscribeData] = useState([]);

  useEffect(() => {
      fetch('/datasub.json') // Убедитесь, что имя файла в вашем проекте верное
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => setSubscribeData(data.cards)) // Устанавливаем данные из поля cards
          .catch((error) => console.error('Ошибка при загрузке данных:', error));
  }, []);
  

  const[isHovered, setIsHovered]=useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const testDeisabled=false;


  const [pressed, setPressed]=useState(false)
  function ispressed(){
    return(
        setPressed(true))
    
  }

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

      // console.log('Перекрывающиеся хэштеги:', overlaps); 
      setOverlappingHashtags(overlaps); 
      // console.log(overlappingHashtags);
  } 
}; 
useEffect(() => { 
  checkCollision(); // Проверяем наложение при монтировании 
  window.addEventListener('resize', checkCollision); // Проверяем при изменении размера окна 
  return () => { 
      window.removeEventListener('resize', checkCollision); // Очищаем обработчики 
  }; 
  }, []);
  


    // console.log(props);   
    return (    
      <div className='sectionsubForSubs'>
      <div  className="cardsub">    
        <div className="blackblocksub">    
          <div className="whiteblocksubribes">
            <div className="container1sub">   
            <h2 className='zagalovoksubscribes'>{ name}</h2> 
            </div>    
            <h6 className='subtitlesubForSubs'>{descriptionn}</h6>    
            <div className="categoryhastagssub"></div>   
            <div className="hashtagssubForSubcribes">   
                
            <div className="frame_91subscribes"  ref={hashtagsRef}>     
                    
                            {hashtags.map((h, hIndex) => (
                            <div
                                key={hIndex}
                                data-text={h} 
                                className={`hastags1forsub ${overlappingHashtags.includes(hIndex) ? 'gradient1' : 'orange'}`} 
                            >
                            {h}
                        </div> ))}
                              </div>
              
            </div>    
            <div className="timesubForSub">{time}</div>    
            <img src={image3} alt='logo' className='picturesubForSub'  />    
            <img src={image2} alt='logo' className='picturesub1ForSub' ref={imageRef}  />    
            <div className="containersubForSubscribes">    
              <img src={image1} alt='logo' className='iconsubForSubscr' />    
              <div className="text1subForSubscribes">{author}</div>    
              <div className="text2subForSubscribes">{sub} подписчиков</div>    
              {/* {props.button}    */}
            </div>    
              <div className='btnnsubforSubscribes'>
                 {testDeisabled === true ? (
                    <div className='pocastdis'>
                      <MainButton2 
                      disabled={true}>Слушать</MainButton2>
                     
                    </div>
                  )
                    : isHovered === true ? (
                      <div className='bgforbtnsub'>
                        <MainButton2 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave} 
                        onClick={handleButtonClick}
                        disabled={testDeisabled}>
                          Слушать
                        </MainButton2>
                      </div>) : (
                      <MainButton2 onClick={handleButtonClick} 
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave} 
                      disabled={testDeisabled}>
                        Слушать
                      </MainButton2>)}
              </div>
           
          </div>    
        </div>    
      </div>    </div>
    );      
}