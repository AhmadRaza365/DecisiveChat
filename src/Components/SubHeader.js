import React from 'react'
import './SubHeader.css';
import BackArrowIcon from './BackArrowIcon.png';
import { Link } from 'react-router-dom';



export default function SubHeader(props) {
    return (
        <div className="SubHeader">
           <button className="BackArrowButton">
               <Link to="/">
            <img src={BackArrowIcon} alt="GO Back Icon" />
            </Link>
            </button>
            <h1 className="SubHeaderTitle">{props.title}</h1>
        </div>
    )
}
