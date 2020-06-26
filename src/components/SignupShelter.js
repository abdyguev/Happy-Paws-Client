import React from 'react';


export default function SignupShelter(props) {
    return (
        <>
            {/* <div>
        <h1>Sign In Shelter</h1>    
        <form onSubmit={props.onSignUp}> 
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div> */}
        
        <div>
        <h1>Sign up Shelter</h1>    
        <form onSubmit={props.onSignUp} >
            <div className="form-group">
                <label htmlFor="exampleShelterName">Shelter Name</label>
                <input type="text" className="form-control" id="shelter_name" name="shelter_name" />
                <small id="shelter_name" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input name="email" className="form-control" id="email" />
                <small id="email" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
                <label htmlFor="examplePhone">Phone</label>
                <input type="text" className="form-control" id="phone" name="phone"  />
                <small id="phone" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Location</label>
                <input type="text" className="form-control" id="location" name="location"  />
                <small id="location" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleDescription">Description</label>
                <input name="description" type="text" className="form-control" />
                <small id="description" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleUrl">Shelter Website</label>
                <input name="url" type="text" className="form-control"  />
                <small id="url" className="form-text text-muted"></small>
                </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </>
    )
}
