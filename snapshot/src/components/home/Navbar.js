import React from 'react'
import {CgSearch} from 'react-icons/cg';
import{HiMenuAlt4}from 'react-icons/hi'
import "bootstrap/dist/css/bootstrap.min.css"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <div className="input-group">
                    <div><HiMenuAlt4/></div>
                    <div><h3>Chukwudi</h3> </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"> <CgSearch/></span>
                    </div>
                    <input type="text" className="form-control" placeholder="search" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>
            </form>
        </nav>
    )
}