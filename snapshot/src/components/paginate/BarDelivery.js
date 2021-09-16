import React from 'react'
import {IoIosArrowDown} from 'react-icons/io';
import hamburger from '../../assets/icons/1046784.svg'
import watch from '../../assets/icons/149316.svg'
import './styles/barDelivery.css';




export const BarDelivery= () => {
    return (
        <div>
            <div>
                <h2>Restaurants</h2>
                <img src={hamburger} alt="hamburger" className="hamburger"/>
            </div>
            <div>
                <button>
                    <img src={watch} alt="watch"/>
                    Delivery. <h4>Now</h4>
                    <IoIosArrowDown/>
                </button>
            </div>
        </div>
    )
}