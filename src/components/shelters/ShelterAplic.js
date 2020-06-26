import React from 'react';
import Nav from './Nav'
// import {Link} from 'react-router-dom'

export default function ShelterProfile(props){
    return (
<>
<Nav onLogout={props.onLogout}
                loggedInUser={props.loggedInUser}/>
Application page
{/* <button ><Link to={'/application/:id'}>Details</Link></button> */}
</>
    )
}