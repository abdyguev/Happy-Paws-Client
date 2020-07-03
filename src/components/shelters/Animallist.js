import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Nav from './Nav';
import { Redirect } from 'react-router-dom';


export default function AnimalsList(props) {


    useEffect(() => {
        if (props.loggedInUser) {
            props.getAnimals()
        }
    }, [])

    if (!props.loggedInUser) {
        return <Redirect to='/shelter/signup' />
    }
    return (
        <>
            <Nav onLogout={props.onLogout}
                loggedInUser={props.loggedInUser} />
            <div className="heading">
                <h1 style={{ marginTop: "2rem", marginBottom: "1rem", color: "#272727" }}>Available Pets </h1>

                <button className="btn btn-light">   <Link className="nav-link" to="/shelter/add-form">Add Puppy</Link></button>
            </div>
            <div>

                {
                    props.animals.map((animal, i) => {
                        return <div  key={i} className="list-pets">
                            <div className="box">
                                <div id="card-container">
                                    <div id="card" style={{backgroundColor: "#d08a55"}}>
                                        <div style={{ backgroundImage: `url(${animal.image})`, backgroundSize: "cover"}} className="front face">

                                        </div>
                                        <div className="back-face">

                                        
                                            <div class="info-wrapper">
                                                <div class="info-title">{animal.name}</div>
                                                <ul class="info-content">
                                                    <li class="info-content-item">Hair <span>{animal.hair_length}</span></li>
                                                    <li class="info-content-item">Color <span>{animal.color}</span></li>
                                                    <li class="info-content-item">Weight <span>{animal.weight}</span></li>
                                                </ul>

                                            
                                            <Link to={`/shelter/animal/${animal._id}`} style={{marginTop:"1rem"}}className="btn btn-2">More Details</Link>

                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>


        </>
    )
}