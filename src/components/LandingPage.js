import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                this is the Landing Page

                <button ><Link to={'/signup-shelter'}>Shelter</Link></button>
                <button ><Link to={'/signup-user'}>User</Link></button>
            </div>
        )
    }
}
