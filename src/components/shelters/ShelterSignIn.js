import React from 'react';


export default function SignupShelter(props) {
    return (
        <>
            <div className="signup-page">
                <div className="login">

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
                </div>
            </div>
        </>
    )
}
