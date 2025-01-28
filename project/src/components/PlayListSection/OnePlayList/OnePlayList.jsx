import * as style1 from './OnePlayList.css'
import one from '/image 293.png'
import two from '/image 294.png'
import three from '/image 292.png'
import four from '/image 293.png'

import logo from '/logo-name.svg'

import { useState, useRef } from "react";
import SecondButton from '../../Button/SecondButton'
import Button2 from '../../Button/MainButton2'
import lock from '/lock.png'
import shuffle from '/shuffle.png'
import SecondImgButton from '../../Button/SecondImgButton'

export default function OnePlayList({ name, descriptionn, view, release,  image1, image2, image3, image4 }) {

    let testDeisabled=false;
    let testDeisabled1=false;
    let countofsubcribeswenedd=100;


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
      setPressed(prevPressed => !prevPressed)),
      setIsHovered(false)
    
  }
  const [pressed1, setPressed1]=useState(false)
  function ispressed1(){
    return(
        setPressed1(true))
    
  }
  
    return(
    
      <div className='obedinenie1ForPlayLists'>
         



          <section className='sForPlayList'>

            <div className='kos'>

            </div>

            <div className="blackblock">
              <div className="whiteblock1playlist">
                <h2 className='thef1playlist'>{name}</h2>
                <div className='minitextplaylist'>
                   <h6 className='thesec1playlist'>{release} выпусков</h6>
                   <h6 className='thesec1playlist'>{view} просмотров</h6>
                </div>
               

                <div className='seroe1'>
                  {/* <div className='a'><img className='im1' src={link} /> </div> */}
                  <p className='des1playlist'>{descriptionn}</p> </div>

<p>{pressed}</p>

         



<div className='groupofbtn1ForPlayList'>
    {pressed ? (
        <div className={isHovered1 ? '' : 'bgforbtnn2'} id='1'>
            <SecondButton 
                children='Отменить подписку' 
                onClick={ispressed} 
                disabled={testDeisabled1} 
                onMouseEnter={handleMouseEnter1} 
                onMouseLeave={handleMouseLeave1}
            />
        </div>
    ) : testDeisabled ? (
        <div className='slushatdis'>
            <Button2 disabled={true}>Слушать</Button2>
            <p>Чтобы стать подкастером необходимо набрать {countofsubcribeswenedd} подписчиков</p>
        </div>
    ) : (
        <div className={isHovered ? 'bgforbtnnn' : ''}>
            <Button2 
                onMouseEnter={handleMouseEnter} 
                onClick={ispressed} 
                onMouseLeave={handleMouseLeave} 
                disabled={testDeisabled}
            >
                Слушать
            </Button2>
        </div>
    )}

    {/* Вторая кнопка */}
    <div className="second-button-container">
        {isHovered2 ? (
            <SecondImgButton
                isImg={true}
                isActive={false} 
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
            >
                <img className='shuffle' src={shuffle} alt={'Изображение кнопки'} />
            </SecondImgButton>
        ) : (
          <div className='bgforbtnn3'>
            <SecondImgButton
                isImg={true}
                isActive={false} 
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
            >
                <img src={shuffle} className='shuffle' alt={'Изображение кнопки'} />
            </SecondImgButton> </div>
        )}
    </div>

 <div className='bottomob'>
    <div className="imageclass">
        <img  className="imageclass2"src={lock} alt={'Изображение кнопки'} /></div>
  <p className='des2playlist'>Только для вас</p> </div>       
</div>



                <div className='picturessForPlayList'>

                <img className='picturessoneForPlayList' src={image1} />
              <img className='picturesstwoForPlayList' src={image2} />
                <img className='picturessthreeForPlayList' src={image3} /> 
                <img className='picturessfourForPlayList' src={image4} /> 
                

                </div>

              </div>


            </div>

          </section></div>
    )

}