import './ThePageOfPodborka.css';  
import CardsOfPodborka from '../CardsOfPodborka/CardsOfPodborka.jsx';
import releasephoto from '/image 293.png';  
import ellipse from '/Ellipse 196.png';
import React, { useState, useRef, useEffect } from 'react';
import SecondButton from '../Button/SecondButton';
import SecondButtonBlack from '../Button/SecondButtonBlack.jsx';
import SecondImgButton from '../Button/SecondImgButton'
import MainButton  from '../Button/MainButton.jsx';
import TabsSectionForPodborka from '../TabsSection/TabsSectionForPodborka/TabsSectionForPodborka.jsx';
// import vector22 from './../../img/chevron_left.svg';

import SecondButtonForTabs from '../Button/SecondButtonForTabs.jsx';
import Header from '../Header/Header.jsx';
export default function ThePageOfPodborka() {

    const[isHovered2, setIsHovered2]=useState(false)
    const handleMouseEnter2 = () => {
      setIsHovered2(true);
    };
  
    const handleMouseLeave2 = () => {
      setIsHovered2(false);
    };

      const [tab1, setTab1] = useState('opodcaste'); 


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
                const response = await fetch('/dataofpodborka.json'); // Путь к вашему JSON файлу
                if (!response.ok) {
                    throw new Error('Сеть не отвечает');
                }
                const data = await response.json();
                setPodcastReleases(data.podborka); // Устанавливаем состояние с загруженными данными
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
            {infReleases.map((r, index) => (
            <div className='releasephotoanddes2'>
                <div  className='releasephotoanddes3'>

             
                <div className='whitepodborka'>
                  <div className="text__for__age2">18+</div>
            <div className='fixx'>
            <div className='centerpod'><img className='releasephotopodborka' src={releasephoto} alt="Release" />


            <div className="textMain3">
            <div className='textMain2'>
            {r.nameofpodcast}
                </div>
      
         <div className="button-containerpod2"> 
            
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


         <div className='forflex'> 
            <div className='t1'>
            
                <>
                    <h6 className='nazv'></h6> 
                    <div className='topisanie'>
                        <img className='' src={ellipse} alt="Release" />
                        <div>
                            <h6 className='nazv1'>{r.name}</h6> {/* Имя автора повторно */}
                            <h6 className='nazv2'>{r.followers}</h6> {/* Количество подписчиков */}
                        </div>
                    </div>
                </>
              
     

        </div>


      


    <div className='knop'> 
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
 <div className='nazvhashpod'>
            <div className="frame_hash" ref={hashtagsRef}>
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
        </div>
</div>
</div>
            
            
            
            </div>
            
         
        
      


            </div>
        </div>

<div className='tabformobile'>
        <TabsSectionForPodborka Active1={tab1} onChange={(current) => setTab1(current)} />
                    <div className='r1'>
                                    {tab1 === 'release' &&
                                     <div className='home_for_card_container2'> 
                                    {podcastReleases.map(mainPage => ( 
                                        <CardsOfPodborka key={mainPage.id} mainPage={mainPage}/>  
                                    ))} 
                                    </div>
                                         }  
                                    {tab1 === 'opodcaste' &&   <><div className='flex-container'><div className="text__for__description1"> {r.desc} </div>

                          

                            <div className='linepod'>
                            <div className='topisanie1'>
                                    <img className='ellpod' src={ellipse} alt="Release" />
                                    <div>
                                        <h6 className='nazv1'>{r.name}</h6> {/* Имя автора повторно */}
                                        <h6 className='nazv2'>{r.followers}</h6> {/* Количество подписчиков */}
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
                                    
                                    
                                    }




         </div>

  </div>
        <div className="frame_8815">
          <div className="bread_crumbs1">Мои подписки</div>
          <div className="bread_crumbs2">Как стать богатым за 5 минут не выходя из дома</div>


            {/* <img src={vector22} alt="" /> */}


        </div>

            <div className="group_8794">
            {infReleases.map((r, index) => (
             <div className="frame_8793"> 
              
            <div className="textMain">
            {r.nameofpodcast}
                </div>
            <div className="frame_8786">
                <div className="text__for__description">
                {r.desc}
                </div>
            </div>

            <div className="button-containerpod"> 
            <div className="text__for__age1">18+</div>
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
            
            </div>
        ))}
            
          



     
            <div className="lessons"> 

                
            <div className='home_for_card_container'> 
                {podcastReleases.map(mainPage => ( 
                    <CardsOfPodborka key={mainPage.id} mainPage={mainPage}/>  
                ))} 
            </div>


           </div>

           
           </div>
            </div>

))}

        </>
    );
}