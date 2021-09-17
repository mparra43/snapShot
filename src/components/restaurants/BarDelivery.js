import React from 'react'
import {IoIosArrowDown} from 'react-icons/io';
import {IoMdTime} from 'react-icons/io';
import hamburger from '../../assets/icons/1046784.svg'
import './styles/barDelivery.css';




export const BarDelivery= () => {
    return (
        <div className="barDelivery">
            <div className="title">
                <h2>Restaurants  </h2>
                <img src={hamburger} alt="hamburger" className="hamburger"/>
            </div>
            <div>
                <button className="btn-Now">
                    <IoMdTime className="i-btn"/> Delivery. <h5> Now</h5>
                    <IoIosArrowDown className="i-btn" />
                </button>
            </div>
        </div>
    )
}