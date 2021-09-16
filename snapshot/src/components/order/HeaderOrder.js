import React from 'react';
import {RiEmotionLaughLine} from 'react-icons/ri';
import User from '../../assets/icons/747376.svg';
import Watch from '../../assets/icons/149316.svg';
import './styles/headerOrder.js.css';
export const HeaderOrder = () => {
    return (
       <div>
           <div>
               <img src={User} alt="user" className="user"/>
               <button></button>
           </div>
           <div>Your Orden <RiEmotionLaughLine/> </div>
           <div>
               <button><img src={Watch} alt="time" className="time"/></button>
               <button></button>
           </div>
       </div>
    );
};