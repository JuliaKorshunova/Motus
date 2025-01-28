

import { nameofpodcaster} from '../Podcaster/UserProfile/UserProfile.jsx'
import React from 'react';
import './LentaSection.css'
import { useState, useRef, useEffect } from "react";
import * as style1 from './LentaSection.css'
import PostSection from './PostSection/PostSection.jsx';
export default function LentaSection() {
    const [subscribeData, setSubscribeData] = useState([]);

    useEffect(() => {
    
        fetch('/datalen.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setSubscribeData(data))
            .catch((error) => console.error('Ошибка при загрузке данных:', error));
    }, []);

    return(

            <div className='obforlenta'>
                 <div>
            {subscribeData.map((way) => (
                <PostSection 
                    key={way.name} 
                    name={way.name}  
                    data={way.data} 
                    title={way.title} 
                    like={way.like}  
                    comm={way.comm} 
                    repost={way.repost} 
                />
            ))}
        </div>
            </div>
         
    )

}
