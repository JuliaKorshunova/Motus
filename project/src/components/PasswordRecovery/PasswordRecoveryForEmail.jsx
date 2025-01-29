import React, { useState, useEffect } from "react";      
import './PasswordRecoveryForEmail.css';       
import MainButton2 from '../Button/MainButton2';    
import HeaderForLR from "../Header/HeaderForLog";    
import { useNavigate, useLocation } from 'react-router-dom';   

export default function PasswordRecoveryForEmail() {    
    const navigate = useNavigate();
    const location = useLocation();

    const email = location.state?.email || ""; // Фолбэк, если email не передан

    const [newPassword, setNewPassword] = useState("");  
    const [loading, setLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);   
    const [isDisabled, setIsDisabled] = useState(true); // Состояние для блокировки кнопки

    useEffect(() => {
        // Запускаем таймер для перехода через 5 секунд
        const timer = setTimeout(() => {
            navigate('/reset-password-transition', { state: { email } });  
        }, 5000);

        return () => clearTimeout(timer); // Очищаем таймер при размонтировании
    }, [navigate, email]);

    useEffect(() => {
        // Блокируем кнопку, если новый пароль не введен
        setIsDisabled(newPassword.trim() === "");
    }, [newPassword]);

    const handleMouseEnter = () => setIsHovered(true);    
    const handleMouseLeave = () => setIsHovered(false);

    const handlePasswordSubmit = () => {        
        setLoading(true);  

        // Можно сохранить в localStorage, если это нужно
        localStorage.setItem('userData', JSON.stringify({ email, password: newPassword }));      
    };               

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
                        disabled    
                    />    
                </div>     

                {/* Текст "Ссылка для восстановления отправлена на почту" */}
                <div className="text_for_mistakes">
                    <p>Ссылка для восстановления отправлена на почту</p>
                </div>

                <div className='btnnForRecoveryPasswordPost'>           
                    {loading ? (    
                        <MainButton2 disabled={true}>Отправка...</MainButton2>    
                    ) : isHovered ? (    
                        <div className='bgforbtn11'>    
                            <MainButton2  
                                onMouseEnter={handleMouseEnter}  
                                onMouseLeave={handleMouseLeave}  
                                onClick={handlePasswordSubmit}  
                                disabled={isDisabled}  // Блокируем кнопку, если пароль не введен
                            >    
                                Отправить пароль    
                            </MainButton2>    
                        </div> 
                    ) : (
                        <MainButton2  
                            onMouseEnter={handleMouseEnter}  
                            onMouseLeave={handleMouseLeave}  
                            onClick={handlePasswordSubmit}  
                            disabled={isDisabled}  // Блокируем кнопку, если пароль не введен
                        >    
                            Отправить пароль
                        </MainButton2>   
                    )}           
                </div>         
            </div>         
        </>         
    );        
}