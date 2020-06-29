import React from 'react'
import axios from 'axios'
import config from '../../config'
import { Redirect } from 'react-router-dom';
import Nav from './Nav'

export default class EditAnimals extends React.Component {

    state = {
        animal: []
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${config.API_URL}/shelter/animal/${id}`, {withCredentials: true})
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
        }, {withCredentials: true})
            .then((res) => {
                this.setState({
                  }, () => {
                    this.props.history.push('/shelter/animals')
                  })
            })
        // .then((res) => {
        //         // we will redirect here
        //         this.props.afterEdit()
        //      })
        //      .catch((err) => {
        //          if(err.response.status === 401) {
        //              this.props.history.push('/')
        //          }
        //      })
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

    render(){
        // if (!this.props.loggedInUser) {
        //     return <Redirect to='/' />
        // }
        if (!this.state.animal){
            return(
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        const {name, description, breed, color, age, height, weight, hair_length, available_housing, good_with, bad_with, needs_time, funfact, location} = this.state.animal
        return (
            <>
            <Nav />
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" 
                        onChange={this.handleNameChange} name="name" id="name" value={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control"  onChange={this.handleDescChange} name="description" id="description" value={description}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="breed">Looks like</label>
                    <input type="text" className="form-control" onChange={this.handleBreedChange} name="breed" id="breed" value={breed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Color</label>
                        <input type="text" className="form-control" onChange={this.handleColorChange} name="color" id="color" value={color}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control" onChange={this.handleAgeChange} name="age" id="age" value={age} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="height">Heigh</label>
                        <input type="number" className="form-control" onChange={this.handleHeightChange} name="height" id="height" value={height}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight</label>
                        <input type="number" className="form-control" onChange={this.handleWeightChange} name="weight" id="weight" value={weight}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="hair_length">Hair length</label>
                        <select className="custom-select my-1 mr-sm-2" onChange={this.handleHairLengthChange} name="hair_length" id="hair_length" value={hair_length}>                            <option value="1">short</option>
                            <option value="2">medium</option>
                            <option value="3">long</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="available_housing">Available for housing in</label>
                        <select className="custom-select my-1 mr-sm-2" onChange={this.handleAvaiHousChange} name="available_housing" id="available_housing" value={available_housing}>
                            <option value="1">house with garden</option>
                            <option value="2">apartment with garden</option>
                            <option value="3">rented apartment</option>
                            <option value="4">rented house</option>
                            <option value="5">owned apartment</option>
                            <option value="6">owned house</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="good_with">Good with:</label>
                        <select className="custom-select my-1 mr-sm-2" onChange={this.handleGoodChange} name="good_with" id="good_with" value={good_with}>                            <option value="1">dogs</option>
                            <option value="2">cats</option>
                            <option value="3">children</option>
                            <option value="4">all</option>
                            <option value="5">none</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bad_with">Bad with:</label>
                        <select className="custom-select my-1 mr-sm-2" onChange={this.handleBadChange} name="bad_with" id="bad_with" value={bad_with}>
                            <option value="1">dogs</option>
                            <option value="2">cats</option>
                            <option value="3">children</option>
                            <option value="4">all</option>
                            <option value="5">none</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="needs_time">Need time with the owner</label>
                        <input type="number" className="form-control" onChange={this.handleTimeChange} name="needs_time" id="needs_time" value={needs_time}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" className="form-control" onChange={this.handleLocationChange} name="location" id="location" value={location}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="funfact">Funfact</label>
                        <input type="text" className="form-control" onChange={this.handleFactChange} name="funfact" id="funfact" value={funfact}/>
                    </div>
                    <button type="submit" className="btn btn-info" onClick={this.handleEdit}>Submit</button>
                </form>
            </>
        )
    }
}