import React, { useState, useEffect } from "react"; // Убедись, что useState импортирован
import './Register.css'
import MainButton2 from '../Button/MainButton2';
import add from '/add.svg';


export default function Register(props) {    

    const username=''
      const emaill=''
  

   // Если модальное окно не открыто, ничего не рендерим
     const [podcasterData, setPodcasterData] = useState([]);
     const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); // Начальное состояние кнопки - отключена

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState(emaill);
const [error, setError] = useState('');
const [name, setName] = useState(username);
const [errorname, setErrorName] = useState('');
const [nickname, setNickname] = useState('');
const [errorNickName, setErrorNickName] = useState('');
const [description, setDescription] = useState('');
const [errorDes, setErrorDes] = useState('');
const [password, setPassword] = useState('');   
const [errorPassword, setErrorPassword] = useState(''); 
const [link, setLink] = useState('');
const [errorLink, setErrorLink] = useState('');



        const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
       
        };


        const [isHovered, setIsHovered] = useState(false);   
        const [isHovered1, setIsHovered1] = useState(false);   

    const handleMouseEnter = () => {     
        setIsHovered(true);     
    };     
 
    const handleMouseLeave = () => {     
        setIsHovered(false);     
    };     

    const handleMouseEnter1 = () => {     
        setIsHovered1(true);     
    };     
 
    const handleMouseLeave1 = () => {     
        setIsHovered1(false);     
    };     

    
    const [isEmailNotEmpty, setIsEmailNotEmpty] = useState(false); 
    
    const [isNameNotEmpty, setIsNameNotEmpty] = useState(false); 
    const [isNickNameNotEmpty, setIsNickNameNotEmpty] = useState(false);
    const [isDesNotEmpty, setIsDesNotEmpty] = useState(false); 


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
   

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setIsNameNotEmpty(value.trim() !== '');
        // Простая регулярная проверка email
        const namePattern = /^[A-Za-zА-Яа-яЁё ]{2,30}$/;
        if (!namePattern.test(value)) {
            setErrorName('Введите корректное имя');
        } else {
            setErrorName('');
        }
    };


    const handleNicknameChange = (e) => {
        const value = e.target.value;
        setNickname(value);
        setIsNickNameNotEmpty(value.trim() !== '');
        // Проверка никнейма
        const nicknamePattern = /^@[A-Za-z]{2,19}$/; // @ в начале, разрешаем только английские буквы, длина от 3 до 20 (вместе с символом @)
        if (!nicknamePattern.test(value)) {
            setErrorNickName('Никнейм должен начинаться с @ и содержать только английские буквы, длина от 3 до 20 символов');
        } else {
            setErrorNickName('');
        }
    };

    const handleDescriptionChange = (e) => {
        const value = e.target.value;
        setDescription(value);
        setIsDesNotEmpty(value.trim() !== '');
        // Проверка описания профиля
        const descriptionPattern = /^[A-Za-zА-Яа-я0-9\s.,!?]{0,100}$/; // Разрешаем буквы, цифры, пробелы и знаки препинания
        if (!descriptionPattern.test(value)) {
            setErrorDes('Описание профиля может содержать только буквы, цифры, пробелы и знаки препинания (до 40 символов)');
        } else if (value.length > 40) {
            setErrorDes('Описание профиля не должно превышать 40 символов');
        } else {
            setErrorDes('');
        }
    };


    const handleLinkChange = (e) => {
        const value = e.target.value;
        setLink(value);

        // Проверка описания профиля
        const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/; 
        if (!urlPattern.test(value)) {
            setErrorLink('Неверная ссылка');
        }  else {
            setErrorLink('');
        }
    };
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
     
        if (name.trim() === '') {    
            setErrorName('Для регистрации необходимо заполнить это поле');     
            hasError = true;
        }    

        if (nickname.trim() === '') {    
            setErrorNickName('Для регистрации необходимо заполнить это поле');    
            hasError = true;
        }    

        if (password.trim() === '' || errorPassword) {   
            setErrorPassword('Пароль должен быть действительным');  
            hasError = true; 
        }  
        if (email.trim() === '' || error) {   
            setError('Пароль должен быть действительным');  
            hasError = true; 
        }  
        if (link.trim() === '' || errorLink) {   
            setErrorLink('Пароль должен быть действительным');  
            hasError = true; 
        }  
        if (description.trim() === '' || errorDes) {   
            setErrorDes('Пароль должен быть действительным');  
            hasError = true; 
        }  
        // Обработка успешной валидации, если все поля заполнены    
        if (!hasError) {   
            console.log('Имя пользователя:', name);     
            console.log('Ник:', nickname);     
            console.log('Пароль:', password);     
         
            // Сбросить поля после успешной обработки    
            setUsername('');     
            setNickname('');    
            setPassword('');    
            setErrorUsername('');    
            setErrorNickname('');    
            setErrorPassword('');    
        }    
    };  
    const [focusedState, setFocusedState] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
        input5: false,
        input6: false,
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
      const input2FocusHandlers = createFocusHandler('input2');
      const input3FocusHandlers = createFocusHandler('input3');
      const input4FocusHandlers = createFocusHandler('input4');
      const input5FocusHandlers = createFocusHandler('input5');
      const input6FocusHandlers = createFocusHandler('input6');    
    

    useEffect(() => {
        // Проверка наличия ошибок
        const hasError = (error=='' && errorname=='' && errorDes=='' && errorLink=='' && errorNickName=='' && errorPassword=='') ;
        console.log("isChecked inside useEffect:", isChecked); // Добавим консоль для отслеживания

        // Если хотя бы одно поле имеет ошибку — отключаем кнопку
        setIsButtonDisabled1(!hasError);
    }, [error, errorname, errorDes, errorLink, errorNickName, errorPassword, isChecked]); // Зависимости для проверки валидации Мы добавили зависимости в массив, чтобы useEffect вызывался каждый раз, когда изменяются состояния ошибок.

    


    return ( 
        <>
        

        

        <form onSubmit={handleSubmit}>  
        <div className="parent">      
             
        </div>    
               
            <div className="_frame_8820">     
            

                      <div className='inputplustext1'>
                      <div className={` ${(focusedState.input1 && error.trim()==='') ? '_pink1' : '_blacknewpod3'}  ${error ? '_red1' : '_blacknewpod3'}   ${(isEmailNotEmpty && error.trim()==='' && focusedState.input1==false) ? '_green1' : '_blacknewpod3'}` } > 
                        
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



                      <div className='inputplustext1'>
                      <div className={`  ${errorname ? '_red1' : '_blacknewpod3'}  ${(focusedState.input2 && errorname.trim()==='') ? '_pink1' : '_blacknewpod3'} ${(isNameNotEmpty && errorname.trim()==='' && focusedState.input2==false) ? '_green1' : '_blacknewpod3'}`} > 
                    <input 
                        type="name" 
                        className={`_rectangle16 ${errorname ? 'rectangle-error1' : ''}`}    
                        placeholder="Имя пользователя" 
                        value={name}
                        onChange={handleNameChange}
                        required 
                        {...input2FocusHandlers} 
                    />     
                    
                  </div> 
                  {errorname && (
                               <div className="text_for_mistake">{errorname}</div>
                        )}
              </div>  
              <div className='inputplustext1'>
              <div className={`  ${errorNickName ? '_red1' : '_blacknewpod3'}  ${(focusedState.input3 && errorNickName.trim()==='') ? '_pink1' : '_blacknewpod3'} ${(isNickNameNotEmpty && errorNickName.trim()==='' && focusedState.input3==false) ? '_green1' : '_blacknewpod3'}`} > 
                    <input 
                        type="text" 
                        className={`_rectangle16 ${errorNickName ? 'rectangle-error1' : ''}`}    
                        placeholder="Ник" 
                         value={nickname}
                        onChange={handleNicknameChange}
                        required 
                        {...input3FocusHandlers} 
                    />     </div>    

                        {errorNickName && (
                               <div className="text_for_mistake">{errorNickName}</div>
                        )}
                      </div>
                  
                      <div className='inputplustext1'>
                      <div className={`  ${errorDes ? '_red1' : '_blacknewpod4'}  ${(focusedState.input4 && errorDes.trim()==='') ? '_pink1' : '_blacknewpod4'} ${(isDesNotEmpty && errorDes.trim()==='' && focusedState.input4==false) ? '_green1' : '_blacknewpod4'}`} > 
                      <textarea // Использование textarea
                        className={`_rectangle161 ${errorDes ? 'rectangle-error161' : ''}`}
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                        placeholder="Описание профиля"
                        {...input4FocusHandlers}
                      />
                     </div>
                     {errorDes && (
                               <div className="text_for_mistake">{errorDes}</div>
                        )}
                    </div>
                  
            
                <div className="frame5_1_desk">    
                    <img src={add} alt="" className="add_desk"/>    
                    <div className="text_for_download_desk">    
                        Загрузить фото профиля    
                    </div>    
                </div>   

                <div className="frame5_2_desk">    
                    <img src={add} alt="" className="add_desk"/>    
                    <div className="text_for_link_desk">    
                        Прикрепить ссылку    
                    </div>    
                </div> 

                <div className='inputplustext1'>
              {/* <div className={`_rectangle15_3green ${errorPassword ? 'rectangle-container-error' : ''} ${focusedState.input6 ? '_rectangle15_3pink' : ''}`} > */}
              <div className={`  ${errorPassword ? '_red1' : '_blacknewpod3'}  ${(focusedState.input6 && errorPassword.trim()==='') ? '_pink1' : '_blacknewpod3'} ${(isPassNotEmpty && errorPassword.trim()==='' && focusedState.input4==false) ? '_green1' : '_blacknewpod3'}`} >   
                        <input    
                            type="password"    
                            className={`_rectangle16 ${errorPassword ? 'rectangle-error1' : ''}`}  
                            placeholder="Пароль"    
                            value={password}   
                     
                            onChange={handlePasswordChange}    
                            required    
                            {...input6FocusHandlers}  
                        />    </div>       
                        {errorPassword && (       
                            <div className="text_for_mistake">{errorPassword}</div>       
                        )}       
                    </div>     

                <div className='btnnForReg-user'>     
                    {/* <div className='test1'> */}
                              
                                       {isButtonDisabled1 === true ? (     
                                             
                                               <MainButton2 disabled={isButtonDisabled1}>Создать аккаунт</MainButton2>    
                                          
                                       ) : isHovered ? (    
                                           <div className='bgforbtnsave'>    
                                               <MainButton2 
                                                   onMouseEnter={handleMouseEnter} 
                                                   onMouseLeave={handleMouseLeave} 
                                                   disabled={isButtonDisabled1}
                                               >   
                                                  Создать аккаунт
                                               </MainButton2>   
                                           </div> 
                                       ) : (    
                                           <MainButton2 
                                               // onClick={props.ispressed} 
                                               onMouseEnter={handleMouseEnter} 
                                               onMouseLeave={handleMouseLeave} 
                                               disabled={isButtonDisabled1}
                                           >   
                                             Создать аккаунт 
                                           </MainButton2>  
                                       )} 
                   
                   
                                      
                              
                                 
                                        {/* </div> */}
                </div> 
            </div>  
        </form>
        </>
    ); 
}