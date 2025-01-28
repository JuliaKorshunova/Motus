import React from 'react';
import styles from './SelectList.module.css';

import Select from 'react-select';
import { useState, useEffect, useRef } from "react";
// const options = [
//     { value: 'option1', label: 'Только для Вас' , style: {  borderRadius: '13px 13px 0px 0px'}, style: { backgroundColor: 'lightcoral', color: 'white' } },
//     { value: 'option2', label: 'С доступом по ссылке' },
//     { value: 'option3', label: 'Публичная', style: { borderRadius: '0 0 13px 13px' }}
// ];


const SelectList = ( {selectedOption, onChange}) => {

  
  const customStyles = {
    control: (provided) => ({
        // ...provided,
        display: 'flex', // Используйте Flexbox
        alignItems: 'center', // Вертикальное выравнивание по центру
        background: '#FFFFFF',
        borderRadius: '7px',
        border: 'none',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        // fontSize: '16px',
        lineHeight: '126%',
        color: '#000000',
        // height: '40px',
        textAlign: 'left',
        padding: '0px',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word',
        resize: 'none',
        overflow: 'hidden',
        boxShadow: 'none',
        width: isMobile ? 'calc (100vw - 50px)' : 'calc (100% - 2px)',
        height: isMobile ? '24px' : '40px',
        fontSize: isMobile ? '12px' : '16px',
        paddingLeft: isMobile ? '0px' : '14px',
        '&:hover': {
            boxShadow: 'none',
            border: 'none',
        },
        '&:focus': {
            border: 'none',
            outline: 'none',
            boxShadow: 'none'
        },
      
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 9999,
        background: 'white',
        marginTop: '5px',
        boxShadow: 'none',
    }),
    menuList: (provided) => ({
        ...provided,
        padding: '0px',
        background: '#FF0074',
    }),
    option: (provided, state) => ({
        ...provided,
        display: 'flex', // Используйте Flexbox
        alignItems: 'center', // Вертикальное выравнивание по центру
    
        border: 'none',
        margin: '0px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        borderRadius: '7px',
        fontSize: '16px',
        lineHeight: '126%',
        height: '40px',
        textAlign: 'left',
        padding: '10px',
        paddingLeft: '20px',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word',
        width: 'calc(100%)',
        resize: 'none',
        overflow: 'hidden',
        backgroundColor: 'white',
        color: 'black',
        ...(state.isSelected && {
            backgroundColor: 'white',
            color: 'black',
        }),
        ...(window.innerWidth < 1280 && {
            paddingLeft: '12px',
            height: '24px',
            fontSize: '12px', // Изменение размера шрифта для экранов меньше 1280px
        }),
    }),
};

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 1280);
      };

      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

const options = [
    { value: 'Только для Вас', label: 'Только для Вас' },
    { value: 'С доступом по ссылке', label: 'С доступом по ссылке' },
    { value: 'Публичная', label: 'Публичная'},
];

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

    return (
        <div className={`_blSelect   ${(focusedState.input1) ? '_pink' : ''} `} >   
          
            <Select
                options={options}
                styles={customStyles}
                
                onChange={onChange}  // Теперь вызываем функцию из родителя
                value={selectedOption}
                {...input1FocusHandlers} 
                // {...props}
                // styles={{
                // control: (provided) => ({
                //     ...provided,
                // className: styles.control, }),
                // menu: (provided) => ({
                //     ...provided,
                // className: styles.menu, }),
                // menuList: (provided) => ({
                //     ...provided,
                // className: styles.menu, }),
                // option: (provided) => ({
                //     ...provided,
                // className: styles.menu, }),
                //             // Другие стили...
                //         }}
              
            />


        </div>
    );
};

export default SelectList;