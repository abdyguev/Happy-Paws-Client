
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
            {
                props.loggedInUser ? (
                    <li className="nav-item">
                            <button className="nav-link" onClick={props.onLogout}>Logout</button>
                    </li>
                ) : (
                    <>
                    <li className="nav-item">
                            <Link className="nav-link" to="/shelter/signup">SignUp/Signin Shelter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/signup">SignUp/Signin User</Link>
                        </li>
                    </>
                )
            }
        </ul>
    )
}