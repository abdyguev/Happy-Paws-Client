import React from 'react';
import { Redirect } from 'react-router-dom';
import Nav from './Nav'

export default function AddAnimals(props){

    // if (!props.loggedInUser) {
    //     return <Redirect to='/' />
    // }
    return (
        <>
        <Nav />
            <form onSubmit={props.onAdd}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" name="description" id="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="breed">Looks like</label>
                    <input type="text" className="form-control" name="breed" id="breed" />
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input type="text" className="form-control" name="color" id="color" />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" className="form-control" name="age" id="age" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" name="image" id="image" />
                </div>
                <div className="form-group">
                    <label htmlFor="height">Height</label>
                    <input type="number" className="form-control" name="height" id="height" />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input type="number" className="form-control" name="weight" id="weight" />
                </div>
                <div className="form-group">
                    <label htmlFor="hair_length">Hair length</label>
                    <select className="custom-select my-1 mr-sm-2" name="hair_length" id="hair_length">
                        <option selected>Choose...</option>
                        <option value="short">short</option>
                        <option value="medium">medium</option>
                        <option value="long">long</option>
                    </select>
                </div>
                <div className="form-group">
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
                </div>
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
                    <label htmlFor="needs_time">Need time with the owner</label>
                    <input type="number" className="form-control" name="needs_time" id="needs_time" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" name="location" id="location" />
                </div>
                <div className="form-group">
                    <label htmlFor="funfact">Funfact</label>
                    <input type="text" className="form-control" name="funfact" id="funfact" />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" name="image" id="image" />
                </div> */}
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}