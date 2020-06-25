import React from 'react';
import {Link} from 'react-router-dom'
import Nav from './Nav'


export default function AnimalsList(props){
    return (
        <>
        <Nav />
            {
                props.animals.map((animal, i) => {
                    return <p key={i}><Link to={`/shelter/animal/${animal._id}`}>{animal.name}</Link></p>
                })
            }
            <li className="nav-item">
                <Link className="nav-link" to="/shelter/add-form">Add animal</Link>
            </li>
        </>
    )
}