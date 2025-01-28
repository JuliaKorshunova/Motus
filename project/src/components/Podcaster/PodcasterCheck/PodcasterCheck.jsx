import './PodcasterCheck.css';  
import link from '/link.png'
import Button from '../../Button/MainButton'
import logo from '/logo-name.svg'
import SecondButton from '../../Button/SecondButton'
import star from '/star.png'
import podcast from '/podcast.png'
import add from '/add.png'
import addwhite from '/addwhite.png'
import settings from '/settings.png'
import ModalSubscribes from '../../Modal/ModalSubsribes';
import SecondImgButtonPink from '../../Button/SecondImgButtonPink'
import person from '/image 293.png'
import TabsSectionForUser from '../../TabsSection/TabsSectionForUser/TabsSectionForUser'
import LentaSection from '../../LentaSection/LentaSection'
import SubscribesSection from '../../SubscribesSection/SubscribesSection'
import PlayListSection from '../../PlayListSection/PlayListSection'
import React, { useState, useRef, useEffect } from 'react';
import Header from '../../Header/Header'
import HeaderForLog from '../../Header/HeaderForLog'
import Modal from '../../Modal/Modal'
import ModalNewPost from '../../Modal/ModalNewPost'
import ModalBePodcaster from '../../Modal/ModalBePodcaster'
import ModalSettings from '../../Modal/ModalSettings'
//import style1 from './Podcaster.css'
 export const nameofpodcaster="Александра Митрошина"
export default function PodcasterCheck() {
  const [tab, setTab]=useState('lenta')


  const [podcasterData, setPodcasterData] = useState([]);

  useEffect(() => {
      // Замените 'data.json' на путь к вашему JSON-файлу
      fetch('/datauser.json')
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
  const [isModalOpenBePodcaster, setIsModalOpenBePodcaster] = useState(false);


  const[isHovered, setIsHovered]=useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
    const [isModalOpenSubscribes, setIsModalOpenSubsribes] = useState(false);

  const[isHovered1, setIsHovered1]=useState(false)
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const[isHovered5, setIsHovered5]=useState(false)
  const handleMouseEnter5= () => {
    setIsHovered5(true);
  
  };
  const handleMouseLeave5= () => {
    setIsHovered5(false);

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
                {podcasterData.map((pod, index) => (
          <><HeaderForLog></HeaderForLog><img className='imgpod' src={podcast}></img><div className='conteiner'>
                    <div className='obedinen'>
                      <div className='obedineniesphotopodcaster'>
                        <div className='personforpodcaster'>
                          <img className='imgforpod' src={person} />
                        </div>

                        <div className='obedinenieforpodcaster'>
                          <h1 className='profilepodcastercheck'>Профиль</h1>





                          <section key={index} className='sforpodcaster'>

                            <div className='kos'>

                            </div>

                            <div className="pinkblock">
                              <div className="whiteblockpodcaster">


                                <div className='rowforpodcater'>
                                  <h2 className='thefforpodcasterprofile'>{pod.name}</h2>
                                  <div className='usernameforpodacterprofile'>@ksoakso</div>
                                  {/* <img  className='headphones' src={headphones} /> */}
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
                                  <div className='rowforcheking'>
                                    <div className='groupforpodcastercheck'>


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
                                        </SecondImgButtonPink>
                                        </div>
                                      )}





                                    </div>
                                    <p className='checkofprofile'>Профиль подкастера проходит проверку</p>

                                  </div>


                                </div>

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
                        </div></div><div className='obedinen2podcaster'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <div className='commentspodcaster'>
                            <TabsSectionForUser Active1={tab} onChange={(current) => setTab(current)} />

                            {tab === 'lenta' && (
                              <div className="plus" style={{ flex: '0 1 auto' }}>
                                {isHovered5 ? (
                                  <SecondImgButtonPink
                                    isImg={true}
                                    onMouseEnter={handleMouseEnter5}
                                    onClick={() => setIsModalOpenPost(true)}
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
                                      onClick={() => setIsModalOpenPost(true)}
                                    >
                                      <img className="image-class" src={add} alt={'Изображение кнопки'} />
                                    </SecondImgButtonPink>
                                  </div>
                                )}
                              </div>
                            )}
                            {tab === 'playlist' && (
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
                          </div>

                          {tab === 'lenta' && <LentaSection />}

                          {tab === 'playlist' && <PlayListSection />}

                        </div>
                      </div>

                    </div>
                    <Modal isOpen={isModalOpenPodcast} onClose={() => setIsModalOpenPodcast(false)} />
                    <ModalNewPost isOpen={isModalOpenPost} onClose={() => setIsModalOpenPost(false)} />
                    <ModalBePodcaster isOpen={isModalOpenBePodcaster} onClose={() => setIsModalOpenBePodcaster(false)} />
                    <ModalSubscribes isOpen={isModalOpenSubscribes} onClose={() => setIsModalOpenSubsribes(false)} />
                   <ModalSettings isOpen={isModalOpenSettings} namme={pod.name} emmail={pod.email} niick={pod.nickname} desc={pod.descriptionn} linnk={pod.link} onClose={() => setIsModalOpenSettings(false)} />
                  </div></>
        ))}
        </> 
    )

}