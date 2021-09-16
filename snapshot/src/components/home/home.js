import React from 'react';
import {Navbar} from './Navbar'
import {ShowCase} from "../showcase/ShowCase";
import {Paginate} from "../paginate/Paginate";
import {CardsFood} from "../food/CardsFood";

export const Home = () => {
    return (
        <div className="home">
            <div>
                <Navbar/>
                <ShowCase/>
                <Paginate/>
                <CardsFood/>
            </div>
        </div>
    );
};