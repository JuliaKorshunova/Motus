import SecondButton from "../../Button/SecondButton";
import SecondButtonForTabs from "../../Button/SecondButtonForTabs";
import SecondImgButtonPink from "../../Button/SecondImgButtonPink";
import SecondImgButton from "../../Button/SecondImgButton";
import Modal from "../../Modal/Modal";
// import * as style1 from '../TabSectionForPodcaster/TabSectionForPodcaster.css'
import add from '/add.png'
// import './TabSectionForPodcaster/TabSectionForPodcaster.css'
import { useState, useRef } from "react";

export default function TabsSectionForPodborka({Active1, onChange}) {


    

    const[isHovered1, setIsHovered1]=useState(false)

    const handleMouseEnter1= () => {
      setIsHovered1(true);
      setIsHovered2(false);

    };
    const handleMouseLeave1 = () => {
        setIsHovered2(false);
       
      setIsHovered1(false);
    
      };

      const[isHovered2, setIsHovered2]=useState(false)
    const handleMouseEnter2= () => {
      setIsHovered2(true);
      setIsHovered1(false);

    };
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
       
      setIsHovered1(false);

      };

   
//    const onToggleOpen = () => {
//          setIsHovered4(prevPressed => !prevPressed);
//     }
      
        const buttons = [
            { 
                value: 'opodcaste', 
                label: 'О подборке', 
                handleMouseEnter: handleMouseEnter1, 
                handleMouseLeave: handleMouseLeave1, 
                isHovered: isHovered1 
            },
            { 
                value: 'release', 
                label: 'Выпуски', 
                handleMouseEnter: handleMouseEnter2, 
                handleMouseLeave: handleMouseLeave2, 
                isHovered: isHovered2 
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