import React from 'react';
import Nav from './Nav'
import { Redirect } from 'react-router-dom';

// import {Link} from 'react-router-dom'

export default function ShelterProfile(props){
    if (!this.props.loggedInUser) {
        return <Redirect to='/shelter/signup' />
    }
    return (
<>
<Nav onLogout={props.onLogout}
                loggedInUser={props.loggedInUser}/>
Application page
{/* <button ><Link to={'/application/:id'}>Details</Link></button> */}
</>
    )
}