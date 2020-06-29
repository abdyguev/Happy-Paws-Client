import React from 'react';
import { Link } from 'react-router-dom'

export default function SignupUser(props) {
    return (
        // <>
        // <div>
        // <h1>Sign In User</h1>
        // <form >
        //     <div className="form-group">
        //         <label htmlFor="exampleInputEmail1">Email address</label>
        //         <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
        //         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="exampleInputPassword1">Password</label>
        //         <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        //     </div>
        //     <button type="submit" className="btn btn-primary">Submit</button>
        // </form>
        // </div>

        // <div>
        // <h1>Sign Up User</h1>
        // <button><Link to={'/user/application'}>Sign Up</Link></button>
        // </div>
        // </>
        <>

            <div className="signup-page">
                <div className="login-user">

                    <form class="login-form-user" onSubmit={props.onSignUp}>
                        <h1>Sign Up </h1>
                        <p>Looking to adopt the perfect pup?<br></br>Sign Up to start getting matched<br></br> with your new best-friend! </p>
                        <button style={{marginBottom: "1rem"}} className="btn btn-light"><Link to={'/user/application'}>Sign Up</Link></button>
                    </form>
                </div>


                <div class="signup-user">

                    <form class="signup-form-user" onSubmit={props.onSignUp} >
                    <h1>Log In</h1>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button style={{marginBottom: "1rem"}}type="submit" className="btn btn-light">Submit</button>
                    </form>

                </div>
            </div>
        </>
    )
}