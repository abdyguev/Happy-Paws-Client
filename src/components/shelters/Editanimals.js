import React from 'react'
import axios from 'axios'
import config from '../../config'
import { Redirect } from 'react-router-dom';
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default class EditAnimals extends React.Component {

    state = {
        animal: []
    }

    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`${config.API_URL}/shelter/animal/${id}`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    animal: res.data
                })
            })
    }

    handleEdit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id
        axios.patch(`${config.API_URL}/shelter/animal/${id}`, {
            name: this.state.animal.name,
            description: this.state.animal.description,
            image: this.state.animal.image,
            breed: this.state.animal.breed,
            color: this.state.animal.color,
            age: this.state.animal.age,
            height: this.state.animal.height,
            weight: this.state.animal.weight,
            hair_length: this.state.animal.hair_length,
            available_housing: this.state.animal.available_housing,
            good_with: this.state.animal.good_with,
            bad_with: this.state.animal.bad_with,
            needs_time: this.state.animal.needs_time,
            funfact: this.state.animal.funfact,
            location: this.state.animal.location
        }, { withCredentials: true })
            .then((res) => {
                this.setState({
                }, () => {
                    this.props.history.push('/shelter/animals')
                })
            })
    }

    handleNameChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.name = e.target.value

        this.setState({
            animal: newAnimal
        })
    }

    handleDescChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.description = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    // handleImgChange = (e) => {
    //     let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
    //     newAnimal.image = e.target.value

    //     this.setState({
    //         animal: newAnimal
    //     })
    // }
    handleBreedChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.breed = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleColorChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.color = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleAgeChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.age = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleHeightChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.height = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleWeightChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.weight = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleHairLengthChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.hair_length = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleAvaiHousChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.available_housing = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleGoodChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.good_with = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleBadChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.bad_with = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleTimeChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.needs_time = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleFactChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.funfact = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleLocationChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.location = e.target.value

        this.setState({
            animal: newAnimal
        })
    }
    handleContactChange = (e) => {
        let newAnimal = JSON.parse(JSON.stringify(this.state.animal))
        newAnimal.contact = e.target.value

        this.setState({
            animal: newAnimal
        })
    }

    render() {
        if (!this.props.loggedInUser) {
            return <Redirect to='/shelter/signup' />
        }
        if (!this.state.animal) {
            return (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        const { name, description, breed, color, age, height, weight, hair_length, available_housing, good_with, bad_with, needs_time, funfact, location, contact } = this.state.animal
        return (

            <>

                <form >
                    <div class="signup-container">
                        <div class="left-container">
                            <h1>
                                <img src="/images/Happypaws.png" class="fas fa-paw" alt="paw" />

                            </h1>
                            <div class="puppy">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" alt="pet" /></div>
                        </div>
                        <div class="right-container">
                            <header>
                                <h1>Edit {name}'s Details</h1>
                                <div class="set">
                                    <div class="pets-name">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control"
                                            onChange={this.handleNameChange} name="name" id="name" value={name} />
                                        <label htmlFor="funfact">Contact for adoption</label>
                                        <input type="text" className="form-control" onChange={this.handleContactChange} name="contact" id="contact" value={contact} />
                                        <label htmlFor="weight">Weight in kg</label>
                                        <input type="number" className="form-control" onChange={this.handleWeightChange} name="weight" id="weight" value={weight} />

                                        <label htmlFor="hair_length">Hair length</label>
                                        <select className="custom-select my-1 mr-sm-2" onChange={this.handleHairLengthChange} name="hair_length" id="hair_length" value={hair_length}>                            
                                            <option value="short">short</option>
                                            <option value="medium">medium</option>
                                            <option value="long">long</option>
                                        </select><br></br>

                                        <label htmlFor="bad_with">Bad with:</label>
                                        <select className="custom-select my-1 mr-sm-2" onChange={this.handleBadChange} name="bad_with" id="bad_with" value={bad_with}>
                                            <option value="dogs">dogs</option>
                                            <option value="cats">cats</option>
                                            <option value="children">children</option>
                                            <option value="all">all</option>
                                            <option value="none">none</option>
                                        </select>

                                    </div>
                                    <div class="pets-breed">
                                        <label htmlFor="description">Description</label>
                                        <input type="text" className="form-control" onChange={this.handleDescChange} name="description" id="description" value={description} />

                                        <label htmlFor="color">Color</label>
                                        <input type="text" className="form-control" onChange={this.handleColorChange} name="color" id="color" value={color} />

                                        <label htmlFor="height">Height in cm</label>
                                        <input type="number" className="form-control" onChange={this.handleHeightChange} name="height" id="height" value={height} />

                                        <label htmlFor="available_housing">Available for housing in</label>
                                        <select className="custom-select my-1 mr-sm-2" onChange={this.handleAvaiHousChange} name="available_housing" id="available_housing" value={available_housing}>
                                            <option value="house with garden">house with garden</option>
                                            <option value="apartment with garden">apartment with garden</option>
                                            <option value="rented apartment">rented apartment</option>
                                            <option value="rented house">rented house</option>
                                            <option value="owned apartment">owned apartment</option>
                                            <option value="owned house">owned house</option>
                                        </select>

                                        <label htmlFor="funfact">Funfact</label>
                                        <input type="text" className="form-control" onChange={this.handleFactChange} name="funfact" id="funfact" value={funfact} />



                                    </div>
                                    <div class="pets-gender">
                                        <label htmlFor="age">Age</label>
                                        <input type="text" className="form-control" onChange={this.handleAgeChange} name="age" id="age" value={age} />


                                        <label htmlFor="breed">Looks like</label>
                                        <input type="text" className="form-control" onChange={this.handleBreedChange} name="breed" id="breed" value={breed} />

                                        <label htmlFor="location">Location</label>
                                        <input type="text" className="form-control" onChange={this.handleLocationChange} name="location" id="location" value={location} />



                                        <label htmlFor="good_with">Good with:</label>
                                        <select className="custom-select my-1 mr-sm-2" onChange={this.handleGoodChange} name="good_with" id="good_with" value={good_with}>
                                            <option value="dogs">dogs</option>
                                            <option value="cats">cats</option>
                                            <option value="children">children</option>
                                            <option value="all">all</option>
                                            <option value="none">none</option>
                                        </select>

                                        <label htmlFor="needs_time">Need time with the owner</label>
                                        <input type="text" id="next" className="form-control" onChange={this.handleTimeChange} name="needs_time" value={needs_time} />


                                    </div>


                                </div>
                            </header>
                            <footer>
                                <div class="set">
                                <button id="back"><Link className="nav-link active myContainer" to="/shelter/animals">Animals</Link></button>
                                    <button type="submit" id="next" className="btn btn-info" onClick={this.handleEdit}>Submit</button>

                                </div>
                            </footer>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}