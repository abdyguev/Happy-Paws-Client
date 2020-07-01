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
            this.setState({
                favoritPets: res.data
            })
        })
        .catch((err) => {
            if (err.response.status === 401) {
                this.props.history.push('/')
            }
        })
    }
    handleDeleteFav = (id) => {
        //filter animals
        let newAnimal = this.state.favoritPets.filter((animal) => {
            return animal._id !== id
        })
        this.setState({
          pets: newAnimal 
        }, () => {
          this.props.history.push('/user/favorite')
        })
        console.log(this.state.favoritPets)
    }

    handleDeletePet = () => {
        let id = this.props.match.params.id
        axios.delete(`${config.API_URL}/user/favorite/${id}/delete`, { withCredentials: true })
            .then(() => {
                // we will redirect here
                this.state.handleDeleteFav(id)
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    this.props.history.push('/')
                }
            })
    }

    render() {
        if (!this.props.loggednInAdopt) {
            return <Redirect to='/user/signup' />
        }
        if (!this.state.pets){
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
            loggednInAdopt={this.props.loggednInAdopt}/>
            {
                    this.state.favoritPets.map((animal, i) => {
                        return <>   
                            <div className="card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{animal.name}</h5>
                                    <p className="card-text">{animal.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Looks like: {animal.breed}</li>
                                    <li className="list-group-item">Color: {animal.color}</li>
                                    <li className="list-group-item">Age: {animal.age}</li>
                                    <li className="list-group-item">Height: {animal.height}</li>
                                    <li className="list-group-item">Weight: {animal.weight}</li>
                                    <li className="list-group-item">Hair length: {animal.hair_length}</li>
                                    <li className="list-group-item">Fun fact: {animal.funfact}</li>
                                    <li className="list-group-item">Location: {animal.location}</li>
                                    <li className="list-group-item">Contact: </li>
                                </ul>
                                <div className="card-body">
                                    <Link type="button" className="card-link" onClick={this.handleDeletePet}>Delete</Link>
                                </div>
                            </div>         
                        </>
                    })
                }

            User favorite page
            </>
    )
    }
}