import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                this is the Landing Page

                <button ><Link to={'/shelter/signup'}>Shelter</Link></button>
                <button ><Link to={'/user/signup'}>User</Link></button>
            </div>
        )
    }
}
