import React, { useState, useEffect } from "react";      
import './PasswordRecoveryForEmail.css';       
import MainButton from '../Button/MainButton';    
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
        }, 1000);

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

        const isButtonDisabled1 =true;
    return (          
        <>          
            <HeaderForLR/>      
            <div className="parent1">           
               
            </div>          
            <div className='centerforreg2'>
            <div className="text_for_login-zag">          
                Восстановление пароля          
            </div>          

            <div className="_frame_88201">           
            

                {/* Текст "Ссылка для восстановления отправлена на почту" */}
               

                  <form onSubmit={handlePasswordSubmit}>  
                              
                        
                            <div className='inputplustext1'>
                                      <div className='_blacknewpod6' > 


                                       
                                    <input 
                                      
                                        // className={`_rectangle16 ${error ? 'rectangle-error1' : ''}`}    
                                        type="email"         
                                        className='_rectangle16'         
                                        placeholder="Почта"         
                                        required         
                                        value={email} 
                                        disabled  
                                    />     
                                     </div>  
                              
                                      </div> 

                                      <div className="text_for_mistakes">
                                            <p>Ссылка для восстановления отправлена на почту</p>
                                        </div>
                                        
                                        
                                 <div className='btnnForReg-user1'>     
                                     {/* <div className='test1'> */}
                                                    <div className='btnnForRegPodcaster1'>     
                                                        {isButtonDisabled1 === true ? (     
                                                   
                                                                <MainButton disabled={isButtonDisabled1}>Отправить пароль</MainButton>    
                                                           
                                                        ) : isHovered ? (    
                                                            <div className='bgforbtnsave'>    
                                                                <MainButton
                                                                    onMouseEnter={handleMouseEnter} 
                                                                    onMouseLeave={handleMouseLeave} 
                                                                    disabled={isButtonDisabled1}
                                                                    onClick={handlePasswordSubmit}
                                                                >   
                                                                  Отправить пароль
                                                                </MainButton>   
                                                            </div> 
                                                        ) : (    
                                                            <MainButton
                                                                // onClick={props.ispressed} 
                                                                onMouseEnter={handleMouseEnter} 
                                                                onMouseLeave={handleMouseLeave} 
                                                                disabled={isButtonDisabled1}
                                                                onClick={handlePasswordSubmit}
                                                            >   
                                                              Отправить пароль 
                                                            </MainButton>  
                                                        )} 
                                    
                                    
                                                       
                                                    </div> 
                                                  
                                                        
                                 </div> 
                          
                            </form>
  
            </div>  

            </div>       
        </>         
    );        
}