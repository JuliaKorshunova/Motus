import React from 'react';
import * as style1 from './PlayListSection.css'
import OnePlayList from './OnePlayList/OnePlayList';
import { useState, useRef, useEffect } from "react";
export default function PlayListSection() {
    const [subscribeData, setSubscribeData] = useState([]);

    useEffect(() => {
    
        fetch('/dataplay.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setSubscribeData(data))
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);
    return (
        <div className='vmplaylist'>
            <div>
                {subscribeData.map((play, index) => (
                    <OnePlayList 
                        key={index} // Не забудьте указать уникальный ключ для каждого элемента
                        name={play.name} 
                        descriptionn={play.descriptionn}  
                        view={play.view} 
                        release={play.release} 
                        image1={play.image1} // Передаем первое изображение
                        image2={play.image2} // Передаем второе изображение
                        image3={play.image3} // Передаем третье изображение
                        image4={play.image4} // Передаем четвертое изображение
                    />
                ))}
            </div>
        </div>
    );
}
