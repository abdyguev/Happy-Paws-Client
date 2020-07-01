
import React from 'react';
import { Link } from 'react-router-dom'


export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-sm" style={{ maxWidth: "100%" }}>
            <button style={{ backgroundColor: "transparent", border: "white", maxHeight: "5rem" }} class="nav-brand" >
                <img width="90px" height="auto"
                    src="/images/Happypaws.png"
                    alt="sailr"></img>
            </button>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/shelter/profile">Profile</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link active myContainer" to="/shelter/animals">Animals</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" onClick={props.onLogoutShelter}>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}