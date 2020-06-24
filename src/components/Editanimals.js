import React from 'react'
import axios from 'axios'
import config from '../config'
import { Redirect } from 'react-router-dom';

export default class EditAnimals extends React.Component {

    state = {
        todo: ''
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${config.API_URL}/animal/${id}`, {withCredentials: true})
            .then((res) => {
                this.setState({
                    todo: res.data
                })
            })
    }

    handleEdit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id
        axios.patch(`${config.API_URL}/animal/${id}`, {
            name: this.state.todo.name,
            description: this.state.todo.description
        }, {withCredentials: true})
            .then((res) => {
               //redirect to App.js
            })
    }

    handleNameChange = (e) => {
        let newTodo = JSON.parse(JSON.stringify(this.state.todo))
        newTodo.name = e.target.value

        this.setState({
            todo: newTodo
        })
    }

    handleDescChange = (e) => {
        let newTodo = JSON.parse(JSON.stringify(this.state.todo))
        newTodo.description = e.target.value

        this.setState({
            todo: newTodo
        })
    }
    

    render(){
        if (!this.props.loggedInUser) {
            return <Redirect to='/sign-in' />
        }
        if (!this.state.todo){
            return(
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        const {name, description} = this.state.todo
        return (
            <>
                <form >
                    <div class="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" class="form-control" 
                        onChange={this.handleNameChange} name="name" id="name" value={name}/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" class="form-control"  onChange={this.handleDescChange} name="description" id="description" value={description}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handleEdit}>Submit</button>
                </form>
            </>
        )
    }
}