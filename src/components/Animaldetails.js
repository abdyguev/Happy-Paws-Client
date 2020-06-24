import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import config from '../config'
import { Redirect } from 'react-router-dom';


export default class AnimalDetail extends React.Component{

    state = {
        todo: ''
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${config.API_URL}/animal/${id}`, { withCredentials: true})
            .then((res) => {
                this.setState({
                    todo: res.data
                })
            })
            .catch((err) => {
                if(err.response.status === 401) {
                  this.props.history.push('/sign-in')
                }
              })
    }

    handleDeleteTodo = () => {
        let id = this.props.match.params.id
        axios.delete(`${config.API_URL}/animal/${id}`, { withCredentials: true})
            .then(() => {
               // we will redirect here
               this.props.afterDelete(id)
            })
            .catch((err) => {
                if(err.response.status === 401) {
                    this.props.history.push('/sign-in')
                }
            })
    }

    render(){
        if (!this.props.loggedInUser) {
            return <Redirect to='/sign-in' />
        }
        if (!this.state.todo){
            return(
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        const {name, description} = this.state.todo
        let id = this.props.match.params.id
        return (
            <>
               <p>{name}</p>
               <p>{description}</p>
               <button type="submit" className="btn btn-primary">
                   <Link to={`/todo/${id}/edit`}>Edit</Link>
               </button>
               <button onClick={this.handleDeleteTodo} type="submit" className="btn btn-primary">Delete</button>
            </>
        )
    }
}