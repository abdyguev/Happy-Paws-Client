import React from 'react'


export default function ApplicationUser(props) {


    return (

        <>
            <h1>Sign Up User</h1>
            <form onSubmit={props.onSignUpUser} >
                <div className="form-group">
                    <label htmlFor="exampleFullName">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="fullName" />
                    <small id="fullName" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input name="email" className="form-control" id="exampleInputEmail1" />
                    <small id="email" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" type="password" className="form-control" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="examplePhone">Phone</label>
                    <input type="text" className="form-control text-center" id="phone" name="phone" />
                    <small id="phone" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleLocation">Full address</label>
                    <input type="text" className="form-control" id="exampleLocation" name="location" />
                    <small id="location" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleAvailability">How much time are </label>
                    <input type="text" className="form-control" id="exampleAvailability" name="availability" />
                    <small id="availability" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Job</label>
                    <select name="job" className="custom-select my-1 mr-sm-2" id="job">
                        <option selected>Choose...</option>
                        <option value="1">Full-Time</option>
                        <option value="2">Part-Time</option>
                        <option value="3">No Job</option>
                        <option value="3">Remote</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Living Place</label>
                    <select name="livingPlace" className="custom-select my-1 mr-sm-2" id="livingPlace">
                        <option selected>Choose ...</option>
                        <option value="1">Rented House with Garden</option>
                        <option value="2">Rented Apartment with Garden</option>
                        <option value="3">Rented Apartment</option>
                        <option value="3">Rented House</option>
                        <option value="4">Owned House with Garden</option>
                        <option value="5">Owned Apartment with Garden</option>
                        <option value="6">Owned Apartment</option>
                        <option value="7">Owned House</option>
                    </select>
                </div>
                <div>
                    <p>Additional household Members</p>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="otherowned" id="otherowned" value="option1"></input>
                        <label className="form-check-label" htmlFor="inlineRadio1">Dogs</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="otherowned" id="otherowned" value="option2"></input>
                        <label className="form-check-label" htmlFor="inlineRadio2">Cats</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="otherowned" id="otherowned" value="option3"></input>
                        <label className="form-check-label" htmlFor="inlineRadio3">Children</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="otherowned" id="otherowned" value="option3"></input>
                        <label className="form-check-label" htmlFor="inlineRadio3">All</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="otherowned" id="otherowned" value="option3"></input>
                        <label className="form-check-label" htmlFor="inlineRadio3">None</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>




            {/* <div className="app-container">
                <div class="right-container">
                    <header>
                        <h1>Sign up and join the Fun!</h1>
                        <form onSubmit={props.onSignUp} >
                            <div class="set">
                                <div class="pets-name">
                                    <label htmlFor="exampleFullName">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" name="fullName" />
                                    <small id="fullName" className="form-text text-muted"></small>


                                    <label htmlFor="exampleLocation">Full address</label>
                                    <input type="text" className="form-control" id="exampleLocation" name="location" />
                                    <small id="location" className="form-text text-muted"></small>



                                    <label htmlFor="exampleAvailability">Time at home </label>
                                    <input type="text" className="form-control" id="exampleAvailability" name="availability" />
                                    <small id="availability" className="form-text text-muted"></small>




                                </div>

                                <div class="pets-breed" >
                                    <label htmlFor="exampleInputPassword1">Email</label>
                                    <input name="email" className="form-control" id="exampleInputEmail1" />
                                    <small id="email" className="form-text text-muted"></small>

                                    <label htmlFor="examplePhone">Phone</label>
                                    <input type="text" className="form-control text-center" id="phone" name="phone" />
                                    <small id="phone" className="form-text text-muted"></small>


                                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Living Place</label>
                                    <select name="livingPlace" className="custom-select my-1 mr-sm-2" id="livingPlace">
                                        <option selected>Choose ...</option>
                                        <option value="1">Rented House with Garden</option>
                                        <option value="2">Rented Apartment with Garden</option>
                                        <option value="3">Rented Apartment</option>
                                        <option value="3">Rented House</option>
                                        <option value="4">Owned House with Garden</option>
                                        <option value="5">Owned Apartment with Garden</option>
                                        <option value="6">Owned Apartment</option>
                                        <option value="7">Owned House</option>
                                    </select>
                                    <br></br>
                                    <p>Additional household Members</p><br></br>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="otherowned" id="otherowned" value="option1"></input>
                                        <label className="form-check-label" htmlFor="inlineRadio1">Dogs</label><br></br>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="otherowned" id="otherowned" value="option2"></input>
                                        <label className="form-check-label" htmlFor="inlineRadio2">Cats</label><br></br>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="otherowned" id="otherowned" value="option3"></input>
                                        <label className="form-check-label" htmlFor="inlineRadio3">Children</label><br></br>
                                    </div>



                                </div>
                                <div class="pets-gender">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input name="password" type="password" className="form-control" id="password" />


                                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Job</label>
                                    <select name="job" className="custom-select my-1 mr-sm-2" id="job">
                                        <option selected>Choose...</option>
                                        <option value="1">Full-Time</option>
                                        <option value="2">Part-Time</option>
                                        <option value="3">No Job</option>
                                        <option value="3">Remote</option>
                                    </select>

                                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Living Place</label>
                                    <select name="livingPlace" className="custom-select my-1 mr-sm-2" id="livingPlace">
                                        <option selected>Choose ...</option>
                                        <option value="1">Rented House with Garden</option>
                                        <option value="2">Rented Apartment with Garden</option>
                                        <option value="3">Rented Apartment</option>
                                        <option value="3">Rented House</option>
                                        <option value="4">Owned House with Garden</option>
                                        <option value="5">Owned Apartment with Garden</option>
                                        <option value="6">Owned Apartment</option>
                                        <option value="7">Owned House</option>
                                    </select>







                                </div>
                            </div>




                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </header>

                </div>
            </div>
 */}




        </>
    )
}
