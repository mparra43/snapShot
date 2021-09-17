import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs';
import emoji from '../../assets/images/d.png'
import headerImg from '../../assets/images/headerimage.png'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/showcase.css"



export const ShowCase= () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container-showcase">
                <img src={headerImg} alt="headerImg" className="headerImg"/>
                <div>
                    <h6 className="display-4">$0 delivery for 30 days! <img src={emoji} alt="emoji" /></h6>
                    <p className="lead">$0 delivery free for orders over$10 for 30 days</p>
                </div>
            </div>
            <h3 className="lean" >Learn more <BsArrowRightShort/> </h3>
        </div>
    )
}