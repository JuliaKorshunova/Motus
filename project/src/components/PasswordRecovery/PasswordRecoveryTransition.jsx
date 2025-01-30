import React, { useState, useEffect } from "react"; 
import { useLocation } from 'react-router-dom'; 
import './PasswordRecoveryTransition.css'; 
import MainButton from '../Button/MainButton'; 
import HeaderForLR from "../Header/HeaderForLog"; 
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
    
       // Если модальное окно не открыто, ничего не рендерим
         const [podcasterData, setPodcasterData] = useState([]);
         const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); // Начальное состояние кнопки - отключена
    

    
    const [password, setPassword] = useState('');   
    const [errorPassword, setErrorPassword] = useState(''); 
    
    
      
      const [isPassNotEmpty, setIsPassNotEmpty] = useState(false);  
        const handlePasswordChange = (e) => {   
            const value = e.target.value;    
            setPassword(value);   
            setIsPassNotEmpty(value.trim() !== '');
           const passwordPattern=/(?=.*[a-z])(?=.*[A-Z])/;
            // Проверяем валидность пароля   
            if (!passwordPattern.test(value)) {    
                setErrorPassword('Пароль должен содержать строчную и заглавную буквы');    
            } else {    
                setErrorPassword(''); // Сбрасываем ошибку, если пароль валиден    
            }   
        };  
        const handleSubmit = (e) => {     
            e.preventDefault();     
    
            // Проверка на валидность    
            let hasError = false; // Флаг для отслеживания ошибки     
         
    
            if (password.trim() === '' || errorPassword) {   
                setErrorPassword('Пароль должен быть действительным');  
                hasError = true; 
            }  
           
       
            // Обработка успешной валидации, если все поля заполнены    
            if (!hasError) {   
            
                console.log('Пароль:', password);     
             

              
                setPassword('');    
      
            }    
        };  
        const [focusedState, setFocusedState] = useState({
           
            input2: false,
           
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

          const input2FocusHandlers = createFocusHandler('input2');
       
        
    
        useEffect(() => {
            // Проверка наличия ошибок
            const hasError = (errorPassword !='' || password =='') ;
    
            // Если хотя бы одно поле имеет ошибку — отключаем кнопку
            setIsButtonDisabled1(hasError);
        }, [errorPassword, password]); // Зависимости для проверки валидации Мы добавили зависимости в массив, чтобы useEffect вызывался каждый раз, когда изменяются состояния ошибок.
    
    return (   
        <>   
            <HeaderForLR/>  
            <div className="parent1">   
               
            </div>  
            <div className='centerforreg2'>
 
            <div className="text_for_login-zag">  
                Восстановление пароля  
            </div>  
                    <form onSubmit={handleSubmit}>  

            <div className="_frame_88201">  
                
           
                                              
                                        
                     <div className='inputplustext1'>
                          <div className='_blacknewpod6' > 
                              <input 
                                                      
                                   type="email" 
                                  className='_rectangle16' 
                                 placeholder="Почта" 
                                 defaultValue={email} // Устанавливаем значение
                                 required 
                                        />     
                             </div>  
                                              
                         </div> 
            
                                                        
                
                                          
                                          
                
                                            <div className='inputplustext1'>
          
              <div className={`  ${errorPassword ? '_red1' : '_blacknewpod3'}  ${(focusedState.input2 && errorPassword.trim()==='') ? '_pink1' : '_blacknewpod3'} ${(isPassNotEmpty && errorPassword.trim()==='' && focusedState.input2==false) ? '_green1' : '_blacknewpod3'}`} >   
                        <input    
                            type="password"    
                            className={`_rectangle16 ${errorPassword ? 'rectangle-error1' : ''}`}  
                            placeholder="Пароль"    
                            value={password}   
                     
                            onChange={handlePasswordChange}    
                            required    
                            {...input2FocusHandlers}  
                        />    </div>       
                        {errorPassword && (       
                            <div className="text_for_mistake">{errorPassword}</div>       
                        )}       
                    </div>   
 
               



                     <div className='btnnForReg-user1'>     
                                                    
                         
                                 {isButtonDisabled1 === true ? (     
                                                                   
                              <MainButton disabled={isButtonDisabled1}>Отправить пароль</MainButton>    
                                                                           
                                      ) : isHovered ? (    
                                     <div className='bgforbtnsave'>    
                                      <MainButton
                                         onMouseEnter={handleMouseEnter} 
                                        onMouseLeave={handleMouseLeave} 
                                        disabled={isButtonDisabled1}
                                         onClick={handleSubmit} >   
                                   Отправить пароль
                                     </MainButton>   
                                            </div> 
                                                 ) : (    
                                              <MainButton
                                                                                // onClick={props.ispressed} 
                                             onMouseEnter={handleMouseEnter} 
                                             onMouseLeave={handleMouseLeave} 
                                            disabled={isButtonDisabled1}
                                            onClick={handleSubmit}
                                                                            >   
                                             Отправить пароль 
                                    </MainButton>  
                                                                        )} 
                                                    
                                                    
                                                                       
                                     
                                                                  
                                                                        
                       </div> 
   </div>  
                       </form>                          
            </div>

          
        </>   
    );  
}