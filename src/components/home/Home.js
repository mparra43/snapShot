import React from 'react';
import {Navbar} from '../nav/Navbar'
import {ShowCase} from "../showcase/ShowCase";
import {Restaurants} from "../restaurants/Restaurants";
import {CardsFood} from "../food/CardsFood";
import {Order} from "../order/Order";
import  './styles/home.css'

export const Home = () => {
    return (
        <div className="home">
            <div>
                <Navbar/>
                <ShowCase/>
                <Restaurants/>
                <CardsFood/>
            </div>
            <div className="h-order">
                < Order/>
            </div>
        </div>
    );
};