import React from 'react';


export default function SignupShelter(props){
    return (
        <>
        <div>
        <h1>Sign In Shelter</h1>    
        <form>
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
        </div>
        
        <div>
        <h1>Sign up Shelter</h1>    
        <form>
            <div className="form-group">
                <label htmlFor="exampleFullName">Full Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="FullName" />
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input name="email" className="form-control" id="exampleInputEmail1" name="email"  />
                <small id="emailHelp" className="form-text text-muted"></small></div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleShelterName">Shelter Name</label>
                <input type="text" className="form-control" id="exampleShelterName" name="shelter name"  />
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Location</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="location"  />
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleDescription">Description</label>
                <input name="description" type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleUrl">Shelter Website</label>
                <input name="url" type="text" className="form-control"  />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>

        </>
    )
}
