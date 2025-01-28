import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderForLR from "../header/HeaderForLog";
import TabsSectionForRegister from '../TabsSection/TabSectionForRegister/TabsSectionForRegister';
import Register from "../Register/Register";
import RegisterForPodcaster from "../Register/RegisterForPodcaster";

export default function PageRegister() {
    const [tab, setTab] = useState('user');

    return (
        <>
            <HeaderForLR />
            <div className='obedinen11'>  
                    <TabsSectionForRegister Active1={tab} onChange={(current) => setTab(current)} />  
                    {tab === 'pod' && <RegisterForPodcaster />}  
                   
                    {tab === 'user' && <Register />}  
        </div>
            <div className="text_for_reg">Регистрация /</div>
            <Link to="/login">
                <div className="text_for_log">Вход</div>
            </Link>
        </>
    );
}
