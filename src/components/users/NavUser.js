
import React from 'react';
import { Link } from 'react-router-dom'


export default function NavUser(props) {
    return (
        <nav className="navbar navbar-expand-sm" style={{maxWidth:"100%"}}>
            <button style={{backgroundColor: "transparent", border: "white", maxHeight:"5rem"}} class="nav-brand" >
                <img width= "90px" height= "auto"
                    src="/images/Happypaws.png"
                    alt="sailr"></img>
            </button>
            <ul className="navbar-nav ml-auto">
            
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
        </nav>
    )
}