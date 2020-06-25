
import React from 'react';
import {Link} from 'react-router-dom'


export default function Nav(props){
    return (
        <ul className="nav ">
            <li className="nav-item">
                <Link className="nav-link" to="/shelter/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active myContainer" to="/shelter/animals">Animals</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active myContainer" to="/shelter/applications">Applications</Link>
            </li>
                    <li className="nav-item">
                            <button className="nav-link" onClick={props.onLogout}>Logout</button>
                    </li>
        </ul>
    )
}