import React from 'react'
import axios from 'axios'
import config from '../../config'
import { Redirect } from 'react-router-dom';
import Nav from './Nav'

export default class EditProfile extends React.Component {

    state = {
        shelter: ''
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${config.API_URL}/shelter/profile/${id}`, {withCredentials: true})
            .then((res) => {
                this.setState({
                    shelter: res.data
                })
            })
    }

    handleEdit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id
        axios.patch(`${config.API_URL}/shelter/profile/${id}`, {
            shelter_name: this.state.shelter.shelter_name,
            description: this.state.shelter.description,
            email: this.state.shelter.email,
            phone: this.state.shelter.phone, 
            url: this.state.shelter.url, 
            location: this.state.shelter.location
        }, {withCredentials: true})
        .then((res) => {
                // we will redirect here
                this.props.afterEdit()
             })
             .catch((err) => {
                 if(err.response.status === 401) {
                     this.props.history.push('/')
                 }
             })
    }

    handleNameChange = (e) => {
        let newShelter = JSON.parse(JSON.stringify(this.state.shelter))
        newShelter.shelter_name = e.target.value

        this.setState({
            shelter_name: newShelter
        })
    }
    handleDescChange = (e) => {
        let newShelter = JSON.parse(JSON.stringify(this.state.shelter))
        newShelter.description = e.target.value

        this.setState({
            shelter: newShelter
        })
    }
    handleEmailChange = (e) => {
        let newShelter = JSON.parse(JSON.stringify(this.state.shelter))
        newShelter.email = e.target.value

        this.setState({
            shelter: newShelter
        })
    }
    handlePhoneChange = (e) => {
        let newShelter = JSON.parse(JSON.stringify(this.state.shelter))
        newShelter.phone = e.target.value

        this.setState({
            shelter: newShelter
        })
    }
    handleUrlChange = (e) => {
        let newShelter = JSON.parse(JSON.stringify(this.state.shelter))
        newShelter.url = e.target.value

        this.setState({
            shelter: newShelter
        })
    }
    handleLocationChange = (e) => {
        let newShelter = JSON.parse(JSON.stringify(this.state.shelter))
        newShelter.location = e.target.value

        this.setState({
            shelter: newShelter
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
        const {shelter_name, description, email, phone, url, location} = this.state.shelter
        return (
            <>
            <Nav />
                <form>
                    <div className="form-group">
                        <label htmlFor="shelter_name">Shelter Name</label>
                        <input type="text" className="form-control" 
                        onChange={this.handleNameChange} name="shelter_name" id="shelter_name" value={shelter_name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control"  onChange={this.handleDescChange} name="description" id="description" value={description}/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" onChange={this.handleEmailChange} name="email" id="email" value={email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control" onChange={this.handlePhoneChange} name="phone" id="phone" value={phone}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input type="text" className="form-control" onChange={this.handleUrlChange} name="url" id="url" value={url} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" className="form-control" onChange={this.handleLocationChange} name="location" id="location" value={location}/>
                    </div>
                    <button type="submit" className="btn btn-info" onClick={this.handleEdit}>Submit</button>
                </form>
            </>
        )
    }
}