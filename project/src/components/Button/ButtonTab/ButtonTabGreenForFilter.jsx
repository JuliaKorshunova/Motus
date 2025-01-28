import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './ButtonTabGreenForFilter.module.css';
import { useState } from 'react';

export default function ButtonTabGreen({
    onClick,
    children,
    pressed,
    hover,
    className,
    typeofbutton,
    disabled,
    icon, // Свойство для изображения
    ...props
}) {
    const [showIcon, setShowIcon] = useState(false); // Состояние для отображения изображения

    const onClick1 = (e) => {
        // Переключаем состояние показа изображения
        setShowIcon((prev) => !prev); 
        if (onClick) {
            onClick(e); // Не забываем вызывать оригинальный обработчик
        }
    };

    const classes1 = classNames(
        className,
        { typeofbutton }
    );
    const buttonClass = classNames(
      disabled ? classes.defmainbtndisabled : classes.defmainbtn,
      { [classes.activegreen]: showIcon } // Если showIcon истинно, добавляем класс active
  );

    return (
        <button
            {...props}
            disabled={disabled}
            type="button"
            className={ buttonClass }
            onClick={onClick1} // Используем новый обработчик
        >
          {children}
            {showIcon && icon && <img src={icon} alt="" className={classes.icon} />} {/* Условно отображаем изображение */}
            
        </button>
    );
}

ButtonTabGreen.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    pressed: PropTypes.bool,
    hover: PropTypes.bool,
    icon: PropTypes.string, // Свойство для изображения
};

ButtonTabGreen.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className: '',
    disabled: false,
    pressed: false,
    hover: false,
    icon: '', // Значение по умолчанию для свойства изображения
};
