import React, { useState } from "react";    
import './PasswordRecoveryForEmail.css';    
import fractal from './../../img/Group8830.png';    
import MainButton2 from '../Button/MainButton2';    
import HeaderForLR from "../header/HederForLR";    
import { useNavigate, useLocation } from 'react-router-dom';   

export default function PasswordRecoveryForEmail() {    
    const navigate = useNavigate();  
    const location = useLocation(); // Получаем текущее местоположение   
    const email = location.state?.email; // Получаем почту из состояния      
    const [newPassword, setNewPassword] = useState("");       
    const [isHovered, setIsHovered] = useState(false);    
    const [linkSent, setLinkSent] = useState(false); // Отслеживаем, отправлена ли ссылка  

    const handleMouseEnter = () => {     
        setIsHovered(true);     
    };     

    const handleMouseLeave = () => {     
        setIsHovered(false);     
    };     

    const handleSendLink = () => {   
        // Логика для отправки ссылки на почту 
        setTimeout(() => { 
            setLinkSent(true); // Активируем кнопку после имитации отправки ссылки  
            alert("Ссылка для восстановления пароля отправлена на почту."); // Уведомление пользователя 
        }, 2000); // Имитация задержки 
    };   

    const handlePasswordSubmit = () => {        
        // Проверяем, что новый пароль не пустой перед переходом    
        if (!newPassword) {   
            return; // Если пароль пустой, ничего не делаем    
        }    

        const userData = {      
            email: email,      
            password: newPassword      
        };     

        // Сохраняем данные (например, в localStorage для тестирования)      
        localStorage.setItem('userData', JSON.stringify(userData));      

        // Переход на страницу с успехом    
        navigate('/reset-password-transition'); // Перенаправление на страницу успеха после успешного изменения пароля      
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
                <div className="_rectangle15">           
                    <input         
                        type="email"         
                        className='_rectangle16'         
                        placeholder="Почта"         
                        required         
                        defaultValue={email} // Устанавливаем значение   
                        disabled // Делаем при этом поле почты недоступным   
                    />    
                    <div className="text_for_mistakes">
                        Ссылка для восстановления отправлена на почту
                        </div>       
                </div>      

                <div className='btnnForRecoveryPasswordPost'>            
                    <MainButton2          
                        onMouseEnter={handleMouseEnter}          
                        onMouseLeave={handleMouseLeave}      
                        onClick={handleSendLink} // Отправка ссылки  
                        disabled={linkSent} // Кнопка активна, если ссылку еще не отправили  
                    >            
                        Отправить ссылку          
                    </MainButton2>            
                </div> 

                <div className='btnnForRecoveryPasswordPost'>           
                    <MainButton2          
                        onMouseEnter={handleMouseEnter}          
                        onMouseLeave={handleMouseLeave}     
                        onClick={handlePasswordSubmit}     
                        disabled={!newPassword || !linkSent} // Динамическое состояние кнопки для установки нового пароля      
                    >           
                        Отправить пароль      
                    </MainButton2>           
                </div>         
            </div>         
        </>         
    );        
}