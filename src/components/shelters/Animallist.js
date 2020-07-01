import React, {useEffect} from 'react';
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
            <Nav onLogout={props.onLogoutShelter}
                loggedInUser={props.loggedInUser}/>
            <div className="heading">
                <h1 style={{marginTop:"2rem", marginBottom:"1rem", color:"#272727"}}>Available Pets </h1>

                <button className="btn btn-light">   <Link className="nav-link" to="/shelter/add-form">Add Puppy</Link></button>
            </div>
            <div>
                
                {
                    props.animals.map((animal, i) => {
                        return <div className="list-pets">
                        <div key={i} className="box">
                            <div id="card-container">
                                <div id="card">
                                    <div style={{backgroundImage:`url(${animal.image})`, backgroundSize: "cover", opacity: ".85"}} className="front face">
                                        
                                        <h1>{animal.name}</h1><br></br><h2>{animal.description}</h2>
                                    </div>
                                    <div className="back face">
                                        
                                           {/* <button>      <Link to={`/shelter/animal/${animal._id}`}>More Details</Link></button>  */}
                                           <Link to={`/shelter/animal/${animal._id}`} className="btn btn-2">More Details</Link> 
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    })
                }
            
            </div>


            {/* <ul className="list-group" >
                <div id="card-container">
                    <div id="card">
                        <div class="front face">
                            {
                                props.animals.map((animal, i) => {
                                    return <Link key={i} to={`/shelter/animal/${animal._id}`}>{animal.name}<br></br>{animal.breed}<br></br>{animal.description}</Link>
                                })
                            }
                        </div>
                        <div class="back face">
            <ul class="list-group" >
                <div className="cards-wrapper">
                    <div className="card-wrapper">
                            {
                                props.animals.map((animal, i) => {
                                    return <Link key={i} to={`/shelter/animal/${animal._id}`}>{animal.name}<br></br>{animal.breed}<br></br>{animal.description}</Link>
                                })
                            }
                        </div>
                    </div>
                </div>
            </ul> */}


        </>
    )
}