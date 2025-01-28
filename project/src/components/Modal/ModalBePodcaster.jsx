import close from '/close.png'; 
import close1 from '/close1.png'; 
import add from '/add1.png'; 
import done from '/done.png'; 
import './Modal.css';  
import './ModalBePodcaster.css';  
import MainButton2 from '../Button/MainButton2'
import { useState, useRef, useEffect } from "react";
export default function  ModalBePodcaster ({ isOpen, onClose }, props) {
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

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value); //event.target — это элемент, который вызвал событие. В данном случае это радиокнопка (input)
    };

 const [Age, setAge] = useState('');
 const [errorAge, setErrorAge] = useState('');
 
 const handleAgeChange = (e) => {
     const value = e.target.value;
     setAge(value);
     setIsTextareaNotEmpty(value.trim() !== '');
    const descriptionPattern=/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\?.*)?$/i;
     if (!descriptionPattern.test(value)) {
        setErrorAge('Неверная ссылка');
     } else if (value.length > 100) {
        setErrorAge('Неверная ссылка');
     } else {
        setErrorAge('');
     }
 };
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
       const handleSubmit = (e) => {     
           e.preventDefault();     
       
           // Проверка на валидность    
           let hasError = false; // Флаг для отслеживания ошибки     
        
    
       
           // Обработка успешной валидации, если все поля заполнены    
           if (!hasError) {   
              
               console.log('Пост:', Age);      
               setErrorPost('');     
               
           }    
       };  
       useEffect(() => {
        // Проверка наличия ошибок
        const hasError = (errorAge=='') ;
    
        // Если хотя бы одно поле имеет ошибку — отключаем кнопку
        setIsButtonDisabled1(!hasError);
    }, [errorAge]);

           return (
        <div className="modal-overlayNP">
    
            <div className="modal-contentBP">
               <div className='thefirstrow'>
                <div className='newpod'>Стать подкастером</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              
                <form  className= "formformodal" onSubmit={handleSubmit}>  
        <div className='obedinforinputbepod'>
              {/* <div className='linesforradiobtn'> */}
        <div className='radiobuttn1'>
            
                    <input
                        type="radio"
                        value="Выполнить условия"
                        checked={selectedOption === 'Выполнить условия'}
                        onChange={handleOptionChange}
                    />
                   <label className='txtformbl'>Выполнить условие</label>
                    </div>

                 
                    {selectedOption === 'Выполнить условия' && (
                    <><div className='uslovie2'>
                                    <div className='uslovie'>
                                        <img className="image-class" src={done} alt={'Изображение кнопки'} />
                                        <p className='textformodal'>Набрать 100 подписчиков</p>
                                    </div>
                                    <div className='uslovie'>
                                        <img className="image-class" src={close1} alt={'Изображение кнопки'} />
                                        <p className='textformodal1'>Набрать 100 подписчиков</p>
                                    </div>
                                    <div className='uslovie'>
                                        <img className="image-class" src={done} alt={'Изображение кнопки'} />
                                        <p className='textformodal'>Набрать 100 подписчиков</p>
                                    </div>
                                </div>
                                <div className='liine'></div>  
                                <div className='btnnForBePodcaster1'>
                                        {props.testDeisabled === true ? (
                                            <div className='pocastdis'>
                                                <MainButton2 disabled={true}>   Стать подкастером   </MainButton2>
                                            </div>
                                        ) : isHovered ? (
                                            <div className='bgforbtnbepod'>
                                                <MainButton2
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    disabled={props.testDeisabled}
                                                >
                                                    Стать подкастером
                                                </MainButton2>
                                            </div>
                                        ) : (
                                            <MainButton2
                                                onClick={props.ispressed}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                disabled={props.testDeisabled}
                                            >
                                                Стать подкастером
                                            </MainButton2>
                                        )}
                                    </div>
                                    
                             <div className='btnnForBePodcaster2'>
                                        {isButtonDisabled1 === true ? (
                                            <div className='pocastdis'>
                                                <MainButton2 disabled={true}>   Стать подкастером   </MainButton2>
                                            </div>
                                        ) : isHovered ? (
                                            <div className='bgforbtnbepod'>
                                                <MainButton2
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    disabled={isButtonDisabled1}
                                                >
                                                    Стать подкастером
                                                </MainButton2>
                                            </div>
                                        ) : (
                                            <MainButton2
                                                onClick={props.ispressed}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                disabled={isButtonDisabled1}
                                            >
                                                Стать подкастером
                                            </MainButton2>
                                        )}
                                    </div>
                                    
                           
                        </> 
                    )}


                    <div className='bor'></div>
                     <div className='radiobuttn'>
                    <input
                        type="radio"
                        value="Прикрепить ссылку на mave"
                        checked={selectedOption === 'Прикрепить ссылку на mave'}
                        onChange={handleOptionChange}
                    />
                     <label className='txtformbl'>Прикрепить ссылку на mave</label>
                    </div>
 
                    
                    <div>
                       
                        {selectedOption === 'Прикрепить ссылку на mave' && (
                <><div className='inbepod'>

                                    <div className={`_blackforbepod ${errorAge ? '_red' : ''}  ${(focusedState.input6 && errorAge.trim()==='') ? '_pink' : ''} ${(errorAge.trim()==='' && isTextareaNotEmpty) ? '_green' : ''}`} >   
                                        <input 
                                        type="text"
                                         placeholder="Прикрепить ссылку на mave" 
                                         className={`_rectangle16_p2 ${errorAge ? '_rectangle_err' : ''}`}
                                         value={Age}
                                         onChange={handleAgeChange}
                                         required
                                         {...input6FocusHandlers}
                                         
                                         
                                         />
                                    </div>
                                     
                                        {errorAge && (    
                                        <div className="text_for_mistake">{errorAge}</div>    
                                        )} 

                                </div><div className='btnnForBePodcaster'>
                                        {isButtonDisabled1 === true ? (
                                            <div className='pocastdis'>
                                                <MainButton2 disabled={true}>   Стать подкастером   </MainButton2>
                                            </div>
                                        ) : isHovered ? (
                                            <div className='bgforbtnbepod'>
                                                <MainButton2
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    disabled={isButtonDisabled1}
                                                >
                                                    Стать подкастером
                                                </MainButton2>
                                            </div>
                                        ) : (
                                            <MainButton2
                                                onClick={props.ispressed}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                disabled={isButtonDisabled1}
                                            >
                                                Стать подкастером
                                            </MainButton2>
                                        )}
                                    </div>
                                    
                    <div className='btnnForBePodcaster2'>
                                        {isButtonDisabled1 === true ? (
                                            <div className='pocastdis'>
                                                <MainButton2 disabled={true}>   Стать подкастером   </MainButton2>
                                            </div>
                                        ) : isHovered ? (
                                            <div className='bgforbtnbepod'>
                                                <MainButton2
                                                    onMouseEnter={handleMouseEnter}
                                                    onMouseLeave={handleMouseLeave}
                                                    disabled={isButtonDisabled1}
                                                >
                                                    Стать подкастером
                                                </MainButton2>
                                            </div>
                                        ) : (
                                            <MainButton2
                                                onClick={props.ispressed}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                disabled={isButtonDisabled1}
                                            >
                                                Стать подкастером
                                            </MainButton2>
                                        )}
                                    </div>
                                    
                                    
                                    </> 



                        )}
                    </div>
            </div>
                   


          {/* </div> */}
        </form>
            </div>
        </div>
    );
};
