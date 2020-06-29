
import React from 'react';
import {Link} from 'react-router-dom'


export default function NavUser(props){
    return (
        <ul className="nav ">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/user/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active myContainer" to="/user/pets">Pets</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active myContainer" to="/user/favorite">Favorites</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active myContainer" to="/user/donate">Donate</Link>
            </li>
            <li className="nav-item">
                            <Link className="nav-link" onClick={props.onLogout}>Logout</Link>
            </li>
            {/* {
                props.loggedInUser ? (
                    <li className="nav-item">
                            <button className="nav-link" onClick={props.onLogout}>Logout</button>
                    </li>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sign-in">SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shelter/signup">SignUp</Link>
                        </li>
                    </>
                )
            } */}
        </ul>
    )
}