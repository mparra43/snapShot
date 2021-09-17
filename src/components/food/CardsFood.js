import React, {useState} from 'react'
import {GrFormNext} from 'react-icons/gr';
import {GrFormPrevious} from 'react-icons/gr';
import {useDispatch} from "react-redux";
import {foodDishes} from '../../items/foodDishes';
import {addDishes,totalToPay} from "../../actions/food";
import star from '../../assets/icons/149220.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/cardsFood.css';


export const CardsFood = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);


    const previousPage = () => {
        if (page > 0)
            setPage(page - 4)
    }

    const nextPage = () => {
        setPage(page + 4)
    }

    const handleFood = (food) => {
        dispatch(addDishes(food))
        dispatch(totalToPay(food.price))
    }
    const showFood = (food) => {
        return foodDishes.slice(page, page + 4)
    }
    return (

        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <button className="btn-P" onClick={previousPage}><GrFormPrevious/></button>
                    </li>
                    <li className="page-item">
                        <button className="btn-P" onClick={previousPage}>1</button>
                    </li>
                    <li className="page-item">
                        <button className="btn-P" onClick={nextPage}>2</button>
                    </li>
                    <li className="page-item">
                        <button className="btn-P" onClick={nextPage}><GrFormNext/></button>
                    </li>
                </ul>
            </nav>

            <div className="flex-container">
                {foodDishes ? showFood().map((e) =>
                    <div key={foodDishes.indexOf(e)} className="card-food">
                        <div>
                            <button className="btn-food" onClick={() => {
                                handleFood(e)
                            }}>
                                <img src={e.img} alt="dish" className="dish"/>
                                <h6>{e.time}</h6>
                            </button>
                        </div>
                        <div><h6>{e.name}</h6></div>
                        <div className="card-inf">
                            <div><img src={star} alt="star" className="star"/>{e.rating}</div>
                            <div className="card-price">$ {e.price}</div>
                        </div>
                    </div>
                ) : <h1>espere..</h1>}
            </div>
        </div>
    )
}