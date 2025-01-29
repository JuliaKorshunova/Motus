import React, { useState } from "react";  
import './PasswordRecovery.css' 
import MainButton2 from '../Button/MainButton2'; 
import HeaderForLR from "../Header/HeaderForLog"; 
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
        if (!email) return; // Проверяем, чтобы email не был пустым
    
        localStorage.setItem('email', email); // Сохраняем email в localStorage
    
        navigate('/reset-password-for-email', { state: { email } }); // Передаем в state
    };

    if (isTransitioning) { 
        return <PasswordRecoveryTransition />; 
    } 

    

    return (   
        <>   
            <HeaderForLR/>  
            <div className="parent1">   
                
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
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />  
                </div>   
 
                <div className='btnnForRecoveryPassword'>    
                    {props.testDisabled === true ? (    
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