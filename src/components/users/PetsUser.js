import React from 'react';
import NavUser from './NavUser';
import { Redirect } from 'react-router-dom';

export default function PetsUser(props){
    if (!props.loggednInAdopt) {
        return <Redirect to='/user/signup' />
    }
    return (
<>
<NavUser onLogout={props.onLogout}
loggednInAdopt={props.loggednInAdopt}/>
User pets pages
                {
                    props.animals.map((animal, i) => {
                        return <>   
                        <h1>{animal.name}</h1>          
                        </>
                    })
                }
</>
    )
}