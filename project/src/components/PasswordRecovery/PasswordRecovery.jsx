import React, { useState, useEffect } from "react";  
import './PasswordRecovery.css' 
import MainButton2 from '../Button/MainButton2'; 
import HeaderForLR from "../Header/HeaderForLog"; 
import PasswordRecoveryTransition from "./PasswordRecoveryTransition"; 
import { useNavigate } from 'react-router-dom';
import MainButton from '../Button/MainButton'; 

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

       // Если модальное окно не открыто, ничего не рендерим
         const [podcasterData, setPodcasterData] = useState([]);
         const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); // Начальное состояние кнопки - отключена
    

        const [error, setError] = useState('');
        const [isEmailNotEmpty, setIsEmailNotEmpty] = useState(false); 
    
    
    
        const handleEmailChange = (e) => {
            const value = e.target.value;
            setEmail(value);
            setIsEmailNotEmpty(value.trim() !== '');
            // Простая регулярная проверка email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                setError('Введите корректный адрес электронной почты');
            } else {
                setError('');
            }
        };
       
     
        const [focusedState, setFocusedState] = useState({
            input1: false,
        
           
          });
          const createFocusHandler = (inputName) => {
            return {
              onFocus: () => {
                setFocusedState(prevState => ({
                  ...prevState,
                  [inputName]: true,
                }));
              },
              onBlur: () => {
                setFocusedState(prevState => ({
                  ...prevState,
                  [inputName]: false,
                }));
              },
            };
          };
          const input1FocusHandlers = createFocusHandler('input1');
    
       
        
    
        useEffect(() => {
            // Проверка наличия ошибок
            const hasError = (error=='' && isEmailNotEmpty ) ;
    
            // Если хотя бы одно поле имеет ошибку — отключаем кнопку
            setIsButtonDisabled1(!hasError);
        }, [error]); // Зависимости для проверки валидации Мы добавили зависимости в массив, чтобы useEffect вызывался каждый раз, когда изменяются состояния ошибок.
    
    

    return (   
        <>   
            <HeaderForLR/>  
            <div className="parent1">   
                
            </div>  
            <div className='centerforreg2'>
            <div className="text_for_login-zag">  
                Восстановление пароля  
            </div>  
            </div>

            <form onSubmit={handlePasswordSubmit}>  
              
            <div className="_frame_88201">   
            <div className='inputplustext1'>
                      <div className={` ${(focusedState.input1 && error.trim()==='') ? '_pink1' : '_blacknewpod5'}  ${error ? '_red1' : '_blacknewpod5'}   ${(isEmailNotEmpty && error.trim()==='' && focusedState.input1==false) ? '_green1' : '_blacknewpod5'}` } > 
                        
                    <input 
                        type="email" 
                        className={`_rectangle16 ${error ? 'rectangle-error1' : ''}`}    
                        placeholder="Почта" 
                        // value=''
                        onChange={handleEmailChange}
                        required 
                        {...input1FocusHandlers} 
                    />     
                     </div>  
                     {error && (
                               <div className="text_for_mistake">{error}</div>
                        )}
                  
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
            </div>   
            </form>
        </>   
    );  
}