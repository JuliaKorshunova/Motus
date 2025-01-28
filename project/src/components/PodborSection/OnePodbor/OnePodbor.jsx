import './OnePodbor.css';  
import { useState, useRef } from "react";
import SecondButton from '../../Button/SecondButton'
import Button2 from '../../Button/MainButton2'
import lock from '/lock.png'
import shuffle24 from '/shuffle.svg'
import shuffle16 from '/shuffle.svg'
import SecondImgButton from '../../Button/SecondImgButton'
import { useNavigate } from 'react-router-dom';

export default function OnePodbor({ name, descriptionn, view, release,  image1, image2, image3, image4, className, className2 }) {
   const navigate = useNavigate();

   const handleNavigate = () => {
    navigate('/podborka'); // Замените '/target-page' на URL целевой страницы
};
    
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
    
      <div   className={`${className2} ${className}`}>
         



          <section className='sForPodborka'>

            <div className='kos'>

            </div>

            <div className="blackblock">
              <div className="whiteblock1">
                <h2 className='thef1'>{name}</h2>
                <div className='minitext'>
                   <h6 className='thesec1'>{release} выпусков</h6>
                   <h6 className='thesec1'>{view} просмотров</h6>
                </div>
               

                <div className='seroe1'>
                  {/* <div className='a'><img className='im1' src={link} /> </div> */}
                  <p className='des1'>{descriptionn}</p> </div>

<p>{pressed}</p>

         



<div className='groupofbtn1ForPodborka'>
{testDeisabled ? (
    <div className='slushatdis'>
        <Button2 disabled={true}>Слушать</Button2>
        <p>Чтобы стать подкастером необходимо набрать {countofsubcribeswenedd} подписчиков</p>
    </div>
) : (
    <div className={isHovered ? 'bgforbtnnn' : ''}>
        <Button2 
            onMouseEnter={handleMouseEnter} 
            onClick={handleNavigate} // Выполняет переход на другую страницу
            onMouseLeave={handleMouseLeave} 
            disabled={testDeisabled}
        >
            Слушать
        </Button2>
    </div>
)}

    {/* Вторая кнопка */}
    <div className="second-button-container">
        {isHovered2 === true ? (
            <SecondImgButton
                isImg={true}
                isActive={false} 
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
            >
                <img src={shuffle16} alt={'Изображение кнопки'}  className="shuffle-icon"/>
            </SecondImgButton>
        ) : (
          <div className='bgforbtnn3'>
            <SecondImgButton
                isImg={true}
                isActive={false} 
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
            >
                <img src={shuffle24} alt={'Изображение кнопки'}  className="shuffle-icon"/>
            </SecondImgButton> </div>
        )}
    </div>

       
</div>



                <div className='picturessForPodborka'>

                <img className='picturessoneForPodborka' src={image1} />
              <img className='picturesstwoForPodborka' src={image2} />
                <img className='picturessthreeForPodborka' src={image3} /> 
                <img className='picturessfourForPodborka' src={image4} /> 
                

                </div>

              </div>


            </div>

          </section></div>
    )

}