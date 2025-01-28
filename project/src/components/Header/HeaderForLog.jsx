import React, { useState } from 'react';  
import './header.css';  
import SecondImgButton from '../Button/SecondImgButton';  
import searchImg from '/search.png';  
import gradient from '/Градиент.png'; 
import logoImg from '/logo.png'; 
import user from '/usr_btn.png'
import { NavLink } from 'react-router-dom'; // Импортируем NavLink

export default function HeaderForLog({ onSearchTermChange }) {    
    // const [searchTerm, setSearchTerm] = useState('');   

    // const handleSearchChange = (e) => {   
    //     setSearchTerm(e.target.value);  
    // };   

    // const handleSearchClick = () => {  
    //     onSearchTermChange(searchTerm);  
    // };  

    const [isHovered, setIsHovered] = useState(false);  
    const handleMouseEnter = () => {  
        setIsHovered(true);  
    };  

    const handleMouseLeave = () => {  
        setIsHovered(false);  
    };   

    return (     
        <header className="header1">
            <div className="logo">
                <div className='motusforheader'>Motus</div>
                <img  className="logo2" src={gradient} alt='logo' />
            </div>
           
         <div className="search-container">
            <div className="search">
                <div className="rectangle_15">
                    <input
                        className="rectangle_16header"
                        placeholder="Введите запрос"
                        // onChange={handleSearchChange}
                    />
                   <div className='test'>
                   { isHovered === true ? (
                       <SecondImgButton
                
                    
                       isImg={true}
                       isActive={false}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                   >
                       <img className="image-class" src={searchImg} alt={ 'Изображение кнопки'} />
                   </SecondImgButton>) : 
                   (
                      <div className="bgforbtnn">  
                      <SecondImgButton
                
                    
                       isImg={true}
                       isActive={false}
                       onMouseEnter={handleMouseEnter}
                       onMouseLeave={handleMouseLeave}
                   >
                       <img className="image-class" src={searchImg} alt={ 'Изображение кнопки'} />
                   </SecondImgButton>
                   </div>)}
                    </div>
                </div>
            </div>
            </div>
            <nav className="menu">
                <div className="frame4">
                <NavLink
                        to="/main"
                        className="sub"
                        activeClassName="active"
                    >
                        Главная
                    </NavLink>
                    <NavLink
                        to="/subscr"
                        className="gl"
                        activeClassName="active"
                        exact
                    >
                        Мои подписки
                    </NavLink>
                    <NavLink
                        to="/library"
                        className="libr"
                        activeClassName="active"
                    >
                        Библиотека
                    </NavLink>
                </div>
                <NavLink
                        to="/podcaster"
                        className="libr"
                        activeClassName="active"
                    >
                        <img src={user} className="usr___btn" alt='user' />
                    </NavLink>
                
            </nav>
        </header>
    );
};