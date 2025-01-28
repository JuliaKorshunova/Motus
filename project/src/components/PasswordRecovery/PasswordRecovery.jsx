import React, { useState } from "react";  
import './PasswordRecovery.css' 
import fractal from './../../img/Group8830.png' 
import MainButton2 from '../Button/MainButton2'; 
import HeaderForLR from "../header/HederForLR"; 
import PasswordRecoveryTransition from "./PasswordRecoveryTransition"; 
import { useNavigate } from 'react-router-dom';

export default function PasswordRecovery(props) {  
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); // Состояние для хранения почты
    const [isHovered, setIsHovered] = useState(false);  
    const [isTransitioning, setIsTransitioning] = useState(false); 

    const handleMouseEnter = () => {   
        setIsHovered(true);   
    };   

    const handleMouseLeave = () => {   
        setIsHovered(false);   
    };   

    const handlePasswordSubmit = () => { 
        setIsTransitioning(true); 

        // Переход на другую страницу, с передачей email
        navigate('/reset-password-for-email', { state: { email } });
    }; 

    if (isTransitioning) { 
        return <PasswordRecoveryTransition />; 
    } 

    return (   
        <>   
            <HeaderForLR/>  
            <div className="parent1">   
                <img src={fractal} alt="" className="group8830"/>   
            </div>  
 
            <div className="text_for_recovery">  
                Восстановление пароля  
            </div>  
              
            <div className="frame_8820">   
                <div className="_rectangle15">   
                <input 
                        type="email" 
                        className='_rectangle16' 
                        placeholder="Почта" 
                        required 
                        value={email} // Установить значение инпута
                        onChange={(e) => setEmail(e.target.value)} // Обновление состояния почты
                    />   
                </div>   
 
                <div className='btnnForRecoveryPassword'>    
                    {props.testDeisbled === true ? (    
                        <div className='pocastdis'>    
                            <MainButton2 disabled={true}>Отправить пароль</MainButton2>    
                        </div>    
                    ) : isHovered ? (    
                        <div className='bgforbtn10'>    
                            <MainButton2  
                                onMouseEnter={handleMouseEnter}  
                                onMouseLeave={handleMouseLeave}  
                                disabled={props.testDeisabled}  
                                onClick={handlePasswordSubmit} // Устанавливаем обработчик клика 
                            >    
                                Отправить пароль    
                            </MainButton2>    
                        </div> 
                    ) : (
<MainButton2  
                            onClick={handlePasswordSubmit} // Устанавливаем обработчик клика 
                            onMouseEnter={handleMouseEnter}  
                            onMouseLeave={handleMouseLeave}  
                            disabled={props.testDeisabled} 
                        >    
                            Отправить пароль    
                        </MainButton2>   
                    )}    
                </div>   
            </div>   
        </>   
    );  
}