import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";


export const Summary= () => {
    return (
        <div>


            <div> Total: <button>$25</button></div>
            <div>
                <div>
                    <h6>Persons</h6>
                <button>-</button>{1}<button>+</button>
                </div>
                <button>Checkout <BsArrowRightShort/></button>
            </div>
        </div>
    );
};