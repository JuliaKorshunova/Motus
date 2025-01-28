import  './PodcastEmpty.css';  
import CardsOfRelease from '../CardsOfRelease/CardsOfRelease.jsx';
import releasephoto from '/image 293.png';  
import ellipse from '/Ellipse 196.png';
import React, { useState, useRef, useEffect } from 'react';
import SecondButton from '../Button/SecondButton';
import SecondButtonBlack from '../Button/SecondButtonBlack.jsx';

import MainButton  from '../Button/MainButton.jsx';
import VectorChavronLeft from '/VectorChavronLeft.svg';

import SecondButtonForTabs from '../Button/SecondButtonForTabs.jsx';
import Header from '../Header/Header.jsx';
export default function PodcastEmpty() {
    const[isHovered, setIsHovered]=useState(false)
    const [isDisabled, setIsDisabled] = useState(true); // Изначально кнопка недоступна
    const [pressed, setPressed] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const [podcastReleases, setPodcastReleases] = useState([]); 
    const [infReleases, setInfReleases] = useState([]); 
    const [hashtags, setHashtags] = useState([]);
    const [overlappingHashtags, setOverlappingHashtags] = useState([]); 
    const hashtagsRef = useRef(null);  
    const imageRef = useRef(null);
    const [tab, setTab] = useState('listenFirst'); // Устанавливаем вкладку на 'listenFirst'
    const [searchTerm, setSearchTerm] = useState('');

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

    const [showBlock, setShowBlock] = useState(false);

    const [courses, setCourses] = useState([]);

    const [author, setAuthor] = useState(null); // Изначально состояние пустое


   
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/dataofreleases.json'); // Путь к вашему JSON файлу
                if (!response.ok) {
                    throw new Error('Сеть не отвечает');
                }
                const data = await response.json();
                setPodcastReleases(data.releases); // Устанавливаем состояние с загруженными данными
                setInfReleases(data.information)
                setHashtags(data.hashtags);
                setAuthor(data.information);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData(); // Вызов функции
    }, []); // Пустой массив зависимостей: эффект выполнится один раз при монтировании компонента 

  

    const [isHoveredChange, setIsHoveredChange] = useState(false);
    const [isHoveredListen, setIsHoveredListen] = useState(false);
        
        


    return (
        <>
            <Header  /> 
            <div className='releasephotoanddes'>
            <div className='fix'>
            <div><img className='releasephoto' src={releasephoto} alt="Release" /></div>
            
            {infReleases.map((r, index) => (
            <div className='t1'>
            
                <>
                    <h6 className='nazv'></h6> 
                    <div className='t2'>
                        <img className='' src={ellipse} alt="Release" />
                        <div>
                            <h6 className='nazv1'>{r.name}</h6> {/* Имя автора повторно */}
                            <h6 className='nazv2'>{r.followers}</h6> {/* Количество подписчиков */}
                        </div>
                    </div>
                </>
           
        </div>
         ))}


 <div className="gray-line" />
 <div className='nazv2'>
            <div className="frame_9_EMPTY" ref={hashtagsRef}>
                {hashtags.map((h, index) => (
                    <div
                        key={index}
                        className='hastags1' // Просто используйте один класс
                        data-text={h.name}
                    >
                        {h.name}
                    </div>
                ))}
            </div>
        </div>
            </div>
        </div>

  
        <div className="frame__8815">
          <div className="bread_crumbs1_empty">Мои подписки</div>
          <div className="bread_crumbs2_empty">Как стать богатым за 5 минут не выходя из дома</div>


             <img src={VectorChavronLeft} alt="" className = "ChavronLeft"/> 


        </div>

                 <div className="group__8794">
            {infReleases.map((r, index) => (
                <div className="frame__8793"> 
              
                 <div className="text__for__rich">
            {r.nameofpodcast}
                    </div>
            <div className="frame__8786">
                <div className="text__for__description">
                {r.desc}
                </div>
            </div>
            
            </div>
        ))}
            <div className="text__for__age_empty">18+</div>
            
            <div className="button-container"> 
            {isHovered === true ? (
                      <div className='bgforlisten'>
                        <MainButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                          Изменить
                        </MainButton>
                      </div>) : (
                      <MainButton onClick={ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                       Изменить
                      </MainButton>)}
            </div>
     

            
            <div className="button-container-for-lestening">  
            {isHovered ? ( 
                <div className="bgforlisten1"> 
                    <MainButton 
                        disabled={isDisabled} // Устанавливаем состояние disabled 
                        onMouseEnter={handleMouseEnter}  
                        onMouseLeave={handleMouseLeave} 
                    > 
                        Слушать с первого выпуска 
                    </MainButton> 
                </div>
            ) : ( 
                <MainButton 
                    disabled={isDisabled} // Устанавливаем состояние disabled 
                    onMouseEnter={handleMouseEnter}  
                    onMouseLeave={handleMouseLeave} 
                > 
                    Слушать с первого выпуска 
                </MainButton>
            )} 
        </div>
     


            </div>

            <div className="text_for_podcast">Выпусков ещё нет.</div>

             
        </>
    );
}

