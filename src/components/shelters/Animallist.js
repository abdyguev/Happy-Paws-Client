import React from 'react';
import { Link } from 'react-router-dom'
import Nav from './Nav'


export default function AnimalsList(props) {


    return (
        <>
            <Nav />
            <div className="heading">
                <h1 style={{marginTop:"2rem", marginBottom:"1rem", color:"#272727"}}>Available Pets </h1>

                <button className="btn btn-light">   <Link className="nav-link" to="/shelter/add-form">Add Puppy</Link></button>
            </div>
            <div>
                {/* <ul class="list-group" > */}
                {
                    props.animals.map((animal, i) => {
                        return <div className="list-pets">
                        <div class="box">
                            <div id="card-container">
                                <div id="card">
                                    <div style={{backgroundImage:`url(${animal.image})`, backgroundSize: "cover", opacity: ".85"}} class="front face">
                                        
                                        <h1>{animal.name}</h1><br></br><h1></h1><br></br><h2>{animal.breed}</h2>
                                    </div>
                                    <div class="back face">
                                        
                                           {/* <button>      <Link to={`/shelter/animal/${animal._id}`}>More Details</Link></button>  */}
                                           <Link to={`/shelter/animal/${animal._id}`} class="btn btn-2">More Details</Link> 
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    })
                }
                {/* </ul> */}
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