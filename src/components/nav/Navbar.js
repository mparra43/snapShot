import React from 'react'
import {CgSearch} from 'react-icons/cg';
import {HiMenuAlt4} from 'react-icons/hi'
import "./styles/navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"


export const Navbar = () => {
    return (

        <form className="form-inline">
            <div className="input-group">
                <div><HiMenuAlt4/></div>
                <div><h3>Chukwudi</h3></div>

                <span className="input-group-text" id="basic-addon1"> <CgSearch/></span>
                <input type="text" className="form-control" placeholder="search" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>
        </form>

    )
}