
import SecondButtonForTabs from "../../Button/SecondButtonForTabs";

import './TabsSectionForRegister.css';
import { useState, useRef } from "react";

export default function TabsSectionForRegister({Active1, onChange}) {


    

    const[isHovered1, setIsHovered1]=useState(false)

    const handleMouseEnter1= () => {
      setIsHovered1(true);
      
    };
    const handleMouseLeave1 = () => {
        setIsHovered1(false);
       
 
      };

      const[isHovered2, setIsHovered2]=useState(false)
    const handleMouseEnter2= () => {
      setIsHovered2(true);
   
    };
    const handleMouseLeave2 = () => {
        setIsHovered2(false);
  
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
                value: 'user', 
                label: 'Пользователи', 
                handleMouseEnter: handleMouseEnter2, 
                handleMouseLeave: handleMouseLeave2, 
                isHovered: isHovered2 
            },
            { 
                value: 'pod', 
                label: 'Подкастер', 
                handleMouseEnter: handleMouseEnter1, 
                handleMouseLeave: handleMouseLeave1, 
                isHovered: isHovered1 
            },
            
         
           
          
        ];
    return (
        
        <>
                


    <div className="tab">
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