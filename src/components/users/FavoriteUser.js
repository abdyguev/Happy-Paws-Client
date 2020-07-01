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
        if (!this.state.favoritPets){
            return(
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
            loggedInAdopt={this.props.loggedInAdopt}/>
            {
                    this.state.favoritPets.map((animal, i) => {
            

                            return <div key={i} className="list-pets">
                        <div className="box">
                            <div id="card-container">
                                <div id="card">
                                    <div style={{ backgroundImage: `url(${animal.image})`, backgroundSize: "cover", opacity: ".85" }} className="front face">

                                        <h1>{animal.name}</h1><br></br><h2>{animal.description}</h2>
                                    </div>
                                    <div className="back face">
                                        
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Looks like: {animal.breed}, Age: {animal.age}</li>
                                                <li className="list-group-item">Height: {animal.height}, Weight: {animal.weight} </li>                                                
                                                <li className="list-group-item">Hair length: {animal.hair_length}</li>
                                                <li className="list-group-item">Fun fact: {animal.funfact}</li>
                                                <li className="list-group-item">Location: {animal.location} </li>
                                                <li className="list-group-item">Contact: </li>
                                            </ul>
                                            <button><Link type="button" className="card-link" onClick={(e) => this.handleDeletePet(e, animal._id)} >Delete</Link></button>

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