import SecondButton from "../../Button/SecondButton";
import SecondButtonForTabs from "../../Button/SecondButtonForTabs";
import SecondImgButton from "../../Button/SecondImgButton";
import SecondImgButtonPink from "../../Button/SecondImgButtonPink";
import * as style1 from './TabsSectionForUser.css'
import person from '/image 293.png'
import { useState, useRef } from "react";
import add from '/add.png'
import ModalNewPost from "../../Modal/ModalNewPost";

export default function TabsSectionForUser({Active1, onChange}) {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const[isHovered5, setIsHovered5]=useState(false)
    const handleMouseEnter5= () => {
      setIsHovered5(true);
    
    };
    const handleMouseLeave5= () => {
      setIsHovered5(false);

      };
   

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
                value: 'playlist', 
                label: 'Подборки', 
                handleMouseEnter: handleMouseEnter3, 
                handleMouseLeave: handleMouseLeave3, 
                isHovered: isHovered3,
                image:''
            },
          
          
        ];
    return (
  
        
            <>
    
    <div className="tabforuser">
    <div className="tab2foruser">
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
                  
            </div>
           
            </>
        )
}