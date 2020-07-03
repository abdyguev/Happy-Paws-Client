

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
// import Nav from './Nav'


export default function AddAnimals(props) {
    if (!props.loggedInUser) {
        return <Redirect to='/shelter/signup' />
    }
    return (
        <>

            <form onSubmit={props.onAdd}>
                <div class="signup-container">
                    <div class="left-container">
                        <h1>
                            <img src="/images/Happypaws.png" class="fas fa-paw" alt="paw"/>

                        </h1>
                        <div  class="puppy">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" alt="pet" /></div>
                    </div>
                    <div class="right-container">
                        <header>
                            <h1>Get your puppies the best care!</h1>
                            <div class="set">
                                <div class="pets-name">
                                    <label htmlFor="name">Name</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="name" id="name" />

                                    <label htmlFor="image">Image</label>
                                    <input style={{ alignContent: "center" }} type="file" className="form-control" name="image" id="image" />

                                    <label htmlFor="weight">Weight in kg</label>
                                    <input style={{ textAlign: "center" }} type="number" className="form-control" name="weight" id="weight" />

                                    <label htmlFor="hair_length">Hair length</label>
                                    <select className="custom-select my-1 mr-sm-2" name="hair_length" id="hair_length">
                                        <option selected>Choose...</option>
                                        <option value="short">short</option>
                                        <option value="medium">medium</option>
                                        <option value="long">long</option>
                                    </select><br></br>

                                    <label htmlFor="bad_with">Bad with:</label>
                                    <select className="custom-select my-1 mr-sm-2" name="bad_with" id="bad_with">
                                        <option selected>Choose...</option>
                                        <option value="dogs">dogs</option>
                                        <option value="cats">cats</option>
                                        <option value="children">children</option>
                                        <option value="all">all</option>
                                        <option value="none">none</option>
                                    </select>

                                </div>
                                <div class="pets-breed">
                                    <label htmlFor="description">Description</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="description" id="description" />

                                    <label htmlFor="color">Color</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="color" id="color" />

                                    <label htmlFor="height">Height in cm</label>
                                    <input style={{ textAlign: "center" }} type="number" className="form-control" name="height" id="height" />

                                    <label htmlFor="available_housing">Available for housing in</label>
                                    <select className="custom-select my-1 mr-sm-2" name="available_housing" id="available_housing">
                                        <option selected>Choose...</option>
                                        <option value="house with garden">house with garden</option>
                                        <option value="apartment with garden">apartment with garden</option>
                                        <option value="rented apartment">rented apartment</option>
                                        <option value="rented house">rented house</option>
                                        <option value="owned apartment">owned apartment</option>
                                        <option value="owned house">owned house</option>
                                    </select>

                                    <label htmlFor="funfact">Funfact</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="funfact" id="funfact" />


                                    <label htmlFor="needs_time">Need time with the owner</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="needs_time" id="needs_time" />

                                </div>
                                {/* <div class="set"> */}
                                <div class="pets-gender">
                                    <label htmlFor="age">Age</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="age" id="age" />


                                    <label htmlFor="breed">Looks like</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="breed" id="breed" />

                                    <label htmlFor="location">Location</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="location" id="location" />
                                    <label htmlFor="contact">Contact (Email or phone)</label>
                                    <input style={{ textAlign: "center" }} type="text" className="form-control" name="contact" id="contact" />

                                    <label htmlFor="good_with">Good with:</label>
                                    <select className="custom-select my-1 mr-sm-2" name="good_with" id="good_with">
                                        <option selected>Choose...</option>
                                        <option value="dogs">dogs</option>
                                        <option value="cats">cats</option>
                                        <option value="children">children</option>
                                        <option value="all">all</option>
                                        <option value="none">none</option>
                                    </select>

                                    
                                </div>


                            </div>
                        </header>
                        <footer>
                            <div class="set">
                                <button id="back"><Link className="nav-link active myContainer" to="/shelter/animals">Animals</Link></button>
                                <button id="next" style={{ textAlign: "center" }} type="submit" className="btn btn-primary">Create</button>

                            </div>
                        </footer>
                    </div>
                </div>
            </form>
        </>
    )
}
