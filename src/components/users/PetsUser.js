import React from 'react';
import NavUser from './NavUser';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'


export default function PetsUser(props){
    if (!props.loggednInAdopt) {
        return <Redirect to='/user/signup' />
    }
    return (
<>
<NavUser onLogout={props.onLogout}
loggednInAdopt={props.loggednInAdopt}/>
User pets pages
                {
                    props.animals.map((animal, i) => {
                        return <>   
                            <div class="card" style={{width: "18rem"}}>
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{animal.name}</h5>
                                    <p class="card-text">{animal.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Looks like: {animal.breed}</li>
                                    <li class="list-group-item">Color: {animal.color}</li>
                                    <li class="list-group-item">Age: {animal.age}</li>
                                    <li class="list-group-item">Height: {animal.height}</li>
                                    <li class="list-group-item">Weight: {animal.weight}</li>
                                    <li class="list-group-item">Hair length: {animal.hair_length}</li>
                                    <li class="list-group-item">Fun fact: {animal.funfact}</li>
                                    <li class="list-group-item">Location: {animal.location}</li>
                                    <li class="list-group-item">Contact: </li>
                                </ul>
                                <div class="card-body">
                                    <Link href="#" class="card-link" >Add</Link>
                                </div>
                            </div>         
                        </>
                    })
                }
</>
    )
}