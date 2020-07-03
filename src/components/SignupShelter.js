import React from 'react';
import "../Signup.css"


export default function SignupShelter(props) {
    return (
        <>

            <div className="signup-all">
                <div class="signup-container">
                    <div class="left-container">


                        <form onSubmit={props.onSignIn}>
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



                        {/* <div class="puppy-2">
                            <img width="4rem"src="/images/puppy.png" /></div> */}
                    </div>
                    <div class="right-container">
                        <header>
                            <h1>Sign up and join the Fun!</h1>
                            <form onSubmit={props.onSignUp} >
                                <div class="set">
                                    <div class="pets-name">
                                        <label htmlFor="exampleShelterName">Shelter Name</label>
                                        <input type="text" className="form-control text-center" id="shelter_name" name="shelter_name" />
                                        <small id="shelter_name" className="form-text text-muted"></small>


                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input name="password" type="password" className="form-control text-center" id="password" />



                                        <label htmlFor="exampleInputEmail1">Location</label>
                                        <input type="text" className="form-control text-center" id="location" name="location" />
                                        <small id="location" className="form-text text-muted"></small>

                                        <label htmlFor="exampleUrl">Shelter Website</label>
                                        <input name="url" type="text" className="form-control text-center" />
                                        <small id="url" className="form-text text-muted"></small>


                                    </div>

                                    <div class="pets-breed" >
                                        <label htmlFor="exampleInputPassword1">Email</label>
                                        <input name="email" className="form-control text-center " id="email" />
                                        <small id="email" className="form-text text-muted"></small>

                                        <label htmlFor="examplePhone">Phone</label>
                                        <input type="text" className="form-control text-center" id="phone" name="phone" />
                                        <small id="phone" className="form-text text-muted"></small>

                                        <label htmlFor="exampleDescription">Description</label>
                                        <input name="description" type="text" className="form-control text-center" />
                                        <small id="description" className="form-text text-muted"></small>
                                        
                                            <button type="submit" className="btn btn-light">Submit</button>
                                        
                                    </div>




                                </div>
                            </form>
                        </header>

                    </div>
                </div>
            </div>


        </>
    )
}
