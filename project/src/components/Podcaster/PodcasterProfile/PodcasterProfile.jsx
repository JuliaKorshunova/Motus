import * as style1 from './PodcasterProfile.css'
import link from '/link.png'
import Button from '../../Button/MainButton'
import logo from '/logo-name.svg'
import SecondButton from '../../Button/SecondButton'
import star from '/star.png'
import podcast from '/podcast.png'
import settings from '/settings.png'
import addwhite from '/addwhite.png'
import add from '/add.png'
import headphones from '/headphones.png'
import person from '/image 293.png'
import ModalSubscribes from '../../Modal/ModalSubsribes'
import TabsSectionForPodcaster from '../../TabsSection/TabsSectionForPodcaster/TabSectionForPodcaster'
import LentaSection from '../../LentaSection/LentaSection'
import SubscribesSection from '../../SubscribesSection/SubscribesSection'
import PlayListSection from '../../PlayListSection/PlayListSection'
import React, { useState, useRef, useEffect } from 'react';
import PodcastSection from '../../PodcastSection/PodcastSection'
import SecondImgButton from '../../Button/SecondImgButton'
import SecondImgButtonPink from '../../Button/SecondImgButtonPink'
import HeaderForLog from '../../Header/HeaderForLog'
import Modal from '../../Modal/Modal'
import ModalNewPost from '../../Modal/ModalNewPost'
import ModalSettings from '../../Modal/ModalSettings'
import ModalNewRelease from '../../Modal/ModalNewRelease'
import ModalD from '../../Modal/ModalD'
//import style1 from './Podcaster.css'
 export const nameofpodcaster="Александра Митрошина"
export default function Podcaster() {

  


  const [tab, setTab]=useState('lenta')

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



  const [isModalOpenPost, setIsModalOpenPost] = useState(false);
  const [isModalOpenPodcast, setIsModalOpenPodcast] = useState(false);
  const [isModalOpenSettings, setIsModalOpenSettings] = useState(false);
  const [isModalOpenSubscribes, setIsModalOpenSubsribes] = useState(false);
  const [isModalRelease, setIsModalRelease] = useState(false);


  const[isHovered, setIsHovered]=useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const[isHovered1, setIsHovered1]=useState(false)
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const[isHovered2, setIsHovered2]=useState(false)
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
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
  const[isHovered5, setIsHovered5]=useState(false)
  const handleMouseEnter5= () => {
    setIsHovered5(true);
  
  };
  const handleMouseLeave5= () => {
    setIsHovered5(false);

    };

  
    return(
      
  
           <> 
           
            {podcasterData.map((pod, index) => (
                 <><HeaderForLog /><img className='imgpod' src={person}></img><div className='conteiner'>
                <div className='obedinen'>
                  {/* {shouldRender && <div className='obedineniesphotopodcaster-container' id='myElement'> */}

                  <div className='obedineniesphotopodcaster'>



                    <div className='personforpodcaster'>
                      <img className='imgforpod' src={person} />
                    </div>

                    <div className='obedinenieforpodcaster'>
                      <h1 className='profillepodcaster'>Профиль</h1>





                      <section key={index} className='sforpodcaster'>

                        <div className='kos'>

                        </div>

                        <div className="pinkblock">
                          <div className="whiteblockpodcaster">
                            <div className='rowforpodcater'>
                              <h2 className='thefforpodcasterprofile'>{pod.name}</h2>
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
                              <h6 className='thesecforpodcaster'>{pod.descriptionn}</h6>

                              <div className='seroeforpodcaster'>
                                <div className='a'><img className='im1podcaster' src={link} /> </div>
                                <a className='ssylkapodcaster'>{pod.link}</a> </div>
                              <div className='groupofbtnforpodcaster'>




                                {/*
{testDeisabled1 === true ? ( <div className='bgforbtn2' id='1'> <SecondButton   children='Изменить профиль'  disabled={testDeisabled1}/></div>)
: isHovered1 === true ? (
<SecondButton    onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  children='Изменить профиль'  disabled={testDeisabled1}/>) : (
<div className='bgforbtn' id='1'> <SecondButton    onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  children='Изменить профиль1' disabled={testDeisabled1}/></div>)} */}


                                {isHovered1 === true ? (
                                  <div>
                                    <SecondImgButtonPink
                                      //     onMouseOver={button.onToggleOpen4} 
                                      // onMouseOut={button.onToggleOpen4}
                                      onClick={() => setIsModalOpenSettings(true)}
                                      onMouseEnter={handleMouseEnter1}
                                      onMouseLeave={handleMouseLeave1}
                                    >
                                      <img className="image-class" src={settings} alt={'Изображение кнопки'} />
                                    </SecondImgButtonPink>
                                  </div>) : (
                                  <div className='bgforbtnpodcaster' id='1'>  <SecondImgButtonPink


                                    onClick={() => setIsModalOpenSettings(true)}
                                    onMouseEnter={handleMouseEnter1}
                                    onMouseLeave={handleMouseLeave1}
                                  >
                                    <img className="image-class" src={settings} alt={'Изображение кнопки'} />
                                  </SecondImgButtonPink></div>
                                )}





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

                      </section>
                    </div>
                  </div>
                  {/* </div>} */}

                  <div className='obedinen2podcaster'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div className='commentspodcaster'>
                        <TabsSectionForPodcaster Active1={tab} onChange={(current) => setTab(current)} />

                        {tab === 'lenta' && (
                          <div className="plus" style={{ flex: '0 1 auto' }}>
                            {isHovered5 ? (
                              <SecondImgButtonPink
                                isImg={true}
                                onMouseEnter={handleMouseEnter5}
                                onClick={() => setIsModalOpenPost(true)}
                                onMouseLeave={handleMouseLeave5}
                              >
                                <img className="image-class" src={add} alt={'Изображение кнопки'} />
                              </SecondImgButtonPink>
                            ) : (
                              <div className='bgforsipb'>
                                <SecondImgButtonPink
                                  isImg={true}
                                  onMouseEnter={handleMouseEnter5}
                                  onMouseLeave={handleMouseLeave5}
                                  onClick={() => setIsModalOpenPost(true)}
                                >
                                  <img className="image-class" src={add} alt={'Изображение кнопки'} />
                                </SecondImgButtonPink>
                              </div>
                            )}
                          </div>
                        )}
                        {tab === 'podcast' && (
                          <div className="plus" style={{ flex: '0 1 auto' }}>
                            {isHovered5 ? (
                              <SecondImgButtonPink
                                isImg={true}
                                onMouseEnter={handleMouseEnter5}
                                onClick={() => setIsModalOpenPodcast(true)}
                                onMouseLeave={handleMouseLeave5}
                              >
                                <img className="image-class" src={addwhite} alt={'Изображение кнопки'} />
                              </SecondImgButtonPink>
                            ) : (
                              <div className='bgforsipb'>
                                <SecondImgButtonPink
                                  isImg={true}
                                  onMouseEnter={handleMouseEnter5}
                                  onMouseLeave={handleMouseLeave5}
                                  onClick={() => setIsModalOpenPodcast(true)}
                                >
                                  <img className="image-class" src={add} alt={'Изображение кнопки'} />
                                </SecondImgButtonPink>
                              </div>
                            )}
                          </div>
                        )}
                        {/* {tab === 'playlist' && (
       <div className="plus" style={{ flex: '0 1 auto' }}>
           {isHovered5 ? (
               <SecondImgButtonPink
                   isImg={true}
                   onMouseEnter={handleMouseEnter5}
                   onClick={() => setIsModalOpenSubsribes(true)}
                   onMouseLeave={handleMouseLeave5}
               >
                   <img className="image-class" src={addwhite} alt={'Изображение кнопки'} />
               </SecondImgButtonPink>
           ) : (
               <div className='bgforsipb'>
                   <SecondImgButtonPink
                       isImg={true}
                       onMouseEnter={handleMouseEnter5}
                       onMouseLeave={handleMouseLeave5}
                       onClick={() => setIsModalOpenSubsribes(true)}
                   >
                       <img className="image-class" src={add} alt={'Изображение кнопки'} />
                   </SecondImgButtonPink>
               </div>
           )}
       </div>
   )} */}
                      </div>

                      {tab === 'lenta' && <LentaSection />}
                      <div className='mar'>
                        {tab === 'podcast' && <PodcastSection />}
                      </div>

                      {tab === 'playlist' && <PlayListSection />}
                      {tab === 'arhiv' && null}


                    </div>

                  </div>
                </div>



              </div><Modal isOpen={isModalOpenPodcast} onClose={() => setIsModalOpenPodcast(false)} /><ModalNewPost isOpen={isModalOpenPost} onClose={() => setIsModalOpenPost(false)} /><ModalSettings isOpen={isModalOpenSettings} namme={pod.name} emmail={pod.email} niick={pod.nickname} desc={pod.descriptionn} linnk={pod.link} onClose={() => setIsModalOpenSettings(false)} /><ModalSubscribes isOpen={isModalOpenSubscribes} onClose={() => setIsModalOpenSubsribes(false)} /></>
        // {/* <ModalNewRelease isOpen={isModalRelease} onClose={() => setIsModalRelease(false)} /> 
        // {/* <ModalD isOpen={isModalOpenSubscribes} onClose={() => setIsModalOpenSubsribes(false)} />
        // <ModalD isOpen={isModalOpenSettings} onClose={() => setIsModalOpenSettings(false)} /> */}
          


      ))}
        </> 
    )

}