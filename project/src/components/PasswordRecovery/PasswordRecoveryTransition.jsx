import React, { useState } from "react"; 
import { useLocation } from 'react-router-dom'; 
import './PasswordRecoveryTransition.css'; 
import fractal from './../../img/Group8830.png'; 
import MainButton2 from '../Button/MainButton2'; 
import HeaderForLR from "../header/HederForLR"; 
import { useNavigate } from 'react-router-dom'; // Импортировать хук навигации

export default function PasswordRecoveryTransition(props) {  
   

    const location = useLocation(); // Хук для получения текущего местоположения
    
    // Получаем email здесь, вне условных блоков
    const email = location.state?.email; 

    const [isHovered, setIsHovered] = useState(false);   

    const handleMouseEnter = () => {    
        setIsHovered(true);    
    };    

    const handleMouseLeave = () => {    
        setIsHovered(false);    
    };

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
                <div className="_rectangle15_15">     
                    <input 
                        type="email" 
                        className='_rectangle16' 
                        placeholder="Почта" 
                        defaultValue={email} // Устанавливаем значение
                        required 
                    />     
                </div>    
                <div className="_rectangle15_1">     
                    <input type="password" className='_rectangle16' placeholder="Новый пароль" required />    
                </div>
 
                <div className='btnnForRecoveryPasswordTransition'>    
                    {props.testDeisbled === true ? (    
                        <div className='pocastdis'>    
                            <MainButton2 disabled={true}>Отправить пароль</MainButton2>    
                        </div>    
                    ) : isHovered ? (    
                        <div className='bgforbtn11'>    
                            <MainButton2  
                                onMouseEnter={handleMouseEnter}  
                                onMouseLeave={handleMouseLeave}  
                                disabled={props.testDeisabled}  
                               
                            >    
                                Установить пароль    
                            </MainButton2>    
                        </div> 
                    ) : (
<MainButton2  
                            
                            onMouseEnter={handleMouseEnter}  
                            onMouseLeave={handleMouseLeave}  
                            disabled={props.testDeisabled} 
                        >    
                            Установить пароль    
                        </MainButton2>   
                    )}    
                </div>   
            </div>   
        </>   
    );  
}