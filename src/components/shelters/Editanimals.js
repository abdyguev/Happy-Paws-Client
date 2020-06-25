import React from 'react'
import axios from 'axios'
import config from '../../config'
import { Redirect } from 'react-router-dom';

export default class EditAnimals extends React.Component {

    state = {
        animal: ''
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
               //redirect to App.js
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
    

    render(){
        if (!this.props.loggedInUser) {
            return <Redirect to='/' />
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
        const {name, description} = this.state.animal
        return (
            <>
                <form >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" 
                        onChange={this.handleNameChange} name="name" id="name" value={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control"  onChange={this.handleDescChange} name="description" id="description" value={description}/>
                    </div>
                    <button type="submit" className="btn btn-info" onClick={this.handleEdit}>Submit</button>
                </form>
            </>
        )
    }
}