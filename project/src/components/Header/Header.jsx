import React, { useState } from 'react';  
import './header.css';  
import searchImg from '/search.png';  
// import { useSelector } from 'react-redux';
import menumob from '/menumob.svg'; 
import gradient from '/Градиент.png'; 
import logoImg from '/logo.png'; 
import SecondImgButtonBlack from '../Button/SecondImgButtonBlack';
import SecondImgButton from '../Button/SecondImgButton';
import user from '/usr_btn.png'
import { NavLink } from 'react-router-dom'; // Импортируем NavLink

export default function Header({ onSearchTermChange }) {    
    // const [searchTerm, setSearchTerm] = useState('');   

    // const handleSearchChange = (e) => {   
    //     setSearchTerm(e.target.value);  
    // };   

    // const handleSearchClick = () => {  
    //     onSearchTermChange(searchTerm);  
    // };  
    // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [isHovered, setIsHovered] = useState(false);  
    const handleMouseEnter = () => {  
        setIsHovered(true);  
    };  

    const handleMouseLeave = () => {  
        setIsHovered(false);  
    };   
    const [isHovered1, setIsHovered1] = useState(false);  
    const handleMouseEnter1 = () => {  
        setIsHovered1(true);  
    };  

    const handleMouseLeave1 = () => {  
        setIsHovered1(false);  
    };   

    return (     
        <header className="header1">
            <div className='forhead'>
            <div className="logo">
                <div className='motusforheader'>Motus</div>
                <img  className="logo2" src={gradient} alt='logo' />
            </div>
            {/* {isLoggedIn ? (
        <p>Вы вошли в систему!</p>
      ) : (
        <p>Пожалуйста, войдите или зарегистрируйтесь.</p>
      )} */}
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

            <div className='btnformb'>
          
            { isHovered1 === true ? (
                       <SecondImgButtonBlack
                
                    
                       isImg={true}
                       isActive={false}
                       onMouseEnter={handleMouseEnter1}
                       onMouseLeave={handleMouseLeave1}
                   >
                    <img className="image-class1" src={menumob} alt={ 'Изображение кнопки'} />
                   </SecondImgButtonBlack>) : 
                   (
                      <div className="bgforbtnnblack">  
                      <SecondImgButtonBlack
                
                    
                       isImg={true}
                       isActive={false}
                       onMouseEnter={handleMouseEnter1}
                       onMouseLeave={handleMouseLeave}
                   >
                       <img className="image-class1" src={menumob} alt={ 'Изображение кнопки'} />
                   </SecondImgButtonBlack>
                   </div>)}</div>


                   <NavLink
                        to="/podcaster"
                        className="libr"
                        activeClassName="active"
                    >
                        <img  className="usr___btn1" src={user} alt='usr___btn' />

            </NavLink>

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