import React from 'react';
import {Link} from 'react-router-dom'
import Nav from './Nav'


export default function AnimalsList(props){
    return (
        <>
        <Nav />
        <h1>List of Available Pets </h1>
        <ul class="list-group" >
            {
                props.animals.map((animal, i) => {
                    return <p class="list-group-item list-group-item-action" key={i}><Link to={`/shelter/animal/${animal._id}`}>{animal.name}<br></br>{animal.name}<br></br>{animal.name}</Link></p>
                })
            }
            </ul>
            <li className="nav-item">
                <Link className="nav-link" to="/shelter/add-form">Add animal</Link>
            </li>
        </>
    )
}