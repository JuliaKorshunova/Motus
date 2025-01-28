import * as style1 from './OtherPodcaster'
import './OtherPodcaster.css';  
import link from '/link.png'
import Button from '../../Button/MainButton'
import star from '/star.png'
import headphones from '/headphones.png'
import person from '/image 293.png'
import LentaSection from '../../LentaSection/LentaSection'
import ModalSubscribes from '../../Modal/ModalSubsribes';
import PlayListSection from '../../PlayListSection/PlayListSection'
import React, { useState, useRef, useEffect } from 'react';
import PodcastSection from '../../PodcastSection/PodcastSection'
import HeaderForLog from '../../Header/HeaderForLog'
import TabsSectionForOtherPodcaster from '../../TabsSection/TabsSectionForOtherPodcaster.jsx/TabsSectionForOtherPodcaster'
//import style1 from './Podcaster.css'
 export const nameofpodcaster="Александра Митрошина"
export default function OtherPodcaster() {
  const [tab, setTab]=useState('lenta')
  const [isModalOpenSubscribes, setIsModalOpenSubsribes] = useState(false);
  const [podcasterData, setPodcasterData] = useState([]);

  useEffect(() => {
      // Замените 'data.json' на путь к вашему JSON-файлу
      fetch('/datapodcaster.json')
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then((data) => setPodcasterData(data))
          .catch((error) => console.error('Ошибка при загрузке данных:', error));
  }, []);



  const[isHovered, setIsHovered]=useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  



  const [pressed, setPressed]=useState(false)
  function ispressed(){
    return(
        setPressed(true))
    
  }
  const [pressed1, setPressed1]=useState(false)
  function ispressed1(){
    return(
        setPressed1(true))
    
  }
  
    return(
      
  
           <>
                 <HeaderForLog/>  
            <img className='imgpod' src={person}></img>
           
           <div className='conteiner'>
           <div className='obedinen'> 
           <div className='obedineniesphotopodcaster'>
        <div className='personforpodcaster'>
          <img className='imgforOP' src={person} />
        </div>

        <div className='obedinenieforpodcaster'>
          <h1 className='profileotherpodcaster'>Профиль</h1>

          {podcasterData.map((pod, index) => (
               
           

          <section  key={index} className='sforpodcaster'>

            <div className='kos'>

            </div>

            <div className="pinkblock">
              <div className="whiteblockpodcaster">
                <div className='rowforpodcater'>
                    <div className='rowforheadphones'>
                    <h2 className='thefforpodcasterprofile'>{pod.name}</h2>
                    <img className='headphones2' src={headphones} />
                    </div>
                    <div className='usernameforpodacterprofile'>@ksoakso</div>
                    <img className='headphones' src={headphones} />
                    <div className='countofsubsecond'>
                 
                    <p className='podpiski' onClick={() => setIsModalOpenSubsribes(true)}>
                    {pod.countofsubscriptionseswehave} подписок
                  </p>
                  <img src={star} />
                  <p>
                    {pod.countofsubscribseswehave} подписчиков
                  </p>

                </div>

                </div>
                <div className='kolonka'>
              
                <h6 className='thesecforpodcaster'>{pod.descriptionn }</h6>

                <div className='seroeforpodcaster'>
                  <div className='a'><img className='im1podcaster' src={link} /> </div>
                  <a className='ssylkapodcaster'>{pod.link}</a> </div>
                <div className='groupofbtnforOP'>

                    {pod.dis2 === true ? (
                    <div className='pocastdis'>
                      <Button disabled={true}>Стать подкастером</Button>
                      <p> Чтобы стать подкастером необходимо набрать {pod.countofsubcribeswenedd} подписчиков</p>
                    </div>
                  )
                    : isHovered === true ? (
                      <div className='bgforbtna'>
                        <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={pod.dis2}>
                          Подписаться
                        </Button>
                      </div>) : (
                      <Button onClick={ispressed} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} disabled={pod.dis2}>
                        Подписаться
                      </Button>)}   




                </div></div>


                <div className='countofsubpodcaster'>
                <p className='podpiski' onClick={() => setIsModalOpenSubsribes(true)}>
                    {pod.countofsubscriptionseswehave} подписок
                  </p>
                  <img src={star} />
                  <p>
                    {pod.countofsubscribseswehave} подписчиков
                  </p>

                </div>

              </div>


            </div>

          </section> ))}
          </div></div>
        
          <div className='obedinen2podcaster'>

          <TabsSectionForOtherPodcaster Active1={tab} onChange={(current) => setTab(current)} />
          <div className='forl'>
            {tab === 'lenta' ? <LentaSection /> : null}

          </div>
          <div className='forpodcastother'>
          {tab === 'podcast' ? (
            <><PodcastSection />
            </>) : null}

          </div>
         
            <div className='forp'>
          {tab === 'podborki' ? <PlayListSection /> : null}
        </div>
        </div>
        </div>


        </div> 
         <ModalSubscribes isOpen={isModalOpenSubscribes} onClose={() => setIsModalOpenSubsribes(false)} />
        </> 
    )

}