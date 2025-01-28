
import SecondButtonForTabs from '../../Button/SecondButtonForTabs';

import './TabsSectionForSubscriptions.css';
import { useState, useRef } from "react";

export default function TabsSectionForSubscriptions({Active1, onChange}) {


    

    const[isHovered1, setIsHovered1]=useState(false)

    const handleMouseEnter1= () => {
      setIsHovered1(true);
      
    };
    const handleMouseLeave1 = () => {
        setIsHovered1(false);
       
 
      };

      const[isHovered3, setIsHovered3]=useState(false)
      const handleMouseEnter3= () => {
        setIsHovered3(true);
    
      };
      const handleMouseLeave3= () => {
        setIsHovered3(false);
     
        };



      
        const buttons = [
            { 
                value: 'pod', 
                label: 'Подкасты', 
                handleMouseEnter: handleMouseEnter1, 
                handleMouseLeave: handleMouseLeave1, 
                isHovered: isHovered1 
            },
        
            { 
                value: 'autor', 
                label: 'Авторы', 
                handleMouseEnter: handleMouseEnter3, 
                handleMouseLeave: handleMouseLeave3, 
                isHovered: isHovered3,
                image:''
            },
            { 
                value: 'podbor', 
                label: 'Подборки', 
                handleMouseEnter: handleMouseEnter3, 
                handleMouseLeave: handleMouseLeave3, 
                isHovered: isHovered3,
                image:''
            },
           
          
        ];
    return (
        
        <>
                


    <div className="tabforlibrary">
    {buttons.map((button) => (
        <div key={button.value} className="zi">
            {/* Проверка на активное состояние */}
            {Active1 === button.value ? (
                <SecondButtonForTabs
                    isActive={true}
                    onMouseEnter={button.handleMouseEnter}
                    onMouseLeave={button.handleMouseLeave}
                    onClick={() => onChange(button.value)}
                >
                    {button.label}
                </SecondButtonForTabs>
            ) : button.isHovered ? (
                // Если кнопка наведена, но не активна
                <SecondButtonForTabs
                    isActive={false}
                    onMouseEnter={button.handleMouseEnter}
                    onMouseLeave={button.handleMouseLeave}
                    onClick={() => onChange(button.value)}
                >
                    {button.label}
                </SecondButtonForTabs>
            ) : (
                // Все остальные состояния (не активна и не наведена)
                <div className="bgforbtn3">
                    <SecondButtonForTabs
                        isActive={false} // можно также установить false для наглядности
                        onMouseEnter={button.handleMouseEnter}
                        onMouseLeave={button.handleMouseLeave}
                        onClick={() => onChange(button.value)}
                    >
                        {button.label}
                    </SecondButtonForTabs>
                </div>
            )}
        </div>
    ))}
</div>
            
        </>
    )
}