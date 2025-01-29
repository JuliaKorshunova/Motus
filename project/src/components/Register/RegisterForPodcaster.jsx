import React, { useState } from "react"; // Убедись, что useState импортирован
import './Register.css'
import MainButton2 from '../Button/MainButton2';
import add from '/add.svg';
import './RegisterForPodcaster.css'


export default function RegisterForPodcaster(props) {    
    const [username, setUsername] = useState('');     
    const [nickname, setNickname] = useState('');   
    const [errorUsername, setErrorUsername] = useState('');   
    const [errorNickname, setErrorNickname] = useState('');   
    const [isHovered, setIsHovered] = useState(false);    
    const [password, setPassword] = useState('');   
    const [errorPassword, setErrorPassword] = useState('');   

    const handleMouseEnter = () => {     
        setIsHovered(true);     
    };     
 
    const handleMouseLeave = () => {     
        setIsHovered(false);     
    };     
 
    const handleUsernameChange = (e) => {    
        setUsername(e.target.value);    
        if (errorUsername) {    
            setErrorUsername('');    
        }    
    };    

    const handleNicknameChange = (e) => {    
        setNickname(e.target.value);    
        if (errorNickname) {    
            setErrorNickname('');    
        }    
    };    

    const handleNicknameBlur = () => {    
        if (nickname.trim() === '') {    
            setErrorNickname('Для регистрации необходимо заполнить это поле');    
        }    
    };    

    const handlePasswordChange = (e) => {   
        const value = e.target.value;    
        setPassword(value);   
       
        // Проверяем валидность пароля   
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(value)) {    
            setErrorPassword('Пароль должен содержать строчную и заглавную буквы');    
        } else {    
            setErrorPassword(''); // Сбрасываем ошибку, если пароль валиден    
        }   
    };   

    const handleSubmit = (e) => {     
        e.preventDefault();     

        // Проверка на валидность    
        let hasError = false; // Флаг для отслеживания ошибки     
     
        if (username.trim() === '') {    
            setErrorUsername('Для регистрации необходимо заполнить это поле');     
            hasError = true;
        }    

        if (nickname.trim() === '') {    
            setErrorNickname('Для регистрации необходимо заполнить это поле');    
            hasError = true;
        }    

        if (password.trim() === '' || errorPassword) {   
            setErrorPassword('Пароль должен быть действительным');  
            hasError = true; 
        }  

        // Обработка успешной валидации, если все поля заполнены    
        if (!hasError) {   
            console.log('Имя пользователя:', username);     
            console.log('Ник:', nickname);     
            console.log('Пароль:', password);     
         
            // Сбросить поля после успешной обработки    
            setUsername('');     
            setNickname('');    
            setPassword('');    
            setErrorUsername('');    
            setErrorNickname('');    
            setErrorPassword('');    
        }    
    }; 


    const [tab, setTab] = useState('podcaster');  


    return ( 
        <>
        <form onSubmit={handleSubmit}>  
        <div className="parent">          
        </div>    
               
            <div className="_frame_8820">     
                <div className="_rectangle15_black">     
                    <input type="email" className='_rectangle16_white' placeholder="Почта" required />     
                </div>     
                <div className="_rectangle15_1_black">     
                    <input    
                        type="text"    
                        className='_rectangle16_white'    
                        placeholder="Имя пользователя"    
                        value={username}    
                        onChange={handleUsernameChange}    
                        required    
                    />     
                </div>     
                   
                {/* Условное отображение ошибки для имени пользователя */}   
                {errorUsername && (   
                    <div className="text_for_mistake-user">{errorUsername}</div>   
                )}   
                 
                 <div className={`_rectangle15_2_black ${errorNickname ? 'rectangle-container-error-user' : ''}`}>      
                <input 
                type="text"   
                className={`_rectangle16_white ${errorNickname ? 'rectangle-error-user' : ''}`}   
                placeholder="Ник"   
                value={nickname}   
                onChange={handleNicknameChange}   
                onBlur={handleNicknameBlur} 
                required   
                />      
                </div>

                {/* Условное отображение ошибки для ника */}    
                {errorNickname && (    
                <div className="text_for_mistake-user">{errorNickname}</div>    
                )}  


                <div className="_rectangle15_mave_black">     
                    <input type="email" className='_rectangle16_white' placeholder="Ссылка на mave" required />     
                </div>
  
                <div className="_rectangle15_33_black">     
                    <input type="text" className='_rectangle16_white' placeholder="Описание профиля" required />     
                </div>    

                <div className="frame5_11_desk">    
                    <img src={add} alt="" className="add_desk"/>    
                    <div className="text_for_download_desk">    
                        Загрузить фото профиля    
                    </div>    
                </div>   

                <div className="frame5_21_desk">    
                    <img src={add} alt="" className="add_desk"/>    
                    <div className="text_for_link_desk">    
                        Прикрепить ссылку    
                    </div>    
                </div> 

                <div className="_rectangle15_444_black">         
                        <input    
                            type="password"    
                            className="_rectangle16_white" 
                            placeholder="Пароль"    
                            value={password}    
                            onChange={handlePasswordChange}    
                            required    
                        />         
                        {errorPassword && (       
                            <div className="text_for_password">{errorPassword}</div>       
                        )}       
                    </div>      

                <div className='btnnForRegPodcaster-pod'>     
                    {props.testDeisabled === true ? (     
                        <div className='pocastdis'>     
                            <MainButton2 disabled={true}>Создать акаунт</MainButton2>    
                        </div>    
                    ) : isHovered ? (    
                        <div className='bgforbtn6'>    
                            <MainButton2 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                disabled={props.testDeisabled}
                            >   
                                Создать акаунт   
                            </MainButton2>   
                        </div> 
                    ) : (    
                        <MainButton2 
                            onClick={props.ispressed} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                            disabled={props.testDeisabled}
                        >   
                            Создать акаунт  
                        </MainButton2>  
                    )}   
                </div> 
            </div>  
        </form>
        </>
    ); 
}