import SecondButton from "../../Button/SecondButton";
import SecondButtonForTabs from "../../Button/SecondButtonForTabs";
import SecondImgButtonPink from "../../Button/SecondImgButtonPink";
import SecondImgButton from "../../Button/SecondImgButton";
import Modal from "../../Modal/Modal";
import * as style1 from './TabSectionForPodcaster.css'
import add from '/add.png'
import './TabSectionForPodcaster.css'
import { useState, useRef } from "react";

export default function TabsSectionForPodcaster({Active1, onChange}) {

    const[isHovered4, setIsHovered4]=useState(false)
    const handleMouseEnter4= () => {
      setIsHovered4(true);
      setIsHovered2(false);
      setIsHovered3(false);
      setIsHovered1(false);
    };
    const handleMouseLeave4= () => {
        setIsHovered2(false);
       
      setIsHovered1(false);
      setIsHovered3(false);
      setIsHovered4(false);
      };
    

    const[isHovered1, setIsHovered1]=useState(false)

    const handleMouseEnter1= () => {
      setIsHovered1(true);
      setIsHovered2(false);
      setIsHovered3(false);
      setIsHovered4(false);
    };
    const handleMouseLeave1 = () => {
        setIsHovered2(false);
       
      setIsHovered1(false);
      setIsHovered3(false);
      setIsHovered4(false);
      };

      const[isHovered2, setIsHovered2]=useState(false)
    const handleMouseEnter2= () => {
      setIsHovered2(true);
      setIsHovered1(false);
      setIsHovered3(false);
      setIsHovered4(false);
    };
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
       
      setIsHovered1(false);
      setIsHovered3(false);
      setIsHovered4(false);
      };

      const[isHovered3, setIsHovered3]=useState(false)
      const handleMouseEnter3= () => {
        setIsHovered3(true);
        setIsHovered2(false);
        setIsHovered1(false);
        setIsHovered4(false);
      };
      const handleMouseLeave3= () => {
        setIsHovered2(false);
       
      setIsHovered1(false);
      setIsHovered3(false);
      setIsHovered4(false);
        };
      
   const onToggleOpen = () => {
         setIsHovered4(prevPressed => !prevPressed);
    }
      
        const buttons = [
            { 
                value: 'lenta', 
                label: 'Лента', 
                handleMouseEnter: handleMouseEnter1, 
                handleMouseLeave: handleMouseLeave1, 
                isHovered: isHovered1 
            },
            { 
                value: 'podcast', 
                label: 'Подкасты', 
                handleMouseEnter: handleMouseEnter2, 
                handleMouseLeave: handleMouseLeave2, 
                isHovered: isHovered2 
            },
            { 
                value: 'arhiv', 
                label: 'Архив', 
                handleMouseEnter: handleMouseEnter4, 
                handleMouseLeave: handleMouseLeave4, 
                isHovered: isHovered4
            },
            { 
                value: 'playlist', 
                label: 'Плейлисты', 
                handleMouseEnter: handleMouseEnter3, 
                handleMouseLeave: handleMouseLeave3, 
                isHovered: isHovered3,
                image:''
            },
            // {
            //     value: 'imagebutton', 
            //     label: 'Картинка', 
            //     handleMouseEnter: handleMouseEnter4, 
            //     handleMouseLeave: handleMouseLeave4, 
            //     isHovered: isHovered4,
            //     image: 'heart.png', 
            //     onToggleOpen4: onToggleOpen,
            // },
          
        ];
    return (
        
        <>

<div className="tab2forpodcastert">
<div className="tabforpodcastert">
    {buttons.map((button) => (
        <div key={button.value} className="zi">
         
            {Active1 === button.value ? (
                button.value === 'imagebutton' ? (
                    <SecondImgButton
                    // onMouseOver={button.onToggleOpen4} 
                    // onMouseOut={button.onToggleOpen4}
                        onClick={() => onChange(button.value)}
                        isImg={true}
                        isActive={true}
                        onMouseEnter={button.handleMouseEnter}
                        onMouseLeave={button.handleMouseLeave}
                    >
                        <img className="image-class" src={button.image} alt={button.label || 'Изображение кнопки'} />
                    </SecondImgButton>
                ) : (
                    <SecondButtonForTabs
                        onClick={() => onChange(button.value)}
                        isImg={false}
                        isActive={true}
                        onMouseEnter={button.handleMouseEnter}
                        onMouseLeave={button.handleMouseLeave}
                    >
                        {button.label} {/* Отображаем текст для остальных кнопок */}
                    </SecondButtonForTabs>
                )
            ) : button.isHovered ? (
                button.value === 'imagebutton' ? (
                    <SecondImgButton
                    // onMouseOver={button.onToggleOpen4} 
                    // onMouseOut={button.onToggleOpen4}
                        onClick={() => onChange(button.value)}
                        isImg={true}
                        isActive={false}
                        onMouseEnter={button.handleMouseEnter}
                        onMouseLeave={button.handleMouseLeave}
                    >
                        <img className="image-class" src={button.image} alt={button.label || 'Изображение кнопки'} />
                    </SecondImgButton>
                ) : (
                    <SecondButtonForTabs
                        onClick={() => onChange(button.value)}
                        isImg={false}
                        isActive={false}
                        onMouseEnter={button.handleMouseEnter}
                        onMouseLeave={button.handleMouseLeave}
                    >
                        {button.label} 
                    </SecondButtonForTabs>
                )
            ) : (
                <div className="bgforbtn3">
                    {button.value === 'imagebutton' ? (
                        <SecondImgButton 
                    //     onMouseOver={button.onToggleOpen4} 
                    // onMouseOut={button.onToggleOpen4}
                            onClick={() => onChange(button.value)}
                            isImg={true}
                            isActive={false} 
                            onMouseEnter={button.handleMouseEnter}
                            onMouseLeave={button.handleMouseLeave}
                        >
                            <img className="image-class" src={button.image} alt={button.label || 'Изображение кнопки'} />
                        </SecondImgButton>
                    ) : (
                        <SecondButtonForTabs
                            onClick={() => onChange(button.value)}
                            isImg={false}
                            isActive={false}
                            onMouseEnter={button.handleMouseEnter}
                            onMouseLeave={button.handleMouseLeave}
                        >
                            {button.label} 
                        </SecondButtonForTabs>
                    )}
                </div>
            )}
        </div>
    ))}     
    
     </div>
               


            {/* <SecondButtonForTabs isActive={Active1 === 'playlist'} onClick={() => onChange('playlist')}>Плейлисты</SecondButtonForTabs> */}
        </div>
        </>
    )
}