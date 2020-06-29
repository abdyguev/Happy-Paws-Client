import React from 'react';
import NavUser from './NavUser' 
import { Redirect } from 'react-router-dom';

export default function UserProfile(props){
    if (!props.loggednInAdopt) {
        return <Redirect to='/user/signup' />
    }
    return (
<>
<NavUser onLogout={props.onLogout}
loggednInAdopt={props.loggednInAdopt}/>
User profile page
</>
    )
}