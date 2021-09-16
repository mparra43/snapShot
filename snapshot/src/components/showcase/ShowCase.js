import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs';
import "bootstrap/dist/css/bootstrap.min.css"



export const ShowCase= () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">$0 delivery for 30 days!</h1>
                <p className="lead">$0 delivery free for orders over$10 for 30 days</p>
            </div>
            <h3>Learn more <BsArrowRightShort/> </h3>
        </div>
    )
}