import PropsType from 'prop-types' //позволяет проверять то что передается в кнопку в виде пропсов
import classNames from 'classnames'
//className={classes}

import classes from './SecondImgButton.module.css'
import { useState } from 'react'
//className={` ${pressed? classes.pressedmainbtn : classes.defmainbtn} ${isHovered? classes.hovermainbtn: classes.defmainbtn} `} 
export default function SecondImgButton( {onClick, children, pressed, hover, className, typeofbuttton,disabled, onMouseDown1, isActive, onMouseEnter,onMouseOver,  onMouseOut , onMouseLeave, isImg, ...props }) { //оставшиеся входящие параметры
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
      {/* <div className='hidd'>  <button {...props} disable={disabled} onMouseOver={onMouseOver}  onMouseOut={onMouseOut} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} type="button" className={`${disabled ? classes.defmainbtndisabled : classes.defmainbtn} ${isActive ? classes.defmainbtnactive : classes.defmainbtn} `} onClick={onClick}>{children}</button>
         {isHovered}</div>
       */}
       <div className="wrapper">
    <div className="background"></div> {/* Это будет ваш зеленый прямоугольник */}
    <button
        {...props} disable={disabled} onMouseOver={onMouseOver}  onMouseOut={onMouseOut} onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} type="button" className={`${disabled ? classes.defmainbtndisabled : classes.defmainbtn} ${isActive ? classes.defmainbtnactive : classes.defmainbtn} `} onClick={onClick}
    >
        {children}
    </button>
</div>
         
         
         </>
      ) //вставка строки без + чтоб строку не обрывать
  } 

  SecondImgButton.PropsType={
    children:PropsType.node,
    onClick:PropsType.func,
    className:PropsType.string,
    disabled:PropsType.bool,
    pressed:PropsType.bool,
    hover:PropsType.bool,
  }
  SecondImgButton.defaultProps = {
    children:'Default button',
    onClick:()=>{},
    className:'',
    disabled:false,
    pressed:false,
    hover:false,
  }