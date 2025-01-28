import close from '/close.png'; 
import add from '/add1.png'; 
import './Modal.css';  
import MainButton2 from '../Button/MainButton2'

import { useState, useRef, useEffect } from "react";
export default function  ModalEdit ({ isOpen, onClose, namme='', dess='', tagss='', agge='' }, props) {
    if (!isOpen) return null;


 const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); 
    const [isNameNotEmpty, setIsNameNotEmpty] = useState(false); 
    const [isDesNotEmpty, setIsDesNotEmpty] = useState(false); 
    const [isTagsNotEmpty, setIsTagsNotEmpty] = useState(false); 
    const [isAgeNotEmpty, setIsAgeNotEmpty] = useState(false); 
    const [name, setName] = useState(namme);     
    const [des, setDes] = useState(dess);   
    const [tags, setTags] = useState(tagss);
    const [age, setAge] = useState(agge);
    const [errorName, setErrorName] = useState('');   
    const [errorDes, setErrorDes] = useState('');   
    const [errorTags, setErrorTags] = useState(''); 
    const [errorAge, setErrorAge] = useState('');   
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
        } else if (value.length > 80) {
            setErrorName('Название поста не должно превышать 80 символов');
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
        } else if (value.length > 80) {
            setErrorDes('Описание поста не должно превышать 80 символов');
        } else {
            setErrorDes('');
        }  
    };  
    const handleTagsChange = (e) => {    
        const value = e.target.value;
        setTags(value);
        setIsTagsNotEmpty(value.trim() !== '');
        // Проверка описания профиля
        const descriptionPattern = /^[A-Za-zА-Яа-я0-9\s.,!?]{0,100}$/; // Разрешаем буквы, цифры, пробелы и знаки препинания
        if (!descriptionPattern.test(value)) {
            setErrorTags('Неверный тег');
        } else if (value.length > 40) {
            setErrorTags('Неверный тег');
        } else {
            setErrorTags('');
        }  
    };  
    const handleAgeChange = (e) => {    
        const value = e.target.value;
        setAge(value);
        setIsAgeNotEmpty(value.trim() !== '');
        // Проверка описания профиля
        const descriptionPattern = /^[1-9][0-9]*$/; // Разрешаем буквы, цифры, пробелы и знаки препинания
        if (!descriptionPattern.test(value)) {
            setErrorAge('неверно');
        } else if (value.length > 40) {
            setErrorAge('неверно');
        } else {
            setErrorAge('');
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

        if (tags.trim() === '' ) {   
            setErrorTags('Необходимо заполнить это поле');  
            hasError = true; 
        }  

        // Обработка успешной валидации, если все поля заполнены    
        if (!hasError) {   
            console.log('Имя пользователя:', name);     
            console.log('Ник:', des);     
            console.log('Пароль:', tags);     
         
            // Сбросить поля после успешной обработки    
            setDes('');     
            setAge('');    
            setName('');    
            setTags('');    
              
        }    
    }; 
    const [focusedState, setFocusedState] = useState({
        input1: false,
        input2: false,
        input3: false,
        input4: false,
       
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
  useEffect(() => {
        // Проверка наличия ошибок
        const hasError = (
            errorName === '' &&
            errorDes === '' &&
            errorTags === '' &&
            errorAge === '' &&
            name.trim() !== '' &&
            des.trim() !== ''
          );
  
        setIsButtonDisabled1(!hasError);
    }, [errorTags, errorAge, errorDes, errorName]); 


      
    return (
        <div className="modal-overlayNP">
    
            <div className="modal-contentEdit">
               <div className='thefirstrow'>
                <div className='newpod'>Изменить подкаст</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              
                <form  className= "formformodal" onSubmit={handleSubmit}>  
     
               
        <div className='obedinforinput'>
              
        <div className={` _greennewpod  ${errorName ? '_red' : ' '}  ${(focusedState.input1 && errorName.trim()==='') ? '_pink' : ' '} ${(isNameNotEmpty && errorName.trim()==='') ? '_green' : '  '}`} >   
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
                 
            <div className={` _greennewpod  ${errorDes ? '_red' : ' '}  ${(focusedState.input2 && errorDes.trim()==='') ? '_pink' : ' '} ${(isDesNotEmpty && errorDes.trim()==='') ? '_green' : ''}`} >      
                    <input type="text"
                    value={des}
                      placeholder="Описание"
                      onChange={handleDesChange}    
                      required  
                      className={`_rectangle16 ${errorDes ? 'rectangle-error' : ''}`}    
                      {...input2FocusHandlers}   />     
                </div> 

                {errorDes && (   
                    <div className="text_for_mistake">{errorDes}</div>   
                )}   


        <div className={` _greennewpod  ${errorTags ? '_red' : ''}  ${(focusedState.input3 && errorTags.trim()==='') ? '_pink' : ''} ${(isTagsNotEmpty && errorTags.trim()==='') ? '_green' : ''}`} >           
                <input 
                type="text"   
                className={`_rectangle16 ${errorTags ? 'rectangle-error' : ''}`}   
                placeholder="Теги"   
                value={tags}   
                onChange={handleTagsChange}   
                {...input3FocusHandlers} 
                required   
                />      
                </div>

                {/* Условное отображение ошибки для ника */}    
                {errorTags && (    
                <div className="text_for_mistake">{errorTags}</div>    
                )}   
     


     <div className={` _greennewpod ${errorAge ? '_red' : ''}  ${(focusedState.input4 && errorAge.trim()==='') ? '_pink' : ''} ${(isAgeNotEmpty && errorAge.trim()==='') ? '_green' : ''}`} >          
                <input type="text" 
                 placeholder="Возрастное ограничение (при наличии)" 
                 className={`_rectangle16 ${errorAge ? 'rectangle-error' : ''}`}    
                 value={age}   
                 onChange={handleAgeChange}   
                 {...input4FocusHandlers} 
                 required 
                 
                 />     
                    </div>   


                        <div className="frame5_1">    
                    <img src={add} alt="" className="add"/>    
                    <div className="text_for_download">    
                        Обложка   
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
