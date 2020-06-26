import React from 'react';
import { Link } from 'react-router-dom'
import Nav from './Nav'


export default function AnimalsList(props) {


    return (
        <>
            <Nav />
            <div className="heading">
            <h1>Available Pets </h1>
            
            <button>   <Link className="nav-link" to="/shelter/add-form">Add Puppy</Link></button>
            </div>
            <ul class="list-group" >
                <div className="cards-wrapper">
                    <div className="card-wrapper">
                        <a class="front">
                            {
                                props.animals.map((animal, i) => {
                                    return <Link class="list-group-item list-group-item-action" key={i} to={`/shelter/animal/${animal._id}`}>{animal.name}<br></br>{animal.breed}<br></br>{animal.description}</Link>
                                })
                            }
                        </a>
                    </div>

                </div>
            </ul>





        </>
    )
}