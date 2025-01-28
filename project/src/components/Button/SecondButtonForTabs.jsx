import PropsType from 'prop-types' //позволяет проверять то что передается в кнопку в виде пропсов
import classNames from 'classnames'
//className={classes}

import classes from './SecondButtonForTabs.module.css'
import { useState } from 'react'
//className={` ${pressed? classes.pressedmainbtn : classes.defmainbtn} ${isHovered? classes.hovermainbtn: classes.defmainbtn} `} 
export default function SecondButtonForTabs( {onClick, children, pressed, hover, className, typeofbuttton,disabled, onMouseDown1, isActive, onMouseEnter, onMouseLeave, isImg, ...props }) { //оставшиеся входящие параметры
  const[isHovered, setIsHovered]=useState(false)
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

   const classes1=classNames(
    
    className,
   
    {typeofbuttton}
   )
    return(
      <>
        <button {...props} disable={disabled} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} type="button" className={`${disabled ? classes.defmainbtndisabled : classes.defmainbtn} ${isActive ? classes.defmainbtnactive : classes.defmainbtn} `} onClick={onClick}>{children}</button>
         {isHovered}</>
      ) //вставка строки без + чтоб строку не обрывать
  } 

  SecondButtonForTabs.PropsType={
    children:PropsType.node,
    onClick:PropsType.func,
    className:PropsType.string,
    disabled:PropsType.bool,
    pressed:PropsType.bool,
    hover:PropsType.bool,
  }
  SecondButtonForTabs.defaultProps = {
    children:'Default button',
    onClick:()=>{},
    className:'',
    disabled:false,
    pressed:false,
    hover:false,
  }