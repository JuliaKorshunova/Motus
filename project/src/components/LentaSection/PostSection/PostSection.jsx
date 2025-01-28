import { nameofpodcaster} from '../../Podcaster/UserProfile/UserProfile'
import React from 'react';
import './PostSection.css'
import like1 from '/favorite_border.png'
import repost1 from '/autorenew.png'
import mini from '/mini.png'
import tochka from '/Vector.png'
import comm1 from '/chat_bubble_outline.png'
import * as style1 from './PostSection.css'

export default function PostSection({ name, data, title, like, comm, repost }) {

    return(


<div className='vmeste1'>
   
    <div className="vertical-line"></div>


        <div className='contentforlenta' > 
           <img className='mini' src={mini} />
           {/* <div className='vertical-line'></div> Вертикальная линия */}
            </div>

    
        <div className='vmesteapaptiv'> <div className='tochka'>
        <img className='tochkai' src={tochka} />
        </div>
            <div className='blockoftext'>
            
            <h3 className="namepost">{name} </h3>
            <p className='data'>{data}</p>
              
                   
                       <p className='teadaptiv'>{title}</p>

            
         

        </div>
       
        <div className='ocenka'>
        
        <div className='like'>
           <img className='podn' src={like1} />
           <p className='kolvo'>{like}</p>
            </div>
            <div className='comm'>
           <img className='podn' src={comm1} /> 
           <p className='kolvo'>{comm}</p>
            </div>
            <div className='repost'>
          <img className='podn' src={repost1} />
           <p className='kolvo'>{repost}</p>
            </div>
        </div>
       </div>
       
       
       
       </div>
    )

}