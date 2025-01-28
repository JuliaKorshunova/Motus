import close from '/close.png'; 
import add from '/add1.png'; 
import './Modal.css';  
import './ModalSettings.css'; 
import MainButton2 from '../Button/MainButton2'
import { useState, useEffect } from "react";
import ButtonExit from '../Button/ButtonExit/ButtonExit';
export default function  ModalSettings ({ isOpen, onClose, namme, emmail, niick, desc, linnk } ){
    if (!isOpen) return null; 

   
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open'); // Отключаем прокрутку на фоне

            // Обработчик прокрутки
            const handleWheel = (e) => {
                const modalContent = document.getElementById('block');
                if (modalContent) {
                    modalContent.scrollTo(0, modalContent.scrollTop + e.deltaY);
                    e.preventDefault(); // Предотвращаем прокрутку страницы
                }
            };

            document.addEventListener("wheel", handleWheel, { passive: false });

            // Очистка: убираем обработчик событий при размонтировании
            return () => {
                document.body.classList.remove('modal-open'); // Включаем прокрутку для тела
                document.removeEventListener("wheel", handleWheel);
            };
        }
    }, [isOpen]);

   // Если модальное окно не открыто, ничего не рендерим
     const [podcasterData, setPodcasterData] = useState([]);
     const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); // Начальное состояние кнопки - отключена

    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState(emmail);
const [error, setError] = useState('');
const [name, setName] = useState(namme);
const [errorname, setErrorName] = useState('');
const [nickname, setNickname] = useState(niick);
const [errorNickName, setErrorNickName] = useState('');
const [description, setDescription] = useState(desc);
const [errorDes, setErrorDes] = useState('');
const [password, setPassword] = useState('');   
const [errorPassword, setErrorPassword] = useState(''); 
const [link, setLink] = useState(linnk);
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

    

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

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
        const hasError = (error=='' && errorname=='' && errorDes=='' && errorLink=='' && errorNickName=='' && errorPassword=='' && isChecked==true) ;
        console.log("isChecked inside useEffect:", isChecked); // Добавим консоль для отслеживания

        // Если хотя бы одно поле имеет ошибку — отключаем кнопку
        setIsButtonDisabled1(!hasError);
    }, [error, errorname, errorDes, errorLink, errorNickName, errorPassword, isChecked]); // Зависимости для проверки валидации Мы добавили зависимости в массив, чтобы useEffect вызывался каждый раз, когда изменяются состояния ошибок.


    return (
        <div className="modal-overlays">
    
            <div className="modal-contents" >
               <div className='thefirstrow'>
                <div className='newpod'>Настройки</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              


                
          {/* {podcasterData.map((pod, index) => ( */}
         

                <form  className= "formformodal" onSubmit={handleSubmit}>  
     
                     <div className='obedinforinput'>
              
            <div className='inputplustext'>
            <div className={`_rectangle15_1green ${error ? 'rectangle-container-error' : ''} ${ focusedState.input1  ? '_rectangle15_3pink' : ''}`} >
                    <input 
                        type="email" 
                        className={`_rectangle16 ${error ? 'rectangle-error' : ''}`}    
                        placeholder="Почта" 
                        value={email}
                        onChange={handleEmailChange}
                        required 
                        {...input1FocusHandlers} 
                    />     
                     </div>  
                     {error && (
                               <div className="text_for_mistake">{error}</div>
                        )}
                  
                      </div>
                      <div className='inputplustext'>
                <div className={`_rectangle15_2green ${error ? 'rectangle-container-error' : ''} ${focusedState.input2  ? '_rectangle15_3pink' : ''}`} >  
                    <input 
                        type="name" 
                        className={`_rectangle16 ${errorname ? 'rectangle-error' : ''}`}    
                      
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
              <div className='inputplustext'>
              <div className={`_rectangle15_3green ${error ? 'rectangle-container-error' : ''} ${focusedState.input3 ? '_rectangle15_3pink' : ''}`} >
                    <input 
                        type="text" 
                        className={`_rectangle16 ${errorNickName ? 'rectangle-error' : ''}`}    
                      
                         value={nickname}
                        onChange={handleNicknameChange}
                        required 
                        {...input3FocusHandlers} 
                    />     </div>    

                        {errorNickName && (
                               <div className="text_for_mistake">{errorNickName}</div>
                        )}
                      </div>
                  
                      <div className='inputplustext'>
                      <div style={{backgroundColor: focusedState.input4 ? '_rectangle15_3pink' : ''}} className={`_rectangle15_3green ${errorDes ? 'rectangle-container-error' : ''}  ${focusedState.input4 ? '_rectangle15_3pink' : ''}`}>
                      <textarea // Использование textarea
                        className={`_rectangle16 ${errorDes ? 'rectangle-error' : ''}`}
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                        {...input4FocusHandlers}
                      />
                     </div>
                     {errorDes && (
                               <div className="text_for_mistake">{errorDes}</div>
                        )}
                    </div>
                  
            
              <div className="frame5_1">    
                    <img src={add} alt="" className="add"/>    
                    <div className="text_for_download">    
                        Загрузить фото профиля   
                    </div>    
                </div> 

                     <div className='inputplustext'>
                     <div className={`_rectangle15_3green ${error ? 'rectangle-container-error' : ''} ${focusedState.input5 ? '_rectangle15_3pink' : ''}`} >
                    <input 
                        type="text" 
                        className={`_rectangle16 ${errorLink ? 'rectangle-error' : ''}`}    
                   
                        value={link}
                        onChange={handleLinkChange}
                        required 
                        {...input5FocusHandlers} 
                    />  </div>     
                    {errorLink && (
                               <div className="text_for_mistake">{errorLink}</div>
                        )}
                  
              </div>
              <div className='inputplustext'>
              {/* <div className={`_rectangle15_3green ${errorPassword ? 'rectangle-container-error' : ''} ${focusedState.input6 ? '_rectangle15_3pink' : ''}`} > */}
              <div className={`  ${errorPassword ? '_red' : '_blacknewpod2'}  ${(focusedState.input6 && errorPassword.trim()==='') ? '_pink' : '_blacknewpod2'} ${(isPassNotEmpty && errorPassword.trim()==='') ? '_green' : '_blacknewpod2'}`} >   
                        <input    
                            type="password"    
                            className={`_rectangle16 ${errorPassword ? 'rectangle-error' : ''}`}  
                            placeholder="Изменить пароль"    
                            value={password}   
                     
                            onChange={handlePasswordChange}    
                            required    
                            {...input6FocusHandlers}  
                        />    </div>       
                        {errorPassword && (       
                            <div className="text_for_mistake">{errorPassword}</div>       
                        )}       
                    </div>  
                    <div className="checkbox-container">
                        <div className='blockforcheckbox'> </div>
                        <input 
                            type="checkbox" 
                            className="checkbox-input" 
                            checked={isChecked} 
                            onChange={handleCheckboxChange} 
                            id="custom-checkbox"/>
                             
                        <label htmlFor="custom-checkbox" className="custom-checkbox"></label>
                        <span className="checkbox-label">Я согласен с условиями использования</span>
        </div>
        <div className='test1'>
                <div className='btnnForRegPodcaster1'>     
                    {isButtonDisabled1 === true ? (     
                          
                            <MainButton2 disabled={isButtonDisabled1}>Сохранить изменения</MainButton2>    
                       
                    ) : isHovered ? (    
                        <div className='bgforbtnsave'>    
                            <MainButton2 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                disabled={isButtonDisabled1}
                            >   
                               Сохранить изменения  
                            </MainButton2>   
                        </div> 
                    ) : (    
                        <MainButton2 
                            // onClick={props.ispressed} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                            disabled={isButtonDisabled1}
                        >   
                             Сохранить изменения    
                        </MainButton2>  
                    )} 


                   
                </div> 
                { isHovered1 ? (    
                        <div className='bgforbtnexit'>    
                            <ButtonExit 
                                onMouseEnter={handleMouseEnter1} 
                                onMouseLeave={handleMouseLeave1} 
                              
                            >   
                                Выйти из аккаунта   
                            </ButtonExit>   
                        </div> 
                    ) : (    
                        <ButtonExit 
                          
                            onMouseEnter={handleMouseEnter1} 
                            onMouseLeave={handleMouseLeave1} 
                           
                        >   
                            Выйти из аккаунта  
                        </ButtonExit>  
                    )}   </div>
          </div>
          {/* <div class="empty-block"></div> */}
        </form>  
        {/* ))} */}
            </div>
       
        </div>

        
    );
};
