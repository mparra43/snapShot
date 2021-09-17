import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BsArrowRightShort} from "react-icons/bs";
import {addMore} from "../../actions/food";
import {uiOpenModal} from "../../actions/ui"

import './styles/summary.css';

export const Summary = () => {

    const dispatch = useDispatch();
    const {listOrden} = useSelector(state => state.order)

    const {total} = useSelector(state => state.order)


    const [person, setPerson] = useState(1);

    const [sum, setSum] = useState(1);


    const handlePerson = () => {
        setPerson(person + 1);
        setSum(sum + 1)
    }
    const handleClick = () => {
        dispatch(uiOpenModal());
    }

    return (
        <div>
            <div className="card-summary">
                {listOrden.map((e) =>
                    <div key={listOrden.indexOf(e)} className="card-order">
                        <img src={e.img} alt={e.name} className="img-order"/>
                        <p>{e.sum} x {e.name} $ {e.price}</p>
                    </div>
                )}
            </div>
            <div> Total: <button className="btn-t"> $ {total}</button></div>
            <hr/>
            <div className="p-check">
                <div>
                    <h6>Persons</h6>
                    <div className="btn-person">
                        <button className="person">-</button>
                        <button className="person">{person}</button>
                        <button className="person" onClick={handlePerson}>+</button>
                    </div>
                </div>
                <button className="Checkout" onClick={handleClick}>Checkout <BsArrowRightShort/></button>
            </div>
        </div>
    );
};