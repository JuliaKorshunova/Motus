import './ThePageOfPodcast.css';  
import CardsOfRelease from '../CardsOfRelease/CardsOfRelease.jsx';
import releasephoto from '/image 293.png';  
import ellipse from '/Ellipse 196.png';
import React, { useState, useRef, useEffect } from 'react';
import SecondButton from '../Button/SecondButton';
import SecondButtonBlack from '../Button/SecondButtonBlack.jsx';
import TabsSectionForPodcast from '../TabsSection/TabsSectionForPodcast/TabsSectionForPodcast.jsx';
import MainButton  from '../Button/MainButton.jsx';
// import vector22 from './../../img/chevron_left.svg';

import SecondButtonForTabs from '../Button/SecondButtonForTabs.jsx';
import Header from '../Header/Header.jsx';
export default function ThePageOfPodcast() {

    const [tab2, setTab2] = useState('opodcaste'); 

    const[isHovered, setIsHovered]=useState(false)
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const handleClick = () => {
        console.log('Слушать с первого выпуска Clicked!');
    };
    const [podcastReleases, setPodcastReleases] = useState([]); 
    const [infReleases, setInfReleases] = useState([]); 
    const [hashtags, setHashtags] = useState([]);
    const [overlappingHashtags, setOverlappingHashtags] = useState([]); 
    const hashtagsRef = useRef(null);  
    const imageRef = useRef(null);
    const [tab, setTab] = useState('listenFirst'); // Устанавливаем вкладку на 'listenFirst'
    const [searchTerm, setSearchTerm] = useState('');
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

    return (
        <>
            <Header  /> 
            <div className='releasephotoanddes'>
            <div className='_releasephotoanddes'>
            <div className="whitepodcast">
           <div className="text__for__age2">18+</div>
           <div className='fix'>
            <div className="centerpodcast">
            <img className='releasephoto' src={releasephoto} alt="Release" />
            <div className="textMain3-podcast">
            <div className="textMain2-podcast"> Как стать богатым за 5 минут не выходя из дома </div>
            <div className="button-containerpodcast">
                    {isHovered === true ? (
                      <div className='bgforlisten'>
                        <MainButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                          Слушать с первого выпуска
                        </MainButton>
                      </div>) : (
                      <MainButton onClick={ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                       Слушать с первого выпуска
                      </MainButton>)}

            </div>
<div className="forflexx">
            {infReleases.map((r, index) => (
            <div className='t1'>
            
                <>
                    <h6 className='nazv'></h6> 
                    <div className='t2'>
                        <img className='' src={ellipse} alt="Release" />
                        <div>
                            <h6 className='nazv1'>{r.name}</h6> {/* Имя автора повторно */}
               
                            <h6 className='nazv222'>{r.followers}</h6> {/* Количество подписчиков */}
                        </div>
                    </div>
                </>
           
        </div>
         ))}

    <div className='kn'> 
    {pressed ? ( 
        <div className={isHoveredb ? '' : 'bgg2'} id='1'> 
            <SecondButtonBlack  
                className="second-button-black" // Добавьте класс
                children='Отменить подписку'  
                onClick={ispressed}  
                onMouseEnter={handleMouseEnterb}  
                onMouseLeave={handleMouseLeaveb} 
            /> 
        </div> 
    ) : ( 
        <div className={isHoveredb2 ? '' : 'bgg'}> 
            <SecondButton  
                className="second-button" // Добавьте класс
                onMouseEnter={handleMouseEnterb2}  
                onClick={ispressed}  
                onMouseLeave={handleMouseLeaveb2}  
            > 
                Подписаться 
            </SecondButton> 
        </div> 
    )} 
</div>

<div className="gray-line" />
 <div className='nazv2'>
            <div className="frame_9" ref={hashtagsRef}>
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
        </div>
            </div>

            </div>
            </div>

            <div className="tabformobile-podcast">

                <TabsSectionForPodcast Active1={tab2} onChange={(current) => setTab2(current)} />

                <div className='r2'>
                                                    {tab2 === 'release' &&
                                                     <div className='home_for_card_podcast'> 
                                                    {podcastReleases.map(mainPage => ( 
                                                        <CardsOfRelease key={mainPage.id} mainPage={mainPage}/>  
                                                    ))} 
                                                    </div>
                                                         }  
                                                    {tab2 === 'opodcaste' &&  infReleases.length > 0 && (   
                                                    <>
                                                    <div className='flex-container-podcast'>
                                                        <div className="text__for__description1_podcast">
                                                        {infReleases[0].desc} </div>
                
                                          
                
                                            <div className='linepodcast'>
                                            <div className='topisanie1-podcast'>
                                                    <img className='ellpodast' src={ellipse} alt="Release" />
                                                    <div>
                                                        <h6 className='nazv1'>{infReleases[0].name}</h6> {/* Имя автора повторно */}
                                                        <h6 className='nazv222'>{infReleases[0].followers}</h6> {/* Количество подписчиков */}
                                                    </div>
                                                </div>
                                                <div className='knop1'> 
                                                    {pressed ? ( 
                                                        <div className={isHoveredb ? '' : 'bgg2'} id='1'> 
                                                            <SecondButtonBlack  
                                                                className="second-button-black" // Добавьте класс
                                                                children='Отменить подписку'  
                                                                onClick={ispressed}  
                                                                onMouseEnter={handleMouseEnterb}  
                                                                onMouseLeave={handleMouseLeaveb} 
                                                            /> 
                                                        </div> 
                                                    ) : ( 
                                                        <div className={isHoveredb2 ? '' : 'bgg'}> 
                                                            <SecondButton  
                                                                className="second-button" // Добавьте класс
                                                                onMouseEnter={handleMouseEnterb2}  
                                                                onClick={ispressed}  
                                                                onMouseLeave={handleMouseLeaveb2}  
                                                            > 
                                                                Подписаться 
                                                            </SecondButton> 
                                                        </div> 
                                                    )} 
                                                    
                                                        </div>
                
                                              </div>  
                
                                              
                
                                              <div className="frame_hash1" ref={hashtagsRef}>
                                                    {hashtags.map((h, index) => (
                                                        <div
                                                            key={index}
                                                            className='hastagss' // Просто используйте один класс
                                                            data-text={h.name}
                                                        >
                                                            {h.name}
                                                        </div>
                                                    ))}
                                                </div>
                                              </div>
                                                
                                                
                                                </>
                                                    
                                                    
                                                    )}
                
                
                
                
                         </div>    
             
            </div>

            

            </div>
            

            
            
            
            
            


  
        <div className="frame__8815">
          <div className="bread_crumbs1">Мои подписки</div>
          <div className="bread_crumbs2">Как стать богатым за 5 минут не выходя из дома</div>


            {/* <img src={vector22} alt="" /> */}


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
            <div className="text__for__age">18+</div>
            <div className="button-container-podcast"> 
            {isHovered === true ? (
                      <div className='bgforlisten'>
                        <MainButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                          Слушать с первого выпуска
                        </MainButton>
                      </div>) : (
                      <MainButton onClick={ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                       Слушать с первого выпуска
                      </MainButton>)}
            </div>
     
            <div className="lessons-1"> 
            <div className='home_for_card_container'> 
                {podcastReleases.map(mainPage => ( 
                    <CardsOfRelease key={mainPage.id} mainPage={mainPage}/>  
                ))} 
            </div>



</div>

            </div>

             
        </>
    );
}

