import close from '/close.png'; 
import add from '/add1.png'; 
import './ModalNewPodborka.css'; 
import './Modal.css';  

import searchImg from '/search.png'; 
import SecondImgButton from '../Button/SecondImgButton';
import './ModalSettings.css'; 
import MainButton2 from '../Button/MainButton2'
import SelectList from '../SelectList/SelectList';
import { useState, useEffect, useRef } from "react";
import SubscribesSection from '../SubscribesSection/SubscribesSection';
import ButtonExit from '../Button/ButtonExit/ButtonExit';
export default function  ModalNewPodborka ({ isOpen, onClose } ){
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





    const [selectedOption, setSelectedOption] = useState('');
   
    const handleSelectChange = (option) => {
        setSelectedOption(option);
        console.log(selectedOption);
      };




   // Если модальное окно не открыто, ничего не рендерим
     const [podcasterData, setPodcasterData] = useState([]);
     const [isButtonDisabled1, setIsButtonDisabled1] = useState(true); // Начальное состояние кнопки - отключена

    const [isChecked, setIsChecked] = useState(false);
    const [nazv, setNazv] = useState('');
const [error, setError] = useState('');
const [desc, setDesc] = useState('');
const [errorDesc, setErrorDesc] = useState('');
const [nickname, setNickname] = useState('');
const [errorNickName, setErrorNickName] = useState('');




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

    const [isNazvNotEmpty, setIsNazvNotEmpty] = useState(false);

    const handleNazvChange = (e) => {
        const value = e.target.value;
        setNazv(value);
        setIsNazvNotEmpty(value.trim() !== '');
        // Простая регулярная проверка email
        const Pattern = /^[A-Za-zА-Яа-яЁё ]{2,30}$/;
        if (!Pattern.test(value)) {
            setError('Введите корректное название');
        } else {
            setError('');
        }
    };
   
    const [isDescNotEmpty, setIsDescNotEmpty] = useState(false);
    const handleDescChange = (e) => {
        const value = e.target.value;
        setDesc(value);
        setIsDescNotEmpty(value.trim() !== '');
        // Простая регулярная проверка email
        const namePattern = /^[A-Za-zА-Яа-яЁё ]{2,30}$/;
        if (!namePattern.test(value)) {
            setErrorDesc('Введите корректное описание');
        } else {
            setErrorDesc('');
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


 
    const handleSubmit = (e) => {     
        e.preventDefault();     

        // Проверка на валидность    
        let hasError = false; // Флаг для отслеживания ошибки     
     
        if (desc.trim() === '') {    
            setErrorName('Необходимо заполнить это поле');     
            hasError = true;
        }    

        if (nazv.trim() === '') {    
            setErrorNickName('Необходимо заполнить это поле');    
            hasError = true;
        }    

     
        // Обработка успешной валидации, если все поля заполнены    
        if (!hasError) {   
            console.log(desc);     
            console.log(nazv);     
          
         
            // Сбросить поля после успешной обработки    
            setDesc('');     
            setNazv('');    
          
        }    
    };  
    const [focusedState, setFocusedState] = useState({
        input1: false,
        input2: false,
        input3: false,
      
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
   
      
    useEffect(() => {
        // Проверка наличия ошибок
        const hasError = (error=='' && errorDesc=='' && selectedOption !='' ) ;
    
        // Если хотя бы одно поле имеет ошибку — отключаем кнопку
        setIsButtonDisabled1(!hasError);
    }, [error, errorDesc, selectedOption]); // Зависимости для проверки валидации Мы добавили зависимости в массив, чтобы useEffect вызывался каждый раз, когда изменяются состояния ошибок.


    return (
        <div className="modal-overlayNewPodborka ">
    
            <div className="modal-contentNewPodborka" >
               <div className='thefirstrow'>
                <div className='newpod'>Новая подборка</div> 
                <img className='close' src={close} alt='user'   style={{ cursor: 'pointer'  }}  onClick={onClose}/>
                </div>
              


                
          {/* {podcasterData.map((pod, index) => ( */}
         

                <form  className= "formformodal" onSubmit={handleSubmit}>  
     
                     <div className='obedinforinput'>
              
            <div className='inputplustext'>
            <div className={`_blpass1  ${(focusedState.input1 && error.trim()==='') ? '_pink' : ''} ${(isNazvNotEmpty && error.trim()==='') ? '_green' : ''} ${error ? '_red' : ''}  `} >   
                    <input 
                        type="text" 
                        className={`_rectangle16 ${error ? 'rectangle-error' : ''}`}    
                        placeholder="Название" 
                        value={nazv}
                        onChange={handleNazvChange}
                        required 
                        {...input1FocusHandlers} 
                    />     
                     </div>  
                     {error && (
                               <div className="text_for_mistake">{error}</div>
                        )}
                  
                      </div>
                      <div className='inputplustext'>


               <div  className={`_textareablack ${(focusedState.input2 && errorDesc.trim()==='') ? '_pink' : ''} ${(isDescNotEmpty && errorDesc.trim()==='') ? '_green' : ''} ${errorDesc ? '_red' : ''} `}>
                    <textarea 
                        type="name" 
                        className={`_rectangle16_p ${errorDesc ? '_rectangle_err' : ''}`}
                      placeholder='Описание'
                        value={desc}
                        onChange={handleDescChange}
                        required 
                        {...input2FocusHandlers} 
                    />     
                    
                  </div> 
                  {errorDesc && (
                               <div className="text_for_mistake">{errorDesc}</div>
                        )}
              </div>  


           

{/* 
              <div className={`_blpass1 ${error ? '_red' : ''}  ${(focusedState.input3 && error.trim()==='') ? '_pink' : ''} ${(isNazvNotEmpty && error.trim()==='') ? '_green' : ''}`} >   
            <select id="dropdown"  className='_rectangle16_p' value={selectedOption} onChange={handleSelectChange}>

                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            </div> */}

            <div className='selectlist'>
                 
                    <SelectList 
                        onChange={handleSelectChange}
                        selectedOption={selectedOption} 
                      
                    />
            </div>

        
                    

         
  
           
              
        <div className='testPodborka'>
                <div className='btnnForPodborka'>     
                    {isButtonDisabled1 === true ? (     
                          
                            <MainButton2 disabled={isButtonDisabled1}>Создать</MainButton2>    
                       
                    ) : isHovered ? (    
                        <div className='bgforbtncreate'>    
                            <MainButton2 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                disabled={isButtonDisabled1}
                            >   
                               Создать  
                            </MainButton2>   
                        </div> 
                    ) : (    
                        <MainButton2 
                            // onClick={props.ispressed} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                            disabled={isButtonDisabled1}
                        >   
                             Создать    
                        </MainButton2>  
                    )} 


                   
                </div> 
                 </div>
                <div className='addrel'>
                    Сразу добавить выпуски:
                </div>

                <div className={`_rectangleGreen`} >
                    <input 
                        type='text' 
                        className={`_rectangle16`}    
                
                        required 
                   
                    />     
                     </div>  


         <div className='ssearch'>
                           { isHovered1 === true ? (
                               <SecondImgButton
                        
                            
                               isImg={true}
                               isActive={false}
                               onMouseEnter={handleMouseEnter1}
                               onMouseLeave={handleMouseLeave1}
                           >
                               <img className="image-class" src={searchImg} alt={ 'Изображение кнопки'} />
                           </SecondImgButton>) : 
                           (
                              <div className="bgforbtnn">  
                              <SecondImgButton
                        
                            
                               isImg={true}
                               isActive={false}
                               onMouseEnter={handleMouseEnter1}
                               onMouseLeave={handleMouseLeave1}
                           >
                               <img className="image-class" src={searchImg} alt={ 'Изображение кнопки'} />
                           </SecondImgButton>
                           </div>)}
                    
                 </div>
          </div>
                
        </form>  
       

            

                <div className='addsub' >
                      <SubscribesSection></SubscribesSection>
                </div>

          

            </div>


       
        </div>

        
    );
};
