import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {findCategories} from '../../actions/categories';
import {categories} from '../../items/categories';
import './styles/categories.css';


export const ShowCategories = () => {


    const dispatch = useDispatch();

    const handleListFilms = (data) => {
        dispatch(findCategories(data))
    }

    return (

        <div className="flex-container">
            {categories.map((e) =>
                <div key={e.id} className="card">
                    <button className="div-img">
                        <Link to={`/category/${e.name}`}><img src={e.icon} alt="poster" className="img-porter"/></Link>
                    </button>
                    <div className="buttons">{e.name}</div>
                </div>
            )
            }
        </div>

    )
}