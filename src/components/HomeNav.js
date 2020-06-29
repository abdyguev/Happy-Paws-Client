
import React from 'react';
import {Link} from 'react-router-dom'


export default function HomeNav(props){
    return (
        <ul className="nav ">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/shelter/animals">Shelter</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/user/pets">User</Link>
            </li>
        </ul>
    )
}