import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


export const Header =(props) => {
    return (
        <div className="headerclass"> 
            <div className='image'> 
            <h2 style={{marginLeft:"30px"}}>{props.logo}</h2>
            </div>
            
            <div className='header_h'>
            <Link to={"/"}> Home </Link>
            <Link to={"/about"}> About </Link>
            <Link to={"/help"}> Help </Link>
            <Link to={"/service"}> Service </Link>
            <Link to={"/team"}> Team </Link>
            </div>
        </div>
    )
}
