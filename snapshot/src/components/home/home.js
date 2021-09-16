import React from 'react';
import {Navbar} from './Navbar'
import {ShowCase} from "../showcase/ShowCase";
import {Paginate} from "../paginate/Paginate";
import {CardsFood} from "../food/CardsFood";
import {Order} from "../order/Order";
import  './styles/home.css'

export const Home = () => {
    return (
        <div className="home">
            <div>
                <Navbar/>
                <ShowCase/>
                <Paginate/>
                <CardsFood/>
            </div>
            <div>
                <Order/>
            </div>
        </div>
    );
};