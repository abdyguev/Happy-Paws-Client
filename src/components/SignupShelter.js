import React from 'react';


export default function SignupShelter(props) {
    return (
        <>
            <div className="signup-page">
                {/* <div className="login">

                    <form class="login-form" onSubmit={props.onSignIn}>
                        <h1>Sign In</h1>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control text-center" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                            <small id="email" style={{ margin: " 0 3.5rem" }} className="form-text text-muted">We'll never share your email.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name="password" type="password" className="form-control text-center" id="exampleInputPassword1" />
                        </div>
                        <button style={{ marginBottom: "1rem" }} type="submit" className="btn btn-light">Submit</button>
                    </form>
                </div> */} 

                <div class="signup">

                    <form class="signup-form" onSubmit={props.onSignUp} >
                        <h1>Sign up </h1>
                        <div className="form-group">
                            <label htmlFor="exampleShelterName">Shelter Name</label>
                            <input type="text" className="form-control text-center" id="shelter_name" name="shelter_name" />
                            <small id="shelter_name" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <input name="email" className="form-control text-center " id="email" />
                            <small id="email" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name="password" type="password" className="form-control text-center" id="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="examplePhone">Phone</label>
                            <input type="text" className="form-control text-center" id="phone" name="phone" />
                            <small id="phone" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Location</label>
                            <input type="text" className="form-control text-center" id="location" name="location" />
                            <small id="location" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleDescription">Description</label>
                            <input name="description" type="text" className="form-control text-center" />
                            <small id="description" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleUrl">Shelter Website</label>
                            <input name="url" type="text" className="form-control text-center" />
                            <small id="url" className="form-text text-muted"></small>

                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
