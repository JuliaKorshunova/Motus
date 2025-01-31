import PropTypes from 'prop-types'; // Импортируем PropTypes
import classNames from 'classnames';
import { useState } from 'react';
import classes from './MainButton2.module.css';

export default function Button2({ 
    onClick = () => {}, 
    children = 'Default button', 
    className = '', 
    disabled = false, 
    pressed = false, 
    hover = false, 
    typeofbutton, // Исправлена опечатка
    onMouseDown1, 
    onMouseEnter, 
    onMouseLeave, 
    ...props 
}) {  
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    const classes1 = classNames(
        className,
        typeofbutton // Теперь передаётся корректно
    );

    return (
        <>
            <button 
                {...props} 
                disabled={disabled}  // Исправлено disable → disabled
                onMouseEnter={onMouseEnter || handleMouseOver} 
                onMouseLeave={onMouseLeave || handleMouseOut} 
                type="button"  
                className={disabled ? classes.defmainbtndisabled : classes.defmainbtn2} 
                onClick={onClick}
            >
                {children}
            </button>
            {isHovered}
        </>
    );
}

// PropTypes для проверки типов
Button2.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    pressed: PropTypes.bool,
    hover: PropTypes.bool,
};