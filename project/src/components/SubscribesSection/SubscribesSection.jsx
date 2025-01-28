import * as style1 from './SubscribesSection.css'
import Card from './OneSubscribe/OneSubcribe'
import React, { useState, useRef, useEffect } from 'react';
export default function SubscribesSection() {

   

    const [subscribeData, setSubscribeData] = useState([]);

    useEffect(() => {
        // Замените 'data.json' на путь к вашему JSON-файлу
        fetch('/datasub.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setSubscribeData(data.cards)) 
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);

    return (
        <div className='card-containersub'>
            {subscribeData.map((sub, index) => (
                <Card 
                    key={index} // Не забудьте добавить ключ для каждого элемента списка
                    name={sub.name} 
                    descriptionn={sub.descriptionn}  
                    time={sub.time} 
                    author={sub.author} 
                    sub={sub.sub} 
                    image1={sub.image1} // Передаем первое изображение
                    image2={sub.image2} // Передаем второе изображение
                    image3={sub.image3} // Передаем третье изображение
                    hashtags={sub.hashtags}
                    className="sectionsubForSubs"
                />
            ))}
        </div>
    )


}
