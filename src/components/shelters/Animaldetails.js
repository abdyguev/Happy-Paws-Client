import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import config from '../../config'
import { Redirect } from 'react-router-dom';
import Nav from './Nav'


export default class AnimalDetail extends React.Component {

    state = {
        animal: ''
    }

    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`${config.API_URL}/shelter/animal/${id}`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    animal: res.data
                })
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    this.props.history.push('/')
                }
            })
    }

    handleDeleteAnimal = () => {
        let id = this.props.match.params.id
        axios.delete(`${config.API_URL}/shelter/animal/${id}`, { withCredentials: true })
            .then(() => {
                // we will redirect here
                this.props.afterDelete(id)
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    this.props.history.push('/')
                }
            })
    }

    render(){
        if (!this.props.loggedInUser) {
            return <Redirect to='/shelter/signup' />
        }
        if (!this.state.animal){
            return(
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        const { name, image, breed, color, age, height, weight, hair_length, available_housing, good_with, bad_with, needs_time, description, funfact, location } = this.state.animal
        let id = this.props.match.params.id
        return (
            <>
               <Nav onLogout={this.props.onLogout}
                loggedInUser={this.props.loggedInUser}/>
                <div id="wrapper">
                    <div id="my-icon">
                        <img src={image}></img>
                    </div>
                    <div id="my-info">
                        <h1>{name}</h1>

                        <div className="row">
                            <div className="column">
                                <p>Description: {description}</p>
                                <p>Color: {color}</p>
                                <p>Age: {age}</p>
                                <p>Height: {height}</p>
                                <p>Weight: {weight}</p>
                                <p>Available housing: {available_housing}</p>
                            </div>
                            <div className="column">
                                <p>Hair length: {hair_length}</p>
                                <p>Good with: {good_with}</p>
                                <p>Bad with: {bad_with}</p>
                                <p>Funfact: {funfact}</p>
                                <p>Location: {location}</p>
                                <p>Needs time with an owner: {needs_time}</p>
                            </div>
                            <div className="button" style={{ textAlign: "center", margin: "1rem 0"}}>
                                <button type="submit" className="btn btn-primary">
                                    <Link to={`/shelter/animal/${id}/edit`}>Edit</Link>
                                </button>
                                <button onClick={this.handleDeleteAnimal} type="submit" className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}