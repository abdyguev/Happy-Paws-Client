import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import config from '../../config'
import { Redirect } from 'react-router-dom';


export default class AnimalDetail extends React.Component{

    state = {
        animal: ''
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`${config.API_URL}/shelter/animal/${id}`, { withCredentials: true})
            .then((res) => {
                this.setState({
                    animal: res.data
                })
            })
            .catch((err) => {
                if(err.response.status === 401) {
                  this.props.history.push('/')
                }
              })
    }

    handleDeleteAnimal = () => {
        let id = this.props.match.params.id
        axios.delete(`${config.API_URL}/shelter/animal/${id}`, { withCredentials: true})
            .then(() => {
               // we will redirect here
               this.props.afterDelete(id)
            })
            .catch((err) => {
                if(err.response.status === 401) {
                    this.props.history.push('/')
                }
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
        const {name, description} = this.state.animal
        let id = this.props.match.params.id
        return (
            <>
               <p>{name}</p>
               <p>{description}</p>
               <button type="submit" className="btn btn-primary">
                   <Link to={`/shelter/animal/${id}/edit`}>Edit</Link>
               </button>
               <button onClick={this.handleDeleteAnimal} type="submit" className="btn btn-primary">Delete</button>
            </>
        )
    }
}