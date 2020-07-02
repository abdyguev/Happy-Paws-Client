import React from 'react';
import NavUser from './NavUser';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

export default class PetsUser extends React.Component {

    state = {
        pets: [],
        adopter: [this.props.loggedInAdopt]
    }

    componentDidMount() {
        if (this.props.loggedInAdopt) {
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
}
    handleAddPets = (e, petId) => {
        e.preventDefault()
        axios.post(`${config.API_URL}/user/favorite/${petId}/add`, {}, { withCredentials: true })
            .then((res) => {
                this.props.history.push('/user/favorite')
            })
            .catch((err) => {
                ''
                console.log(err)
                if (err.response.status === 401) {
                    this.props.history.push('/')
                }
            })
    }

    
    render(){
        if (!this.props.loggedInAdopt) {
            return <Redirect to='/user/signup' />
        }
    return (
<>
<NavUser onLogout={this.props.onLogout}
loggedInAdopt={this.props.loggedInAdopt}/>
{/* {
    this.state.adopter.map((adopt, i) => {
        {
                    this.state.pets.map((animal, i) => {
                        if (adopt.otherowned == "cat" && animal.bad_with == "cat"){
                        }
                    })
        }
        
        return <div key={i}>
        <p>{adopt.fullName}</p>
        </div>
    })
} */}


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
                                                    <p>Contact: {animal.contact}</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="icon-list">

                                        <div class="heart-wrapper">
                                        
                                            <Link class="far fa-heart" onClick={(e) => this.handleAddPets(e, animal._id)}/></div>
                                        
                                       
                                    
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

