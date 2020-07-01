import React from 'react';
import NavUser from './NavUser';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

export default class PetsUser extends React.Component {

    state = {
        pets: []
    }

    componentDidMount() {
        axios.get(`${config.API_URL}/user/pets`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    pets: res.data
                })
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    this.props.history.push('/user/signup')
                }
            })
    }
    handleAddPets = (e) => {
        e.preventDefault()
        axios.post(`${config.API_URL}/user/favorite/:itemId/add`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    pets: [...this.state.pets, res.data]
                }, () => {
                    this.props.history.push('/user/favorite')
                })
            })
            .catch((err) => {
                ''
                console.log(err)
                if (err.response.status === 401) {
                    this.props.history.push('/')
                }
            })
    }



    render() {
        if (!this.props.loggednInAdopt) {
            return <Redirect to='/user/signup' />
        }
        return (
            <>
                <NavUser onLogout={this.props.onLogout}
                    loggednInAdopt={this.props.loggednInAdopt} />
User pets pages
                {/* {
                    this.state.pets.map((animal, i) => {
                        return <>   
                            <div className="card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..."/>
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
                                    <Link type="button" class="card-link" onClick={this.state.handleAddPets}>Add</Link>
                                </div>
                            </div>         
                        </>
                    })
                }  */}


                   RIGHT ONE
                {
                    this.state.pets.map((animal, i) => {
                        return <div key={i} className="list-pets">
                            <div className="box">
                                <div id="card-container">
                                    <div id="card">
                                        <div style={{ backgroundImage: `url(${animal.image})`, backgroundSize: "cover", opacity: ".85" }} className="front face">

                                            <h1>{animal.name}</h1><br></br><h2>{animal.description}</h2>
                                        </div>

                                        <div className="back face">
                                            <div className="row">
                                                <div className="column">
                                                    <p>Description: {animal.description}</p>
                                                    <p>Looks like: {animal.breed}</p>
                                                    <p>Color: {animal.color}</p>
                                                    <p>Age: {animal.age}</p>
                                                    <p>Height: {animal.height}</p>
                                                    <p>Weight: {animal.weight}</p>
                                                    <p>Available housing: {animal.available_housing}</p>
                                                </div>
                                                <div className="column">
                                                    <p>Hair length: {animal.hair_length}</p>
                                                    <p>Good with: {animal.good_with}</p>
                                                    <p>Bad with: {animal.bad_with}</p>
                                                    <p>Funfact: {animal.funfact}</p>
                                                    <p>Location: {animal.location}</p>
                                                    <p>Needs time with an owner: {animal.needs_time}</p>
                                                </div>

                                            </div>

                                        </div>
                                        

                                    </div>
                                    <div className="icon-list">

                                        <div class="heart-wrapper">
                                            <i class="fas fa-times"></i></div>
                                        <div class="heart-wrapper-2">
                                            <i class="far fa-heart"></i>
                                        </div>
                                    
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                    })
                }
            </>
        )
    }
}
