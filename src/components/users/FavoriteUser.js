import React from 'react';
// import {Route} from 'react-router-dom'
import NavUser from './NavUser' 
import { Redirect } from 'react-router-dom';


export default function FavoriteUser(props){
    if (!props.loggednInAdopt) {
        return <Redirect to='/user/signup' />
    }
    return (
<>
<NavUser onLogout={props.onLogout}
loggednInAdopt={props.loggednInAdopt}/>

User favorite page
</>
    )
}