import close from '/close.png'; 
import add from '/add1.png'; 
import './Modal.css';  
import React from "react";
const MIN_TEXTAREA_HEIGHT = 72;
import MainButton2 from '../Button/MainButton2'
import { useState, useRef, useEffect} from "react";
export default function  ModalNewPost ({ isOpen, onClose }, props) {
    if (!isOpen) return null;
    const [isHovered, setIsHovered] = useState(false);   
    const [isTextareaNotEmpty, setIsTextareaNotEmpty] = useState(false);  
    const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); 

const handleMouseEnter = () => {     
    setIsHovered(true);     
};     

const handleMouseLeave = () => {     
    setIsHovered(false);     
};     

const [post, setPost] = useState('');
const [errorPost, setErrorPost] = useState('');

const handlePostChange = (e) => {
    const value = e.target.value;
    setPost(value);
    setIsTextareaNotEmpty(value.trim() !== '');
    // Проверка описания профиля
    const descriptionPattern = /^[A-Za-zА-Яа-я0-9\s.,!?]{0,100}$/; // Разрешаем буквы, цифры, пробелы и знаки препинания
    if (!descriptionPattern.test(value)) {
        setErrorPost('Текст поста может содержать только буквы, цифры, пробелы и знаки препинания (до 40 символов)');
    } else if (value.length > 40) {
        setErrorPost('Текст поста не должен превышать 40 символов');
    } else {
        setErrorPost('');
    }
};

const handleSubmit = (e) => {     
    e.preventDefault();     

    // Проверка на валидность    
    let hasError = false; // Флаг для отслеживания ошибки     
 
   

    if (post.trim() === '') {    
        setErrorPost('Для публикации необходимо заполнить это поле');    
        hasError = true;
    }    

    // Обработка успешной валидации, если все поля заполнены    
    if (!hasError) {   
       
        console.log('Пост:', post);     
        
     
        // Сбросить поля после успешной обработки    
        setErrorPost('');     
        
    }    
};  
useEffect(() => {
    // Проверка наличия ошибок
    const hasError = (errorPost != '' || post.trim() === '' ) ;

    setIsButtonDisabled1(hasError);
}, [errorPost]); // Зависимости для проверки валидации Мы добавили зависимости в массив, чтобы useEffect вызывался каждый раз, когда изменяются состояния ошибок.



    const textareaRef = React.useRef(null);
    const [value, setValue] = React.useState("");
    const onChange = (event) => setValue(event.target.value);

    React.useLayoutEffect(() => {
        // Reset height - important to shrink on delete
        textareaRef.current.style.height = "inherit";
        // Set height
        textareaRef.current.style.height = `${Math.max(
          textareaRef.current.scrollHeight,
          MIN_TEXTAREA_HEIGHT
        )}px`;
      }, [value]);
      const [focusedState, setFocusedState] = useState({
       
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
    
      const input6FocusHandlers = createFocusHandler('input6');   
    return (
        <div className="modal-overlayNP">
    
            <div className="modal-contentNP">
               <div className='thefirstrow'>
                <div className='newpod'>Новый пост</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              




                <form  className= "formformodal" onSubmit={handleSubmit}>  
     
               
        <div className='obedinforinput'>
                        
                        
                    <div  ref={textareaRef}  className={`_bk ${(focusedState.input6 && errorPost.trim()==='') ? '_pink' : ''} ${(isTextareaNotEmpty && errorPost.trim()==='') ? '_green' : ''} ${errorPost ? '_red' : ''} `}>
                    <textarea  ref={textareaRef} 
                        className={`_rectangle16_p ${errorPost ? '_rectangle_err' : ''}`}
                        placeholder="Текст поста"
                        value={post}
                        onChange={handlePostChange}
            
                        required
                        {...input6FocusHandlers}
                           
                    >
                           value={value}
                    </textarea>
                </div>

                {/* Условное отображение ошибки для ника */}    
                {errorPost && (    
                <div className="text_for_mistake">{errorPost}</div>    
                )}   

                        <div className="frame5_1">    
                    <img src={add} alt="" className="add"/>    
                    <div className="text_for_download">    
                        Прикрепить фото   
                    </div>    
                </div>      

                <div className='btnnForRegPodcaster2'>     
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
