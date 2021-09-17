import React from 'react';
import {RiEmotionLaughLine} from 'react-icons/ri';
import User from '../../assets/icons/747376.svg';
import Watch from '../../assets/icons/149316.svg';
import './styles/headerOrder.js.css';
import {IoMdTime} from "react-icons/io";

export const HeaderOrder = () => {
    return (
        <div>

            <div className="container-user">
                <img src={User} alt="user" className="user"/>
                <button className="btn-user">3</button>
            </div>

            <div>Your Orden <RiEmotionLaughLine/></div>
            <div className="user-watch">
                <IoMdTime className="time"/>
                <p> 35 min</p>
                <p>Choose time</p>
            </div>
        </div>
    );
};