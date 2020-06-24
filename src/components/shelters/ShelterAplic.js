import React from 'react';
import {Link} from 'react-router-dom'

export default function ShelterProfile(props){
    return (
<>
Application page
<button ><Link to={'/application/:id'}>Details</Link></button>
</>
    )
}