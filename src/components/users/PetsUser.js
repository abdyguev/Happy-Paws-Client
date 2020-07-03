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


    render() {
        if (!this.props.loggedInAdopt) {
            return <Redirect to='/user/signup' />
        }
        return (
            <>
                <NavUser onLogout={this.props.onLogout}
                    loggedInAdopt={this.props.loggedInAdopt} />
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
<div style={{textAlign:"center"}}>
                <h1 style={{ marginTop: "2rem", marginBottom: "1rem", color: "#272727" }}>Available Pets </h1>


</div>
                {
                    this.state.pets.map((animal, i) => {
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
                                                <ul class="info-content" style={{ borderTop: 'none' }}>
                                                    <li class="info-content-item">Hair<span>{animal.hair_length}</span></li>
                                                    <li class="info-content-item">Age <span>{animal.age}</span></li>
                                                    <li class="info-content-item">Height <span>{animal.height}</span></li>
                                                </ul>
                                                <ul class="info-content" style={{ borderTop: 'none' }}>
                                                    <li class="info-content-item"><span></span></li>
                                                    <li class="info-content-item">Contact<span>{animal.contact}</span></li>
                                                    <li class="info-content-item"> <span></span></li>
                                                </ul>
                                                <Link to="/donate" style={{marginTop:"1rem"}} className="btn btn-2" target="_blank">Donate</Link>



                                            </div>
                                        </div>

                                    </div>
                                    <div className="icon-list">

                                        <div className="heart-wrapper">

                                            <Link className="far fa-heart" onClick={(e) => this.handleAddPets(e, animal._id)} /></div>



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