import close from '/close.png'; 
import add from '/add1.png'; 
import './Modal.css';  
import MainButton2 from '../Button/MainButton2'
import { useState, useRef, useEffect } from "react";
export default function  ModalNewRelease ({ isOpen, onClose }, props) {
    if (!isOpen) return null;


 
    const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); 
    const [isNameNotEmpty, setIsNameNotEmpty] = useState(false); 
    const [isDesNotEmpty, setIsDesNotEmpty] = useState(false); 
   
    const [name, setName] = useState('');     
    const [des, setDes] = useState('');   

    const [errorName, setErrorName] = useState('');   
    const [errorDes, setErrorDes] = useState('');   


    const [isHovered, setIsHovered] = useState(false);  
    const handleMouseEnter = () => {     
        setIsHovered(true);     
    };     
    
    const handleMouseLeave = () => {     
        setIsHovered(false);     
    };    
    const handleNameChange = (e) => {    
        const value = e.target.value;
        setName(value);
        setIsNameNotEmpty(value.trim() !== '');
        // Проверка описания профиля
        const descriptionPattern = /^[A-Za-zА-Яа-я0-9\s.,!?]{0,100}$/; // Разрешаем буквы, цифры, пробелы и знаки препинания
        if (!descriptionPattern.test(value)) {
            setErrorName('Название поста может содержать только буквы, цифры, пробелы и знаки препинания (до 40 символов)');
        } else if (value.length > 40) {
            setErrorName('Название поста не должно превышать 40 символов');
        } else {
            setErrorName('');
        }  
    };    
    const handleDesChange = (e) => {    
        const value = e.target.value;
        setDes(value);
        setIsDesNotEmpty(value.trim() !== '');
        // Проверка описания профиля
        const descriptionPattern = /^[A-Za-zА-Яа-я0-9\s.,!?]{0,100}$/; // Разрешаем буквы, цифры, пробелы и знаки препинания
        if (!descriptionPattern.test(value)) {
            setErrorDes('Описание поста может содержать только буквы, цифры, пробелы и знаки препинания (до 40 символов)');
        } else if (value.length > 40) {
            setErrorDes('Описание поста не должно превышать 40 символов');
        } else {
            setErrorDes('');
        }  
    };  
    const handleSubmit = (e) => {     
        e.preventDefault();     

        // Проверка на валидность    
        let hasError = false; // Флаг для отслеживания ошибки     
     
        if (name.trim() === '') {    
            setErrorName('Необходимо заполнить это поле');     
            hasError = true;
        }    

        if (des.trim() === '') {    
            setErrorDes('Необходимо заполнить это поле');    
            hasError = true;
        }    

        // Обработка успешной валидации, если все поля заполнены    
        if (!hasError) {   
            console.log('Имя пользователя:', name);     
            console.log('Ник:', des);     
    
         
            // Сбросить поля после успешной обработки    
            setDes('');        
            setName('');    
           
              
        }    
    }; 
    const [focusedState, setFocusedState] = useState({
        input1: false,
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
      const input1FocusHandlers = createFocusHandler('input1');
      const input2FocusHandlers = createFocusHandler('input2');
 
  useEffect(() => {
        // Проверка наличия ошибок
        const hasError = (
            errorName === '' &&
            errorDes === '' &&
           
            name.trim() !== '' &&
            des.trim() !== ''
          );
  
        setIsButtonDisabled1(!hasError);
    }, [ errorDes, errorName]); 


    return (
        <div className="modal-overlay">
    
            <div className="modal-contentrel">
               <div className='thefirstrow'>
                <div className='newpod'>Новый выпуск</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              




                <form  className= "formformodal" onSubmit={handleSubmit}>  
     
               
        <div className='obedinforinput'>
              
                 
        <div className={`  ${errorName ? '_red' : '_blacknewpod'}  ${(focusedState.input1 && errorName.trim()==='') ? '_pink' : '_blacknewpod'} ${(isNameNotEmpty && errorName.trim()==='') ? '_green' : '_blacknewpod'}`} >   
                    <input    
                        type="text"    
                        placeholder="Название"    
                        value={name}    
                        onChange={handleNameChange}    
                        required  
                        className={`_rectangle16 ${errorName ? 'rectangle-error' : ''}`}    
                        {...input1FocusHandlers}   
                    />     
                </div>    
                   {/* Условное отображение ошибки для имени пользователя */}   
                   {errorName && (   
                    <div className="text_for_mistake">{errorName}</div>   
                )}    
                    
                <div  className={`_bk ${(focusedState.input2 && errorDes.trim()==='') ? '_pink' : ''} ${(isDesNotEmpty && errorDes.trim()==='') ? '_green' : ''} ${errorDes ? '_red' : ''} `}>
                    <textarea 
                        className={`_rectangle16_p ${errorDes ? '_rectangle_err' : ''}`}
                        placeholder="Текст поста"
                        value={des}
                        onChange={handleDesChange}
            
                        required
                        {...input2FocusHandlers}
                           
                    >
                           {/* value={value} */}
                    </textarea>
                </div>

                {/* Условное отображение ошибки для ника */}    
                {errorDes && (    
                <div className="text_for_mistake">{errorDes}</div>    
                )}  
                   
            
        

                        <div className="frame5_1">    
                    <img src={add} alt="" className="add"/>    
                    <div className="text_for_download">    
                        Загрузить файл   
                    </div>    
                </div>      

                <div className='btnnForRegPodcaster'>     
                    {isButtonDisabled1 === true ? (     
                        <div className='pocastdis'>     
                            <MainButton2 disabled={true}>Опубликовать</MainButton2>    
                        </div>    
                    ) : isHovered ? (    
                        <div className='bgforbtn6'>    
                            <MainButton2 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                disabled={isButtonDisabled1}
                            >   
                                Опубликовать   
                            </MainButton2>   
                        </div> 
                    ) : (    
                        <MainButton2 
                            onClick={props.ispressed} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                            disabled={isButtonDisabled1}
                        >   
                            Опубликовать  
                        </MainButton2>  
                    )}   
                </div> 
          </div>
        </form>
            </div>
        </div>
    );
};
