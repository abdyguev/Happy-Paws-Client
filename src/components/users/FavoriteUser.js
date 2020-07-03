import React from 'react';
// import {Route} from 'react-router-dom'
import NavUser from './NavUser'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom'
import config from '../../config'


export default class FavoriteUser extends React.Component {

    state = {
        favoritPets: []
    }
    componentDidMount() {
        axios.get(`${config.API_URL}/user/favorite`, { withCredentials: true })
            .then((res) => {
                console.log(res)
                this.setState({
                    favoritPets: res.data.likedDogs
                })
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    this.props.history.push('/')
                }
            })
    }
    handleDeleteFav = (petId) => {
        //filter animals
        let newAnimal = this.state.favoritPets.filter((animal) => {
            return animal._id !== petId
        })
        this.setState({
            favoritPets: newAnimal
        }, () => {
            this.props.history.push('/user/favorite')
        })
    }

    handleDeletePet = (e, petId) => {
        e.preventDefault()
        axios.delete(`${config.API_URL}/user/favorite/${petId}/delete`, { withCredentials: true })
            .then((res) => {
                this.handleDeleteFav(petId)
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    this.props.history.push('/')
                }
            })
    }

    render() {
        if (!this.props.loggedInAdopt) {
            return <Redirect to='/user/signup' />
        }
        if (!this.state.favoritPets) {
            return (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        return (
            <>
                <NavUser onLogout={this.props.onLogout}
                    loggedInAdopt={this.props.loggedInAdopt} />
                {
                    this.state.favoritPets.map((animal, i) => {


                        return <div key={i} className="list-pets">
                            <div className="box">
                                <div id="card-container">
                                    <div id="card">
                                        <div style={{ backgroundImage: `url(${animal.image})`, backgroundSize: "cover" }} className="front face">

                                            {/* <h1>{animal.name}</h1><br></br><h2>{animal.description}</h2> */}
                                        </div>
                                        <div className="back-face">


                                            <div class="info-wrapper">
                                                <div class="info-title">{animal.name}</div>
                                                <ul class="info-content">
                                                    <li class="info-content-item">Breed<span>{animal.breed}</span></li>
                                                    <li class="info-content-item">Color <span>{animal.color}</span></li>
                                                    <li class="info-content-item">Weight <span>{animal.weight}</span></li>
                                                </ul>
                                                <ul class="info-content" style={{borderTop:'none'}}>
                                                    <li class="info-content-item">Hair<span>{animal.hair_length}</span></li>
                                                    <li class="info-content-item">Age <span>{animal.age}</span></li>
                                                    <li class="info-content-item">Height <span>{animal.height}</span></li>
                                                </ul>
                                                <ul class="info-content" style={{borderTop:'none'}}>
                                                    <li class="info-content-item"><span></span></li>
                                                    <li class="info-content-item">Contact<span>{animal.contact}</span></li>
                                                    <li class="info-content-item"> <span></span></li>
                                                </ul>



                                            
                                            <Link to={`/shelter/animal/${animal._id}`} style={{ marginTop: "1rem" }} className="btn btn-2">More Details</Link>


                                        </div>
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