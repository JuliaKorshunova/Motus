import * as style1 from './PodcastSection.css'
import OnePodcast from './OnePodcast/OnePodcast'
import React, { useState, useRef, useEffect } from 'react';
export default function PodcastSection() {

   

    const [podcasterData, SetpodcasterData] = useState([]);

    useEffect(() => {
        // Замените 'data.json' на путь к вашему JSON-файлу
        fetch('/datapod.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => SetpodcasterData(data))
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);

    return (
        <div className='card-containerforpodcasts'>
            {podcasterData.map((pod, index) => (
                <OnePodcast 
                    key={index} // Не забудьте добавить ключ для каждого элемента списка
                    name={pod.name} 
                    descriptionn={pod.descriptionn}  
                    views={pod.views}
                    image1={pod.image1} // Передаем первое изображение
                    image2={pod.image2} // Передаем второе изображение
                    image3={pod.image3} // Передаем третье изображение
                />
            ))}
        </div>
    )
}