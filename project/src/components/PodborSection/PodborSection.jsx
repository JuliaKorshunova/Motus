import React from 'react';
import { useState, useRef, useEffect } from "react";
import OnePodbor from './OnePodbor/OnePodbor';
import './PodborSection.css';  
export default function PodborSection() {
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
        <div className='vm1'>
            <div>
                {subscribeData.map((play, index) => (
                    <OnePodbor
                        key={index} // Не забудьте указать уникальный ключ для каждого элемента
                        name={play.name} 
                        descriptionn={play.descriptionn}  
                        view={play.view} 
                        release={play.release} 
                        image1={play.image1} // Передаем первое изображение
                        image2={play.image2} // Передаем второе изображение
                        image3={play.image3} // Передаем третье изображение
                        image4={play.image4} // Передаем четвертое изображение
                        className2={ 'obedinenie1forpodporka'}
                    />
                ))}
            </div>
        </div>
    );
}
